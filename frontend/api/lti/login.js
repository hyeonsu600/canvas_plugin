// pages/api/lti/login.js
export default function handler(req, res) {
  const { login_hint, target_link_uri } = req.query;  
  const canvasUrl   = process.env.CANVAS_URL;      // ex: https://localhost:3000
  const clientId    = process.env.LTI_CLIENT_ID;   // ex: 10000000000001
  const redirectUri = `${process.env.TOOL_URL}/api/lti/launch`;

  // state/nonce 생성 (실제 서비스에선 DB나 세션에 저장해 검증)
  const state = Math.random().toString(36).slice(2);
  const nonce = Math.random().toString(36).slice(2);

  // Canvas OIDC 인증 엔드포인트로 보낼 URL 조립
  const authUrl = [
    `${canvasUrl}/login/oauth2/auth`,
    `?scope=openid`,
    `&response_type=id_token`,
    `&response_mode=form_post`,
    `&client_id=${encodeURIComponent(clientId)}`,
    `&redirect_uri=${encodeURIComponent(redirectUri)}`,
    `&login_hint=${encodeURIComponent(login_hint)}`,
    `&nonce=${encodeURIComponent(nonce)}`,
    `&state=${encodeURIComponent(state)}`,
    `&prompt=none`,
    `&target_link_uri=${encodeURIComponent(target_link_uri)}`
  ].join('');

  // **302** 로 명시 → 항상 GET → Canvas는 form_post 로 응답
  res.redirect(302, authUrl);
}
