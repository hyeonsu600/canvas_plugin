import { NextResponse } from 'next/server';

// Script 타입 정의 (types/script.ts 에서 가져옴)
export interface Script {
  id: number;
  startTime: number;
  endTime: number;
  text: string;
}

// 샘플 스크립트 데이터 (video-edit/page.tsx 에서 가져옴)
const scenesData: Script[] = [
  { id: 1, startTime: 0, endTime: 5, text: "안녕하세요, 오늘은 리액트에 대해 알아보겠습니다." },
  { id: 2, startTime: 5, endTime: 10, text: "리액트는 페이스북에서 개발한 자바스크립트 라이브러리입니다." },
  { id: 3, startTime: 10, endTime: 15, text: "컴포넌트 기반 아키텍처를 사용하여 UI를 구성합니다." },
  { id: 4, startTime: 15, endTime: 20, text: "가상 DOM을 활용하여 효율적인 렌더링을 제공합니다." },
  { id: 5, startTime: 20, endTime: 25, text: "다양한 생태계와 커뮤니티 지원이 활발합니다." },
];

export async function GET() {
  return NextResponse.json(scenesData);
} 