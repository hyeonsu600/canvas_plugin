import jwt from 'jsonwebtoken';
import jwksClient from 'jwks-rsa';

const client = jwksClient({
  jwksUri: `http://localhost:3000/api/lti/security/jwks`,
});

function getKey(header, callback) {
  client.getSigningKey(header.kid, function(err, key) {
    if (err) {
      console.error("Failed to get signing key:", err);
      return callback(err);
    }
    const signingKey = key.publicKey || key.rsaPublicKey;
    callback(null, signingKey);
  });
}

export default async function handler(req, res) {
  if (req.method !== 'POST' && req.method !== 'GET') {
    return res.status(405).send('Method Not Allowed');
  }

  // GET 요청 시 (오류 처리)
  if (req.method === 'GET') {
    const { error, error_description } = req.query;
    if (error) {
      console.error("Canvas OAuth Error:", error, error_description);
      return res.status(400).send(`Canvas OAuth Error: ${error} - ${error_description}`);
    }
  }

  try {
    const { id_token } = req.body || req.query;

    // **개발 모드**: id_token 이 없다면 그냥 UI를 띄워준다
    if (!id_token) {
      console.warn('⚠️ Dev fallback: no id_token, skipping validation');
      return res.redirect('/');
    }

    console.log("LTI launch request received! Verifying token...");

    const decoded = await new Promise((resolve, reject) => {
      jwt.verify(id_token, getKey, { 
        algorithms: ['RS256'],
        audience: process.env.LTI_CLIENT_ID,
        issuer: 'http://localhost:3000'
       }, (err, decoded) => {
        if (err) {
          console.error("Token verification failed:", err);
          return reject(err);
        }
        resolve(decoded);
      });
    });

    console.log("Token verified successfully:", decoded);
    
    const toolUrl = new URL(process.env.TOOL_URL);
    res.redirect(toolUrl.origin);

  } catch (error) {
    console.error("LTI Launch Error:", error);
    res.status(500).send(`LTI Launch Failed: ${error.message}`);
  }
} 