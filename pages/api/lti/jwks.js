// pages/api/lti/jwks.js
export default function handler(req, res) {
  // 개발용 예제 RSA 키의 공개 부분을 JWK 형식으로 제공
  // 실제로는 node-jose 등으로 생성하거나 .pem 파일을 변환하여 사용
  const jwk = {
    keys: [
      {
        kty: 'RSA',
        kid: 'tool-key-1',
        use: 'sig',
        alg: 'RS256',
        n: 'xoF8lqTnRe... (Base64 URL) ...Z28M',  // 예시
        e: 'AQAB'
      }
    ]
  };
  res.json(jwk);
}
