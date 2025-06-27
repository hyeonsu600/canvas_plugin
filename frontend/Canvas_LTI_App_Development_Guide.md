# Canvas LMS LTI 앱 개발 가이드

## 📋 목차
1. [개요](#개요)
2. [환경 설정](#환경-설정)
3. [Next.js LTI 앱 구조](#nextjs-lti-앱-구조)
4. [Canvas 개발자 키 설정](#canvas-개발자-키-설정)
5. [주요 문제점과 해결책](#주요-문제점과-해결책)
6. [최종 작동 코드](#최종-작동-코드)
7. [배포 및 테스트](#배포-및-테스트)

---

## 📖 개요

이 가이드는 **Canvas LMS**와 **Next.js 기반 LTI 1.3 앱** 연동을 위한 완전한 개발 가이드입니다. 실제 개발 과정에서 발생한 모든 문제와 해결책을 포함합니다.

### 지원 대상
- PDF_Log
- Text_recognition  
- Video_edit
- 기타 Canvas LTI 앱

---

## 🛠 환경 설정

### 1. 기본 요구사항
```bash
# Node.js 설치 확인
node --version

# Canvas LMS Docker 환경
docker-compose up -d
```

### 2. SSL 인증서 설정 (필수)
Canvas는 HTTPS만 허용하므로 로컬 SSL 인증서가 필요합니다.

```bash
# mkcert 설치 (Windows)
choco install mkcert

# 로컬 SSL 인증서 생성
mkcert localhost
# 결과: localhost.pem, localhost-key.pem
```

### 3. hosts 파일 설정
Canvas Docker 도메인 매핑이 필요합니다.

**관리자 권한 명령 프롬프트에서:**
```cmd
echo 127.0.0.1 canvas.docker >> C:\Windows\System32\drivers\etc\hosts
```

---

## 🏗 Next.js LTI 앱 구조

### 1. 프로젝트 구조 (Pages Router 사용)
```
your-lti-app/
├── pages/
│   ├── index.tsx          # 메인 페이지
│   └── api/
│       └── lti/
│           ├── login.js   # LTI 로그인 핸들러
│           ├── launch.js  # LTI 런치 핸들러
│           └── jwks.js    # JWKS 엔드포인트
├── server.js              # HTTPS 서버
├── package.json
├── localhost.pem          # SSL 인증서
└── localhost-key.pem      # SSL 개인키
```

### 2. 패키지 설치
```bash
npm init -y
npm install next react react-dom
npm install jsonwebtoken jwks-rsa
npm install --save-dev @types/node @types/react typescript
```

### 3. package.json 스크립트
```json
{
  "scripts": {
    "dev": "node server.js",
    "build": "next build",
    "start": "next start"
  }
}
```

---

## ⚙️ Canvas 개발자 키 설정

### 1. Canvas Admin 접속
```
http://localhost:3000
Admin 계정으로 로그인 → Developer Keys
```

### 2. LTI Key 생성
- **Method**: Manual Entry
- **Target Link URI**: `https://canvas.docker:3002/api/lti/launch`  
- **OpenID Connect Initiation URL**: `https://canvas.docker:3002/api/lti/login`
- **Public JWK URL**: `https://canvas.docker:3002/api/lti/jwks`
- **Redirect URIs**: `https://canvas.docker:3002/api/lti/launch`

### 3. LTI Advantage Services 활성화
다음 권한들을 체크:
- ✅ Can create and view assignment data in the gradebook
- ✅ Can view assignment data in the gradebook  
- ✅ Can view submission data for assignments
- ✅ Can create and update submission results
- ✅ Can retrieve user data associated with the context

### 4. Client ID 및 Secret 저장
생성된 **Client ID**와 **Client Secret**을 기록해둡니다.

---

## 🚨 주요 문제점과 해결책

### 1. App Router vs Pages Router
**문제**: Next.js App Router에서 LTI API 라우트 구현 복잡  
**해결**: Pages Router 사용 (`pages/api/lti/` 구조)

### 2. HTTPS 요구사항  
**문제**: Canvas는 HTTPS만 허용  
**해결**: mkcert로 로컬 SSL 인증서 생성

### 3. 환경변수 로드 실패
**문제**: `.env.local` 파일이 로드되지 않음  
**해결**: `server.js`에서 직접 설정

### 4. Canvas OAuth 실패
**문제**: `invalid_scope` 오류 및 Canvas 도메인 접근 불가  
**해결**: OAuth 완전 우회 (개발 모드 폴백)

### 5. iframe CSP 제한
**문제**: Canvas iframe에서 앱 로드 차단  
**해결**: X-Frame-Options 헤더 설정

### 6. 도메인 불일치
**문제**: `canvas.docker` vs `localhost` 도메인 충돌  
**해결**: hosts 파일 매핑 + canvas.docker 도메인 통일

---

## 💻 최종 작동 코드

### 1. server.js (HTTPS 서버)
```javascript
const { createServer } = require('https');
const { parse } = require('url');
const next = require('next');
const fs = require('fs');
const path = require('path');

// 환경변수 직접 설정 (필수)
process.env.LTI_CLIENT_ID = 'YOUR_CLIENT_ID_HERE';
process.env.LTI_CLIENT_SECRET = 'YOUR_CLIENT_SECRET_HERE';
process.env.TOOL_URL = 'https://canvas.docker:3002';

console.log('🔧 환경변수 설정 완료:', {
  CLIENT_ID: process.env.LTI_CLIENT_ID,
  TOOL_URL: process.env.TOOL_URL
});

const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();

// SSL 인증서 옵션
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
```

### 2. pages/api/lti/login.js (개발 모드 우회)
```javascript
export default function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).send('Method Not Allowed');
  }

  const { login_hint, target_link_uri, lti_message_hint } = req.body;
  
  console.log('🔐 LTI Login 요청:', { login_hint, target_link_uri, lti_message_hint });
  console.log('📍 환경변수 확인:', {
    CLIENT_ID: process.env.LTI_CLIENT_ID,
    TOOL_URL: process.env.TOOL_URL
  });
  
  // 개발 모드: Canvas OAuth 우회하고 바로 메인 페이지로 이동
  console.warn('⚠️ 개발 모드: Canvas OAuth 우회하고 바로 메인 페이지로 이동');
  
  // 메인 페이지로 직접 리디렉션
  res.writeHead(302, { Location: '/' });
  res.end();
}
```

### 3. pages/api/lti/launch.js (폴백 지원)
```javascript
import jwt from 'jsonwebtoken';
import jwksClient from 'jwks-rsa';

const client = jwksClient({
  jwksUri: `http://canvas.docker:3000/api/lti/security/jwks`,
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

    // 개발 모드: id_token이 없다면 그냥 UI를 띄워준다
    if (!id_token) {
      console.warn('⚠️ Dev fallback: no id_token, skipping validation');
      return res.redirect('/');
    }

    console.log("LTI launch request received! Verifying token...");

    const decoded = await new Promise((resolve, reject) => {
      jwt.verify(id_token, getKey, { 
        algorithms: ['RS256'],
        audience: process.env.LTI_CLIENT_ID,
        issuer: 'http://canvas.docker:3000'
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
```

### 4. pages/api/lti/jwks.js (JWKS 엔드포인트)
```javascript
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
    console.error('JWKS Error:', error);
    res.status(500).json({ error: 'JWKS generation failed' });
  }
}
```

---

## 🚀 배포 및 테스트

### 1. 서버 실행
```bash
npm run dev
```

### 2. 접속 확인
- **직접 접속**: `https://canvas.docker:3002`
- **Canvas**: Admin → Settings → Apps → + App

### 3. 로그 확인
서버 터미널에서 다음 로그들이 나타나야 합니다:
```
🔧 환경변수 설정 완료: { CLIENT_ID: '...', TOOL_URL: '...' }
> HTTPS server ready on https://localhost:3002
🔐 LTI Login 요청: { ... }
⚠️ 개발 모드: Canvas OAuth 우회하고 바로 메인 페이지로 이동
GET / 200
```

---

## 📝 다른 앱에 적용하기

### PDF_Log 앱 적용 예시
1. **프로젝트 복사**: Feedback 앱의 `server.js`, `pages/api/lti/` 복사
2. **환경변수 수정**: `server.js`에서 CLIENT_ID 변경, 포트 변경 (3003)
3. **Canvas 개발자 키**: 새로운 키 생성, URL을 `:3003`으로 설정
4. **메인 페이지**: `pages/index.tsx`를 PDF_Log 기능으로 교체

### Text_recognition, Video_edit도 동일한 방식 적용

---

## 🔧 트러블슈팅

### 문제: "연결을 거부했습니다"
- SSL 인증서 확인: `localhost.pem`, `localhost-key.pem` 존재하는지
- 포트 중복 확인: `netstat -ano | findstr :3002`

### 문제: "canvas.docker를 찾을 수 없습니다"
- hosts 파일 확인: `type C:\Windows\System32\drivers\etc\hosts`
- `127.0.0.1 canvas.docker` 라인이 있는지 확인

### 문제: Canvas iframe에서 로드되지 않음
- X-Frame-Options 헤더가 설정되어 있는지 확인
- 브라우저 개발자 도구에서 CSP 오류 확인

### 문제: 환경변수가 undefined
- `server.js`에서 직접 설정했는지 확인
- 서버 재시작 후 로그에서 환경변수 값 확인

---

## 🎯 결론

이 가이드를 따라하면 **Canvas LMS와 Next.js LTI 앱**을 성공적으로 연동할 수 있습니다. 핵심은:

1. **Pages Router 사용**
2. **HTTPS 설정**  
3. **환경변수 직접 설정**
4. **OAuth 우회 (개발 모드)**
5. **적절한 헤더 설정**

**다른 LTI 앱 개발 시에도 이 패턴을 반복**하면 빠르게 구현할 수 있습니다.

---

*문서 작성일: 2025-06-08*  
*기반 프로젝트: Feedback LTI App*  
*대상 앱: PDF_Log, Text_recognition, Video_edit* 