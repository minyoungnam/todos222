# My-Todo-List Lv.2

- **공통**
    - **todos 데이터는 리덕스를 사용해서 전역으로 상태를 관리합니다.**
    - todos 모듈은 `**Ducks 패턴**`으로 구현합니다.
- **메인 페이지**
    - **디자인과 화면 구성은 자유롭게 구현합니다.**
    - **Todo의 상태에 “완료” 그룹과 “진행중" 그룹을 나뉘어서 보이도록 구현**합니다. 예시 영상 꼭 위, 아래가 아니어도 되며 창의적으로 구현해도 됩니다.
    - **Todo를 추가하면  제목 `input`과 내용 `input`은 다시 빈 값이 되도록 구현**합니다.        
    - **input에 값이 있는 상태에서 상세페이지로 이동하는 경우, input의 value가 초기화** 되도록 구현합니다.
    - odo의 완료상태**가 `true`**이면**,** 상태 버튼의 라벨을 **“취소”,  `false`** 이면 라벨을 “**완료”** 로 보이도록 구현합니다.
    - 전체 화면의 **최대 넓이는 `1200px`, 최소 넓이는 `800px`로 제한**하고, **컨텐츠를 화면의 가운데로 배치** 합니다.
    - `상세보기` 클릭하면 **Todo의 상세 페이지로 이동**합니다.
- **제한사항**
    - map을 사용할 때 **반드시 key**을 넣어야 하며, `map` 의 **index를 사용을 금지**합니다. 이것을 금지하는 이유는 강의에 다루었습니다.
    - Todo Id 생성 시 `todos.length` 사용해서 생성하지 않습니다. `todos.length` 을 사용해서 id 생성 시 **발생할 수 있는 문제점에 대해 고민**해보시길 바랍니다.
    
    
    
## components
1. Container.jsx
-맨 위 박스
2. AddForm.jsx
-제목, 내용 추가하기
3. WorkingTodo.jsx
-완료되지 않은 데이터
4. Donetodo.jsx
-완료된 데이터

## pages : Router.js를 통해 App.js 연결
1. Home.jsx
-메인 페이지
2. Detail.jsx
-상세보기 누르면 넘어가는 페이지
