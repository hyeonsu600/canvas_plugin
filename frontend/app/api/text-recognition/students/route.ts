import { NextResponse } from 'next/server';

// 타입 정의 (text-recognition/page.tsx 와 동일하게 유지)
type Score = {
  id: number;
  problem: string;
  score: number;
  modified: number;
};

type Student = {
  id: string;
  name: string;
  scores: Score[];
};

// 샘플 학생 데이터 (text-recognition/page.tsx 에서 가져옴)
const studentsData: Student[] = [
  {
    id: "202####386",
    name: "김희준",
    scores: [
      { id: 1, problem: "1번", score: 10, modified: 10 },
      { id: 2, problem: "2번", score: 10, modified: 10 },
      { id: 3, problem: "3번", score: 9, modified: 10 },
      { id: 4, problem: "4번", score: 0, modified: 5 },
      { id: 5, problem: "5번", score: 8, modified: 8 },
    ],
  },
  {
    id: "202####387",
    name: "이민수",
    scores: [
      { id: 1, problem: "1번", score: 8, modified: 8 },
      { id: 2, problem: "2번", score: 7, modified: 7 },
      { id: 3, problem: "3번", score: 10, modified: 10 },
      { id: 4, problem: "4번", score: 9, modified: 9 },
      { id: 5, problem: "5번", score: 6, modified: 6 },
    ],
  },
  {
    id: "202####388",
    name: "박지영",
    scores: [
      { id: 1, problem: "1번", score: 9, modified: 9 },
      { id: 2, problem: "2번", score: 9, modified: 9 },
      { id: 3, problem: "3번", score: 8, modified: 8 },
      { id: 4, problem: "4번", score: 10, modified: 10 },
      { id: 5, problem: "5번", score: 7, modified: 7 },
    ],
  },
  {
    id: "202####389",
    name: "최현우",
    scores: [
      { id: 1, problem: "1번", score: 6, modified: 6 },
      { id: 2, problem: "2번", score: 8, modified: 8 },
      { id: 3, problem: "3번", score: 7, modified: 7 },
      { id: 4, problem: "4번", score: 9, modified: 9 },
      { id: 5, problem: "5번", score: 10, modified: 10 },
    ],
  },
  {
    id: "202####390",
    name: "정수민",
    scores: [
      { id: 1, problem: "1번", score: 10, modified: 10 },
      { id: 2, problem: "2번", score: 9, modified: 9 },
      { id: 3, problem: "3번", score: 8, modified: 8 },
      { id: 4, problem: "4번", score: 7, modified: 7 },
      { id: 5, problem: "5번", score: 6, modified: 6 },
    ],
  },
  {
    id: "202####391",
    name: "강태호",
    scores: [
      { id: 1, problem: "1번", score: 7, modified: 7 },
      { id: 2, problem: "2번", score: 8, modified: 8 },
      { id: 3, problem: "3번", score: 9, modified: 9 },
      { id: 4, problem: "4번", score: 10, modified: 10 },
      { id: 5, problem: "5번", score: 8, modified: 8 },
    ],
  },
  {
    id: "202####392",
    name: "윤서연",
    scores: [
      { id: 1, problem: "1번", score: 9, modified: 9 },
      { id: 2, problem: "2번", score: 10, modified: 10 },
      { id: 3, problem: "3번", score: 8, modified: 8 },
      { id: 4, problem: "4번", score: 7, modified: 7 },
      { id: 5, problem: "5번", score: 9, modified: 9 },
    ],
  },
  {
    id: "202####393",
    name: "임준호",
    scores: [
      { id: 1, problem: "1번", score: 8, modified: 8 },
      { id: 2, problem: "2번", score: 7, modified: 7 },
      { id: 3, problem: "3번", score: 9, modified: 9 },
      { id: 4, problem: "4번", score: 10, modified: 10 },
      { id: 5, problem: "5번", score: 8, modified: 8 },
    ],
  },
  {
    id: "202####394",
    name: "한미래",
    scores: [
      { id: 1, problem: "1번", score: 10, modified: 10 },
      { id: 2, problem: "2번", score: 9, modified: 9 },
      { id: 3, problem: "3번", score: 8, modified: 8 },
      { id: 4, problem: "4번", score: 7, modified: 7 },
      { id: 5, problem: "5번", score: 9, modified: 9 },
    ],
  },
  {
    id: "202####395",
    name: "송지원",
    scores: [
      { id: 1, problem: "1번", score: 7, modified: 7 },
      { id: 2, problem: "2번", score: 8, modified: 8 },
      { id: 3, problem: "3번", score: 9, modified: 9 },
      { id: 4, problem: "4번", score: 10, modified: 10 },
      { id: 5, problem: "5번", score: 7, modified: 7 },
    ],
  },
];

export async function GET() {
  return NextResponse.json(studentsData);
} 