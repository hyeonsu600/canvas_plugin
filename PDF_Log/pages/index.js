import { useEffect } from 'react';
import { useRouter } from 'next/router';

export default function Home() {
  const router = useRouter();

  useEffect(() => {
    // Canvas LTI에서 오는 경우 기존 App Router 앱으로 리디렉션
    console.log('📍 PDF_Log Pages Router에서 App Router로 리디렉션');
    
    // 실제 PDF_Log 앱 기능은 app/ 디렉토리에 있음
    // 하지만 Canvas iframe에서는 같은 도메인이므로 현재 페이지에 표시
    
    // 개발 중에는 App Router 앱이 잘 작동하는지 확인
    window.location.href = '/app';
  }, []);

  return (
    <div style={{ 
      display: 'flex', 
      justifyContent: 'center', 
      alignItems: 'center', 
      height: '100vh',
      backgroundColor: '#f8f9fa'
    }}>
      <div style={{ textAlign: 'center' }}>
        <h1>📄 PDF_Log LTI App</h1>
        <p>Canvas LTI 앱이 로딩 중입니다...</p>
        <p>잠시만 기다려주세요.</p>
        
        <div style={{ marginTop: '20px' }}>
          <a href="/app" style={{ 
            padding: '10px 20px', 
            backgroundColor: '#007bff', 
            color: 'white', 
            textDecoration: 'none', 
            borderRadius: '5px' 
          }}>
            PDF_Log 앱으로 이동
          </a>
        </div>
      </div>
    </div>
  );
} 