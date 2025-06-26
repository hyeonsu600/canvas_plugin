# Canvas LTI Feedback App

Canvas LMS와 연동되는 Next.js 기반 LTI 1.3 앱입니다.

## 🚀 빠른 시작

### 1. 의존성 설치
```bash
npm install
```

### 2. 환경변수 설정

프로덕션 환경에서는 다음 환경변수를 설정하세요:

```bash
# 환경 설정
export NODE_ENV=production

# Canvas LMS 서버 URL
export CANVAS_LMS_URL=https://lms.kimhaksa.com

# LTI Tool URL (이 앱의 URL)
export TOOL_URL=https://test1.kimhaksa.com

# Canvas에서 발급받은 LTI Credentials
export LTI_CLIENT_ID=your_canvas_client_id_here
export LTI_CLIENT_SECRET=your_canvas_client_secret_here

# 서버 포트 (기본값: 3002)
export PORT=3002
```

또는 `.env.local` 파일을 생성하여 설정:

```
NODE_ENV=production
CANVAS_LMS_URL=https://lms.kimhaksa.com
TOOL_URL=https://test1.kimhaksa.com
LTI_CLIENT_ID=your_canvas_client_id_here
LTI_CLIENT_SECRET=your_canvas_client_secret_here
PORT=3002
```

### 3. SSL 인증서 (프로덕션)

프로덕션 환경에서는 `test1.kimhaksa.com`용 SSL 인증서가 필요합니다:
- `localhost.pem` → `test1.kimhaksa.com.pem`
- `localhost-key.pem` → `test1.kimhaksa.com-key.pem`

### 4. 서버 실행

```bash
npm run dev
```

## 🔧 Canvas 개발자 키 설정

Canvas LMS에서 다음과 같이 설정하세요:

- **Target Link URI**: `https://test1.kimhaksa.com/api/lti/launch`
- **OpenID Connect Initiation URL**: `https://test1.kimhaksa.com/api/lti/login`
- **Public JWK URL**: `https://test1.kimhaksa.com/api/lti/jwks`
- **Redirect URIs**: `https://test1.kimhaksa.com/api/lti/launch`

## 📝 환경별 설정

### 개발 환경 (기본값)
- Canvas LMS: `http://canvas.docker:3000`
- Tool URL: `https://canvas.docker:3002`

### 프로덕션 환경
- Canvas LMS: `https://lms.kimhaksa.com`
- Tool URL: `https://test1.kimhaksa.com`

## 🔍 로그 확인

서버 시작 시 다음과 같은 로그가 출력됩니다:

```
🔧 환경변수 설정 완료 (프로덕션 모드):
{
  CANVAS_LMS_URL: 'https://lms.kimhaksa.com',
  TOOL_URL: 'https://test1.kimhaksa.com',
  CLIENT_ID: 'your_client_id'
}
✅ SSL 인증서 로드 성공 (localhost용)
> HTTPS server ready on https://localhost:3002 