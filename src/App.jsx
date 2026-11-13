import CourseList from "./components/CourseList.jsx";
//courseList 불러오기

export default function App() {
  return (
    <main className="page">
      <header className="hero">
        {/* 웹페이지 상단부분 */}
        <div>
          <p className="topline">OPEN SOURCE STUDIO · WEEK 11</p>
          <h1>My Study Manager</h1>
          <p className="subtitle">리액트연습</p>
        </div>
        <span className="tag">STUDENT Planner </span>
      </header>
      {/* 리스트를 렌더링 */}
      <CourseList />
      {/* 하단 부분 */}
      <footer className="bottom">
        <span>OSS Week 11 · React</span>
        <span>로컬저장 ·새로고침시 초기화</span>
      </footer>
    </main>
  );
}
