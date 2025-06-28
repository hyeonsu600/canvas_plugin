const { createServer } = require('http');
const { parse } = require('url');
const next = require('next');

// 환경변수 직접 설정 (필수!)
process.env.LTI_CLIENT_ID = '10000000000006';
process.env.LTI_CLIENT_SECRET = 'YwQaCRCxEhNAehPzrCzz9vTknD9ezKWf3F6amvDctMEmzkCe3fTGr23hAEtDmwyH';
process.env.TOOL_URL = 'https://test3.kimhaksa.com';
process.env.CANVAS_LMS_URL = 'https://lms.kimhaksa.com';

console.log('🔧 Text_recognition 앱 환경변수 설정 완료 (프로덕션 모드):');
console.log({
  CANVAS_LMS_URL: process.env.CANVAS_LMS_URL,
  TOOL_URL: process.env.TOOL_URL,
  CLIENT_ID: process.env.LTI_CLIENT_ID,
  PORT: '3004'
});

const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();

const port = process.env.PORT || 3004;

app.prepare().then(() => {
  createServer((req, res) => {
    // 헤더 설정은 next.config.mjs에서 처리
    
    const parsedUrl = parse(req.url, true);
    handle(req, res, parsedUrl);
  }).listen(port, err => {
    if (err) throw err;
    console.log(`✅ Text_recognition HTTP server ready on http://localhost:${port}`);
    console.log('🔒 HTTPS는 Nginx Proxy Manager가 처리합니다.');
    console.log(`🎯 LTI Client ID: ${process.env.LTI_CLIENT_ID}`);
    console.log(`🌐 Tool URL: ${process.env.TOOL_URL}`);
  });
}); 