// pages/api/lti/launch.js
import jwt from 'jsonwebtoken';
import jwksClient from 'jwks-rsa';

export default async function handler(req, res) {
  const id_token = req.body.id_token || req.query.id_token;
  
  // **개발 모드**: id_token 이 없다면 그냥 UI를 띄워준다
  if (!id_token) {
    console.warn('⚠️ Dev fallback: no id_token, skipping validation');
    return res.redirect('/');
  }

  // --- 이하 진짜 LTI 검증 흐름 ---
  try {
    const client = jwksClient({ jwksUri: `${process.env.CANVAS_URL}/api/lti/security/jwks` });
    const getKey = (header, callback) =>
      client.getSigningKey(header.kid, (err, key) => callback(err, key && key.getPublicKey()));

    const decoded = await new Promise((resolve, reject) =>
      jwt.verify(id_token, getKey, {
        issuer: process.env.CANVAS_URL,
        audience: process.env.LTI_CLIENT_ID,
        algorithms: ['RS256'],
      }, (err, decoded) => err ? reject(err) : resolve(decoded))
    );
    console.log('LTI payload:', decoded);
    // …정상 처리…
    res.send(`<h1>LTI Launch Succeeded</h1><pre>${JSON.stringify(decoded, null, 2)}</pre>`);
  } catch (e) {
    console.error(e);
    res.status(401).send(`LTI 검증 실패: ${e.message}`);
  }
}
