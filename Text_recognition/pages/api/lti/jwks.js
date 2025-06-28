import jose from 'node-jose';

export default async function handler(req, res) {
  if (req.method !== 'GET') {
    return res.status(405).send('Method Not Allowed');
  }

  try {
    // 개발용 키 생성
    const keystore = jose.JWK.createKeyStore();
    await keystore.generate('RSA', 2048, { alg: 'RS256', use: 'sig' });
    
    const jwks = keystore.toJSON();
    
    res.setHeader('Content-Type', 'application/json');
    res.status(200).json(jwks);
  } catch (error) {
    console.error('Text_recognition JWKS Error:', error);
    res.status(500).json({ error: 'JWKS generation failed' });
  }
} 