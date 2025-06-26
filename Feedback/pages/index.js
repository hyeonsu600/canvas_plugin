import React from 'react';

export default function Home() {
  return React.createElement('div', { style: { padding: '20px' } }, [
    React.createElement('h1', { key: 'title' }, 'Canvas LTI Feedback App'),
    React.createElement('p', { key: 'status' }, '✅ HTTP 서버 실행 중'),
    React.createElement('p', { key: 'domain' }, '🔗 Domain: test1.kimhaksa.com'),
    React.createElement('p', { key: 'canvas' }, '📚 Canvas: lms.kimhaksa.com'),
    React.createElement('div', { key: 'endpoints' }, [
      React.createElement('h3', { key: 'ep-title' }, 'LTI Endpoints:'),
      React.createElement('ul', { key: 'ep-list' }, [
        React.createElement('li', { key: 'login' }, '/api/lti/login'),
        React.createElement('li', { key: 'launch' }, '/api/lti/launch'),
        React.createElement('li', { key: 'jwks' }, '/api/lti/jwks')
      ])
    ])
  ]);
} 