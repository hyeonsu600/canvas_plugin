const lti = require('ltijs');
const path = require('path');

// LTI 설정
const ltiProvider = lti.Provider;

async function setup() {
  try {
    // LTI Provider 설정
    await ltiProvider.setup(
      process.env.LTI_KEY || 'LTIKEY', // 암호화 키
      {
        url: 'mongodb://localhost:27017/ltidb', // MongoDB URL (선택사항)
        connection: { user: '', pass: '' }
      },
      {
        staticPath: path.join(__dirname, 'public'),
        cookies: {
          secure: false, // 로컬 개발용
          sameSite: 'None'
        },
        devMode: true // 개발 모드
      }
    );

    // Canvas 플랫폼 등록
    await ltiProvider.registerPlatform({
      url: 'https://canvas.instructure.com',
      name: 'Canvas',
      clientId: process.env.LTI_CLIENT_ID,
      authenticationEndpoint: 'http://localhost:3000/api/lti/authorize_redirect',
      accesstokenEndpoint: 'http://localhost:3000/login/oauth2/token',
      authConfig: { 
        method: 'JWK_SET', 
        key: 'http://localhost:3000/api/lti/security/jwks' 
      }
    });

    // LTI 메인 라우트 설정
    ltiProvider.onConnect(async (token, req, res) => {
      console.log('✅ LTI 연결 성공!');
      console.log('User:', token.userInfo);
      console.log('Context:', token.platformContext);
      
      // 기존 React 앱으로 리디렉션
      return res.sendFile(path.join(__dirname, 'public', 'index.html'));
    });

    // Deep Linking 설정
    ltiProvider.onDeepLinking(async (token, req, res) => {
      console.log('📎 Deep Linking 요청');
      
      // Deep Linking 응답 생성
      const resource = {
        type: 'ltiResourceLink',
        title: 'Feedback Analysis Tool',
        url: `${process.env.TOOL_URL}`,
        custom: {
          course_id: token.platformContext.id
        }
      };

      // Deep Linking 응답 전송
      const form = await ltiProvider.DeepLinking.createDeepLinkingForm(token, [resource], {
        message: 'Feedback tool이 성공적으로 링크되었습니다!'
      });
      
      return res.send(form);
    });

    // 서버 시작
    await ltiProvider.deploy({ port: 3002 });
    console.log('🚀 LTI 서버가 http://localhost:3002에서 실행 중입니다!');
    console.log('🌐 공개 URL: https://silly-buses-sniff.loca.lt');
    
  } catch (err) {
    console.error('❌ LTI 서버 설정 오류:', err);
  }
}

// 환경변수 확인
if (!process.env.LTI_CLIENT_ID) {
  console.error('❌ LTI_CLIENT_ID 환경변수가 설정되지 않았습니다!');
  console.log('💡 임시로 "temporary_client_id"를 사용합니다.');
}

setup(); 