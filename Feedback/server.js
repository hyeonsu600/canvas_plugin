const { createServer } = require('http');
const { parse } = require('url');
const next = require('next');
const path = require('path');

// 환경변수 설정 - 개발/프로덕션 환경 지원
const isDev = process.env.NODE_ENV !== 'production';

// 환경에 따른 기본값 설정 (Client ID는 환경변수에서만 가져오기)
const defaultConfig = {
  development: {
    CANVAS_LMS_URL: 'http://canvas.docker:3000',
    TOOL_URL: 'https://canvas.docker:3002'
  },
  production: {
    CANVAS_LMS_URL: 'https://lms.kimhaksa.com',
    TOOL_URL: 'https://test1.kimhaksa.com'
  }
};

const config = isDev ? defaultConfig.development : defaultConfig.production;

// 환경변수 설정 (Client ID와 Secret은 환경변수에서만)
process.env.CANVAS_LMS_URL = process.env.CANVAS_LMS_URL || config.CANVAS_LMS_URL;
process.env.TOOL_URL = process.env.TOOL_URL || config.TOOL_URL;

console.log(`🔧 환경변수 설정 완료 (${isDev ? '개발' : '프로덕션'} 모드):`, {
  CANVAS_LMS_URL: process.env.CANVAS_LMS_URL,
  TOOL_URL: process.env.TOOL_URL,
  CLIENT_ID: process.env.LTI_CLIENT_ID || '환경변수에서 설정 필요'
});

// 개발 모드 강제 설정 (커스텀 서버용)
const dev = true;
const app = next({ dev });
const handle = app.getRequestHandler();

const port = process.env.PORT || 3002;

app.prepare().then(() => {
  // HTTP 서버로 변경 (SSL 인증서 파일 불필요)
  const server = createServer((req, res) => {
    // Canvas iframe에서 로드될 수 있도록 헤더 설정
    res.setHeader('X-Frame-Options', 'ALLOWALL');
    res.setHeader('Content-Security-Policy', 'frame-ancestors *');
    
    const parsedUrl = parse(req.url, true);
    handle(req, res, parsedUrl);
  });
  
  server.listen(port, err => {
    if (err) throw err;
    console.log(`✅ HTTP server ready on http://localhost:${port}`);
    console.log(`🔒 HTTPS는 Nginx Proxy Manager가 처리합니다.`);
  });
}); 