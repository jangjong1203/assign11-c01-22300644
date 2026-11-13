import CourseList from "./components/CourseList.jsx";
//courseList 불러오기

export default function App() {
  return (
    <main className="page">
      <header className="hero">
        {/* 웹페이지 상단부분 */}
        <div>
          <p className="topline">OPEN SOURCE STUDIO · WEEK 11</p>
          <h1>My Course Manager</h1>
          <p className="subtitle">React Component, Props & State Practice</p>
        </div>
        <span className="tag">STUDENT STARTER</span>
      </header>
      {/* 리스트 */}
      <CourseList />
      {/* 밑부분 */}
      <footer className="bottom">
        <span>OSS Week 11 · React</span>
        <span>Local state only · Refresh resets data</span>
      </footer>
    </main>
  );
}
