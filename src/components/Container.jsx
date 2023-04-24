import React from 'react'
import styled from 'styled-components';

function Container() {
  return (
    <ContainerB>
    <div>My Todo List</div> 
    <div>React</div>
    </ContainerB>
  )
}

export default Container

const ContainerB = styled.div`
  border: 1px solid rgb(154, 255, 87);
  display: flex;
  height: 50px;
  align-items: center;
  justify-content: space-between;
  padding: 0 20px;
`;