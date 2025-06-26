import React, { useState, useEffect } from 'react';

export default function AcademicTable() {
  const [students, setStudents] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [showAnalysis, setShowAnalysis] = useState(false);
  const [averages, setAverages] = useState([0, 0, 0, 0, 0]);
  const [keywordAnalysis, setKeywordAnalysis] = useState("");

  useEffect(() => {
    const fetchStudents = async () => {
      setIsLoading(true);
      try {
        const response = await fetch('/api/feedback/students');
        if (!response.ok) {
          throw new Error('Failed to fetch students');
        }
        const data = await response.json();
        setStudents(data);
      } catch (error) {
        console.error(error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchStudents();
  }, []);

  const performAnalysis = () => {
    if (students.length === 0) {
      alert("학생 데이터가 없습니다.");
      return;
    }
    
    const columnAverages = [0, 0, 0, 0, 0];

    students.forEach((student) => {
      student.scores.forEach((score, index) => {
        columnAverages[index] += score;
      });
      columnAverages[4] += student.average;
    });

    for (let i = 0; i < columnAverages.length; i++) {
      columnAverages[i] = Number.parseFloat((columnAverages[i] / students.length).toFixed(1));
    }

    setAverages(columnAverages);

    const feedbacks = students.map((s) => s.feedback);
    const keywords = ["재미", "어려움", "부족", "유익", "많음", "좋음"];
    const keywordCounts = {};

    keywords.forEach((keyword) => {
      keywordCounts[keyword] = feedbacks.filter((f) => f.includes(keyword)).length;
    });

    const analysisText = `주요 키워드: ${Object.entries(keywordCounts)
      .filter(([_, count]) => count > 0)
      .map(([keyword, count]) => `${keyword}(${count})`)
      .join(", ")}. 전반적으로 과제량과 수업 난이도에 대한 의견이 많음.`;

    setKeywordAnalysis(analysisText);
    setShowAnalysis(true);
  };

  if (isLoading) {
    return React.createElement('div', {
      style: { 
        margin: '0 auto', 
        padding: '2rem 1rem', 
        textAlign: 'center',
        fontFamily: 'Arial, sans-serif'
      }
    }, 'Loading students data...');
  }

  return React.createElement('div', {
    style: { 
      margin: '0 auto', 
      padding: '2rem 1rem',
      fontFamily: 'Arial, sans-serif'
    }
  }, [
    // 테이블 컨테이너
    React.createElement('div', { 
      key: 'table-container',
      style: { overflowX: 'auto' }
    }, [
      React.createElement('div', {
        key: 'scrollable-table',
        style: {
          height: '300px',
          overflowY: 'auto',
          border: '1px solid #d1d5db',
          borderRadius: '8px'
        }
      }, [
        React.createElement('table', {
          key: 'main-table',
          style: { 
            width: '100%', 
            borderCollapse: 'collapse',
            fontSize: '14px'
          }
        }, [
          // 테이블 헤더
          React.createElement('thead', {
            key: 'thead',
            style: { 
              position: 'sticky', 
              top: 0, 
              backgroundColor: '#f9fafb',
              borderBottom: '2px solid #e5e7eb'
            }
          }, [
            React.createElement('tr', { key: 'header-row' }, [
              React.createElement('th', { key: 'h1', style: { border: '1px solid #d1d5db', padding: '12px 8px', textAlign: 'center', fontWeight: 'bold' } }, '순번'),
              React.createElement('th', { key: 'h2', style: { border: '1px solid #d1d5db', padding: '12px 8px', textAlign: 'center', fontWeight: 'bold' } }, '이름'),
              React.createElement('th', { key: 'h3', style: { border: '1px solid #d1d5db', padding: '12px 8px', textAlign: 'center', fontWeight: 'bold' } }, '학번'),
              React.createElement('th', { key: 'h4', style: { border: '1px solid #d1d5db', padding: '12px 8px', textAlign: 'center', fontWeight: 'bold' } }, '학과'),
              React.createElement('th', { key: 'h5', style: { border: '1px solid #d1d5db', padding: '12px 8px', textAlign: 'center', fontWeight: 'bold' } }, '1번'),
              React.createElement('th', { key: 'h6', style: { border: '1px solid #d1d5db', padding: '12px 8px', textAlign: 'center', fontWeight: 'bold' } }, '2번'),
              React.createElement('th', { key: 'h7', style: { border: '1px solid #d1d5db', padding: '12px 8px', textAlign: 'center', fontWeight: 'bold' } }, '3번'),
              React.createElement('th', { key: 'h8', style: { border: '1px solid #d1d5db', padding: '12px 8px', textAlign: 'center', fontWeight: 'bold' } }, '4번'),
              React.createElement('th', { key: 'h9', style: { border: '1px solid #d1d5db', padding: '12px 8px', textAlign: 'center', fontWeight: 'bold' } }, '평균'),
              React.createElement('th', { key: 'h10', style: { border: '1px solid #d1d5db', padding: '12px 8px', textAlign: 'center', fontWeight: 'bold', minWidth: '200px' } }, '피드백')
            ])
          ]),
          // 테이블 바디
          React.createElement('tbody', { key: 'tbody' },
            students.map((student) =>
              React.createElement('tr', {
                key: student.id,
                style: { 
                  backgroundColor: student.id % 2 === 0 ? '#f9fafb' : 'white',
                  borderBottom: '1px solid #e5e7eb'
                }
              }, [
                React.createElement('td', { key: 'id', style: { border: '1px solid #d1d5db', padding: '8px', textAlign: 'center' } }, student.id),
                React.createElement('td', { key: 'name', style: { border: '1px solid #d1d5db', padding: '8px', textAlign: 'center' } }, student.name),
                React.createElement('td', { key: 'studentId', style: { border: '1px solid #d1d5db', padding: '8px', textAlign: 'center' } }, student.studentId),
                React.createElement('td', { key: 'department', style: { border: '1px solid #d1d5db', padding: '8px', textAlign: 'center' } }, student.department),
                ...student.scores.map((score, index) =>
                  React.createElement('td', { key: `score-${index}`, style: { border: '1px solid #d1d5db', padding: '8px', textAlign: 'center', fontWeight: 'bold' } }, score)
                ),
                React.createElement('td', { key: 'average', style: { border: '1px solid #d1d5db', padding: '8px', textAlign: 'center', fontWeight: 'bold', color: '#059669' } }, student.average),
                React.createElement('td', { key: 'feedback', style: { border: '1px solid #d1d5db', padding: '8px', textAlign: 'left', fontSize: '12px' } }, student.feedback)
              ])
            )
          )
        ])
      ])
    ]),
    
    // 분석 섹션
    React.createElement('div', { 
      key: 'analysis-section', 
      style: { 
        marginTop: '2rem', 
        display: 'flex',
        gap: '0',
        border: '1px solid #d1d5db',
        borderRadius: '8px',
        overflow: 'hidden'
      } 
    }, [
      React.createElement('button', {
        key: 'analysis-button',
        onClick: performAnalysis,
        style: {
          backgroundColor: '#d9d9d9',
          padding: '1rem',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          width: '100px',
          cursor: 'pointer',
          border: 'none',
          borderRight: '1px solid #d1d5db',
          fontSize: '14px',
          fontWeight: 'bold',
          transition: 'background-color 0.2s'
        },
        onMouseOver: (e) => e.target.style.backgroundColor = '#bfdbfe',
        onMouseOut: (e) => e.target.style.backgroundColor = '#d9d9d9'
      }, React.createElement('span', { style: { textAlign: 'center', lineHeight: '1.2' } }, '분석\n버튼')),
      
      React.createElement('div', { key: 'analysis-results', style: { flex: 1 } }, [
        React.createElement('table', {
          key: 'analysis-table',
          style: { 
            width: '100%', 
            borderCollapse: 'collapse'
          }
        }, [
          React.createElement('tbody', { key: 'analysis-tbody' }, [
            React.createElement('tr', { key: 'analysis-row', style: { backgroundColor: 'white' } }, [
              React.createElement('td', {
                key: 'label',
                style: {
                  padding: '1rem',
                  textAlign: 'center',
                  width: '120px',
                  fontWeight: 'bold',
                  backgroundColor: '#f3f4f6',
                  borderRight: '1px solid #d1d5db'
                }
              }, '학목별 평균'),
              ...(showAnalysis ? [
                ...averages.map((avg, index) =>
                  React.createElement('td', {
                    key: `avg-${index}`,
                    style: {
                      padding: '1rem',
                      textAlign: 'center',
                      width: '60px',
                      fontWeight: 'bold',
                      color: avg >= 85 ? '#059669' : avg >= 80 ? '#d97706' : '#dc2626',
                      borderRight: index < 4 ? '1px solid #e5e7eb' : 'none'
                    }
                  }, avg)
                ),
                React.createElement('td', {
                  key: 'analysis-text',
                  style: {
                    padding: '1rem',
                    textAlign: 'left',
                    fontSize: '14px',
                    lineHeight: '1.5',
                    backgroundColor: '#fef3c7',
                    fontStyle: 'italic'
                  }
                }, keywordAnalysis)
              ] : [
                React.createElement('td', { key: 'empty1', style: { padding: '1rem', textAlign: 'center', width: '60px', color: '#9ca3af', borderRight: '1px solid #e5e7eb' } }, '-'),
                React.createElement('td', { key: 'empty2', style: { padding: '1rem', textAlign: 'center', width: '60px', color: '#9ca3af', borderRight: '1px solid #e5e7eb' } }, '-'),
                React.createElement('td', { key: 'empty3', style: { padding: '1rem', textAlign: 'center', width: '60px', color: '#9ca3af', borderRight: '1px solid #e5e7eb' } }, '-'),
                React.createElement('td', { key: 'empty4', style: { padding: '1rem', textAlign: 'center', width: '60px', color: '#9ca3af', borderRight: '1px solid #e5e7eb' } }, '-'),
                React.createElement('td', { key: 'empty5', style: { padding: '1rem', textAlign: 'center', width: '60px', color: '#9ca3af' } }, '-'),
                React.createElement('td', { key: 'instruction', style: { padding: '1rem', textAlign: 'center', color: '#6b7280', fontStyle: 'italic' } }, '분석 버튼을 클릭하세요')
              ])
            ])
          ])
        ])
      ])
    ])
  ]);
} 