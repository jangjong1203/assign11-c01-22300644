import { useState } from "react";
import CourseItem from "./CourseItem.jsx";
import { initialCourses } from "../data/courses.js";

export default function CourseList() {
  // [제공] 초기 배열을 useState로 관리합니다.
  const [courses, setCourses] = useState(initialCourses);
  const [newName, setNewName] = useState("");


  // 초기배열 길이 + 1 로 추가할데이터의 ID값 생성.
  const [nextId, setNextId] = useState(initialCourses.length + 1);

  // [제공] 삭제 기능: filter로 새 배열을 만들어 업데이트합니다.
  function handleDelete(id) {
    if (!window.confirm("이 과목을 삭제하시겠습니까?")) return;
    setCourses((previous) => previous.filter((course) => course.id !== id));
  }

  // TODO 1 (필수): 과목 추가 기능을 구현하세요.
  function handleAdd(event) {
    //폼 제출시 새로고침 방지
    event.preventDefault();
    // TODO: 빈 입력 검사, 새 과목 객체 생성, setCourses 호출, 입력창 초기화
    //빈칸 입력 방지
    if(newName.trim()==''){
      alert('과목명을 입력하시오');
      return;
    }
    //새로운 과목 객체 생성
    const newCourse={
      id:nextId,
      name:newName,
      category:'major',
      completed:false
    };
    //기존 배열들 뒤에 새로운 배열을 추가
    setCourses(previous => [...previous, newCourse]);
    //다음 배열을 위해 Id값 관리
    setNextId(nextId + 1);
    //입력창 비우기
    setNewName('');
  }

  // TODO 2 (필수): 완료 상태 변경 기능을 구현하세요.
  function handleToggle(id) {
    // TODO: map과 spread(...)를 사용하여 해당 id의 completed를 반전
    //배열을 수정
    setCourses(
      //배열에 든 과목을 하나식 끝까지 꺼내서 확인
      courses.map(course => {
        //완료버튼을 누른 과목이 나오면
        if (course.id === id) {
          //이전 과목들은 그대로 유지후 해당 과목의 완료 상태만 반전시킴 (true는 false로, false 는 true로)
          return {...course,completed:!course.completed};
        }
        // 해당과목의 완료상태만 변경된 배열을 반환해서 수정함.
        return course;
      })
    );
  }

  const doneCount = courses.filter((course) => course.completed).length;

  return (
    <>
    {/* 전체 과목, 체크된 과목, 체크 안된과목 각각 개수를 계산해서 화면에 출력 */}
      <section className="stats" aria-label="과목 통계">
        <div className="stat">
          <span>전체 과목</span>
          <strong>{courses.length}</strong>
        </div>
        <div className="stat">
          <span>완료</span>
          <strong className="green">{doneCount}</strong>
        </div>
        <div className="stat">
          <span>진행 중</span>
          <strong className="blue">{courses.length - doneCount}</strong>
        </div>
      </section>
      {/* 전체 과목수 다시 출력 */}
      <section className="panel">
        <div className="panel-header">
          <h2>My Courses</h2>
          <span className="small-note">{courses.length} courses</span>
        </div>

        {/*새로 만들 과목 이름을 입력*/}
        <form className="add-form" onSubmit={handleAdd}>
          <input
            className="input"
            value={newName}
            onChange={(event) => setNewName(event.target.value)}
            placeholder="새 과목명을 입력하세요"
            aria-label="새 과목명"
          />
          {/*만든 add버튼 함수를사용해서 과목을 추가하는 기능 구현*/} 
          <button className="btn primary" type="submit">
            + Add Course
          </button>
        </form>
        {/*리스트 머리 출력 */}
        <div className="list-head">
          <span>COURSE</span>
          <span>CATEGORY</span>
          <span>ACTIONS</span>
        </div>
        {courses.length === 0 && (
          <div className="empty">등록된 과목이 없습니다.</div>
        )}
        {/* 리스트 내용 출력 */}
        {courses.map((course) => (
          <CourseItem
            key={course.id}
            course={course}
            onDelete={handleDelete}
            onToggle={handleToggle}
          />
        ))}
      </section>
    </>
  );
}
