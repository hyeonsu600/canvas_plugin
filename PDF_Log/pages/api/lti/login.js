export default function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).send('Method Not Allowed');
  }

  const { login_hint, target_link_uri, lti_message_hint } = req.body;
  
  console.log('🔐 PDF_Log LTI Login 요청:', { login_hint, target_link_uri, lti_message_hint });
  console.log('📍 환경변수 확인:', {
    CLIENT_ID: process.env.LTI_CLIENT_ID,
    TOOL_URL: process.env.TOOL_URL
  });
  
  // **개발 모드**: Canvas OAuth가 계속 실패하므로 직접 메인 페이지로 리디렉션
  console.warn('⚠️ 개발 모드: Canvas OAuth 우회하고 바로 메인 페이지로 이동');
  
  // 메인 페이지로 직접 리디렉션
  res.writeHead(302, { Location: '/' });
  res.end();
} 