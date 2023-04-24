import React, { useState } from "react";
import { useDispatch } from "react-redux";
// import { useSelector } from "react-redux";
import { addTodo } from "../redux/modules/todo";
import styled from "styled-components";
import { v4 as uuidv4 } from "uuid";

const AddForm = () => {
  const [title, setTitle] = useState("");
  const [contents, setContents] = useState('')
  // const todos = useSelector((state) => state.todos.todos);
  const dispatch = useDispatch();
  // 라이브러리,,ㅎ
  const uniqueId = () => { 
    return uuidv4()
  }

  //preventDefault()를 호출하면 이벤트를 취소합니다. 
  //즉, 이벤트에 대한 구현체의 기본 동작을 실행하지 않습니다
  const onSubmitHandler = (e) => {
    e.preventDefault();
    if (title === "" || contents === "") return; // 아무것도 입력하지 않았을 때 dispatch 하지 않음

    dispatch(
      addTodo({
        id: uniqueId(),
        title,
        contents,
        isDone : false
      })
    )
    setTitle('')
    setContents('')
  };

  return (
    <Write>
      <form onSubmit={onSubmitHandler}>
        <WriteBox>
          <WriteLabel>제목</WriteLabel>
          <StInput
            type="text"
            value={title}
            onChange={(e) => {
              setTitle(e.target.value);}}/>
          <WriteLabel>내용</WriteLabel>
          <StInput
            type="text"
            value={contents}
            onChange={(e) => {
              setContents(e.target.value);}}/>
          <Addbutton>추가하기</Addbutton>
        </WriteBox>
      </form>
    </Write>
  );
};

export default AddForm;

const Write = styled.div`
  background-color: rgb(179, 255, 155);
  border-radius : 12px;
  padding: 30px;
  margin: 0 auto;
  justify-content: space-between;
  align-items: center;
  display: flex;
  gap: 20px;
`

const WriteBox = styled.div`
  display: flex;
  -webkit-box-align: center;
  align-items: center;
  gap: 20px;
 `;

const WriteLabel = styled.label`
  font-size: 20px;
  font-weight: 600;
`;

const StInput = styled.input`
  height: 40px;
  width: 270px;
  border: none;
  border-radius: 12px;
  padding: 0px 20px;
`;

const Addbutton = styled.button`
    background-color: #8db67c;
    height: 40px;
    width: 150px;
    border: none;
    border-radius: 12px;
    font-size: 15px;
    font-weight: 600;
    color: #ffffff;
  `