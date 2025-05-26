import { NextResponse } from 'next/server';

// Student 타입 정의 (feedback/page.tsx 와 동일하게 유지)
type Student = {
  id: number;
  name: string;
  studentId: string;
  department: string;
  scores: number[];
  average: number;
  feedback: string;
};

// 샘플 학생 데이터 (feedback/page.tsx 에서 가져옴)
const studentsData: Student[] = [
  {
    id: 1,
    name: "강혁준",
    studentId: "202#####86",
    department: "재료공학부",
    scores: [5, 4, 4, 3],
    average: 4,
    feedback: "수업이 재미 없음. 과제가 많음.",
  },
  {
    id: 2,
    name: "김민수",
    studentId: "201#####42",
    department: "컴퓨터공학과",
    scores: [3, 5, 4, 4],
    average: 4,
    feedback: "수업 내용이 어려움. 더 많은 예제 필요.",
  },
  {
    id: 3,
    name: "이지연",
    studentId: "203#####19",
    department: "경영학과",
    scores: [4, 4, 5, 5],
    average: 4.5,
    feedback: "그룹 프로젝트가 유익함. 발표 기회 더 필요.",
  },
  {
    id: 4,
    name: "박준호",
    studentId: "202#####73",
    department: "전자공학과",
    scores: [5, 5, 3, 4],
    average: 4.25,
    feedback: "실습 시간이 부족함. 이론 설명 좋음.",
  },
  {
    id: 5,
    name: "최서연",
    studentId: "201#####65",
    department: "화학공학과",
    scores: [4, 3, 5, 4],
    average: 4,
    feedback: "과제 피드백이 부족함. 강의 내용 좋음.",
  },
  {
    id: 6,
    name: "정도현",
    studentId: "203#####28",
    department: "기계공학과",
    scores: [3, 4, 4, 5],
    average: 4,
    feedback: "실험 장비 부족. 교수님 설명 명확함.",
  },
  {
    id: 7,
    name: "한소희",
    studentId: "202#####91",
    department: "건축학과",
    scores: [5, 5, 4, 3],
    average: 4.25,
    feedback: "프로젝트 기간 짧음. 수업 자료 유익함.",
  },
  {
    id: 8,
    name: "윤재민",
    studentId: "201#####37",
    department: "산업공학과",
    scores: [4, 3, 3, 5],
    average: 3.75,
    feedback: "팀 활동 많음. 개인 과제 어려움.",
  },
];

export async function GET() {
  // 실제 API에서는 데이터베이스 조회 등을 수행
  // 여기서는 모의 데이터를 반환
  return NextResponse.json(studentsData);
} 