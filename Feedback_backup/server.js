const { createServer } = require('https');
const { parse } = require('url');
const next = require('next');
const fs = require('fs');
const path = require('path');

// 환경변수 직접 설정 (급한 해결책)
process.env.LTI_CLIENT_ID = '10000000000004';
process.env.LTI_CLIENT_SECRET = '8ZeKkBNnCuwZL9VnWv8ecK4z7rXGeYLQL2GJVAM2GJPk4x4YRknHrEvMCRTYkkP9';
process.env.TOOL_URL = 'https://canvas.docker:3002';

console.log('🔧 환경변수 강제 설정 완료:', {
  CLIENT_ID: process.env.LTI_CLIENT_ID,
  TOOL_URL: process.env.TOOL_URL
});

const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();

// mkcert로 생성한 SSL 옵션
const httpsOptions = {
  key: fs.readFileSync(path.join(__dirname, 'localhost-key.pem')),
  cert: fs.readFileSync(path.join(__dirname, 'localhost.pem')),
};

const port = 3002;

app.prepare().then(() => {
  createServer(httpsOptions, (req, res) => {
    // Canvas iframe에서 로드될 수 있도록 헤더 설정
    res.setHeader('X-Frame-Options', 'ALLOWALL');
    res.setHeader('Content-Security-Policy', 'frame-ancestors *');
    
    const parsedUrl = parse(req.url, true);
    handle(req, res, parsedUrl);
  }).listen(port, err => {
    if (err) throw err;
    console.log(`> HTTPS server ready on https://localhost:${port}`);
  });
}); 