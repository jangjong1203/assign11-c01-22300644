// [제공] 부모 CourseList로부터 Props를 전달받는 자식 컴포넌트입니다.
//CourseList에서 리스트 내용 출력 할때 사용
export default function CourseItem({ course, onDelete, onToggle }) {
  return (
    <div className="course-row">
      <div className="course-main">
        <input
          className="check"
          type="checkbox"
          //리스트의 onToggle 값으로 완료 여부를 판단
          checked={course.completed}
          onChange={() => onToggle(course.id)}
          aria-label={`${course.name} 완료 여부`}
        />
        <div>
          {/*course.completed값에 따라 course이름 클래스name에 done을 붙일지 그대로 둘지 결정*/}
          <div className={`course-title ${course.completed ? "done" : ""}`}>
            {course.name}
          </div>
          {/* id, 카테고리, 삭제 버튼 요소 리스트에서 가져오기 */}
          <div className="course-id">Course #{course.id}</div>
        </div>
      </div>
      <div className="category-cell">
        <span className="category">{course.category}</span>
      </div>
      <div className="actions">
        {/*삭제 버튼 누르면 삭제함수 실행 */}
        <button
          className="btn danger"
          type="button"
          onClick={() => onDelete(course.id)}
        >
          Delete
        </button>
      </div>
    </div>
  );
}
