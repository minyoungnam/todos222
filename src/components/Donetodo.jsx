import React from 'react'
import styled from "styled-components";
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { removeTodo, cancelTodo } from '../redux/modules/todo';
import { Link } from 'react-router-dom';

const Donetodo = () => {
    const todos = useSelector((state) => {
        return state.todos.todos
    })

    const dispatch = useDispatch()

    const RemoveButton = (id) => {
        const newtodo = todos.filter(item => item.id !== id)
        dispatch(removeTodo(newtodo))
    }

      const CancelButton = (id) => {
        const newTodo = todos.map(item => 
          item.id === id ? { ...item, isDone : !item.isDone } : item)
          dispatch(cancelTodo(newTodo));
      }

    const doneTodos = todos.filter(item => item.isDone)

  return (
    <>
    <Font>Done..! 🌳</Font>
    <ToDoListLine>
      {doneTodos.map((item) => (
        <ToDoListBox key={item.id} >
        <div>
         <Link to={`/detail/${item.id}`}>상세보기</Link>
        <h2>{item.title}</h2>
        <div>{item.contents}</div> 
        </div>
        <ToDoListButton>
        <DeleteButton onClick={() => RemoveButton(item.id)}
        >삭제하기</DeleteButton>
        <CancelB onClick={() => CancelButton(item.id)}
        >취소</CancelB>
        </ToDoListButton>
        </ToDoListBox>
      ))}
      </ToDoListLine>
    </>
  );
};

export default Donetodo

const Font = styled.div`
  padding: 20px 0px 20px 0px;
  font-size: 30px;
  font-weight: 700;
`;

const ToDoListLine = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
`;

const ToDoListBox = styled.div`
border: 4px solid rgb(250, 233, 149);
border-radius: 12px;
padding: 12px 24px 24px;
width: 270px;
`;

const ToDoListButton = styled.div`
  display: flex;
  gap: 10px;
  margin-top: 25px;
`;

const DeleteButton = styled.button`
  background-color: #97c563;
  height: 40px;
  width: 130px;
  border: none;
  border-radius: 12px;
  font-size: 15px;
  font-weight: 600;
  color: #ffffff;
`;

const CancelB = styled.button`
  background-color: #ffc87a;
  height: 40px;
  width: 130px;
  border: none;
  border-radius: 12px;
  font-size: 15px;
  font-weight: 600;
  color: #ffffff;
`;