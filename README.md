Project Information: 프로젝트 소개, 주요 기능 및 원본 Sample Project URL



Installation: 설치·실행 방법 및 실행 화면

    npm install
    npm run dev
    후 나오는 주소로 접속.


Source Code Exploration: 주요 파일 3개, Component와 Props 관계, useState 및 Event 분석, 주요 코드 2개 설명


    주요코드1:

        const [courses, setCourses] = useState(initialCourses);
        const [newName, setNewName] = useState("");
        function handleDelete(id) {
            if (!window.confirm("이 과목을 삭제하시겠습니까?")) return;
            setCourses((previous) => previous.filter((course) => course.id !== id));
        }
    삭제에 대한 코드이고 useState로 initialCourses 배열의 데이터를  초기값으로 넣었고, 
    변경사항을 확인하고 리렌더링 하기 위해 courses상태를 생성했습니다. 
    confirm로 삭제버튼 클릭시 한번 확인을 거치고 filter를 통해 원본은 건드리지않고 클릭한 id의데이터만 지우고 나머지는
    새로운 배열로 반환하여 상태를 갱신합니다.

    주요코드2:

    {courses.map((course) => (
        <CourseItem
        key={course.id}
        course={course}
        onDelete={handleDelete}
        onToggle={handleToggle}
        />
    ))}
    리스트를 렌더링 시켜 출력하는 코드입니다. courses.map을 통해 배열에 있는 과목의 객체를 CourseItem로 변환시켜 출력합니다.
    키값과 배열데이터, 삭제버튼과 체크박스가 눌리면 실행되는 함수들을 CourseItem에게 Props로 넘겨줍니다.



Customizing: 

    데이터는 courses.js 파일에서 과목 이름들을 한글로 바꾸고 일부 과목 true/false상태를 변경하고 이산수학을 추가하였습니다.
    텍스트는 App.jsx 파일에서 상단 부분 텍스트와 하단 부분텍스트를 변경하였습니다. 추가로 CourseList.jsx 파일에서 "실습과제:... "부분을 제거하였습니다. 
    스타일은 App.css파일에서 .root의 배경색과 .subtitle의 글자색을 변경했습니다. delete버튼의 배경과 글자색도 변경했습니다.



Feature Extension: 구현한 기능 2개 이상, 주요 코드 및 동작 결과



Deployment: 실제 접근 가능한 Vercel URL



Weekly Review:




새롭게 배운 내용 3가지
어려웠던 점과 해결 방법
AI 활용 내용 및 느낀 점




## 확인할 질문

- `CourseList`와 `CourseItem`의 역할은?
- 왜 `courses`를 직접 수정하지 않고 `setCourses()`를 사용할까요?
- `map()`과 `filter()`는 각각 어떤 목적인가요?
- `course`, `onDelete`, `onToggle` Props는 어디에서 전달되나요?
- 브라우저 새로고침 시 데이터가 초기화되는 이유는? (DB/localStorage 없음)

