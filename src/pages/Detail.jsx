import React from 'react'
import { useSelector } from 'react-redux'
import { useNavigate, useParams } from 'react-router-dom'
import styled from 'styled-components'


const Detail = () => {
  const todos = useSelector((state)=>{
    return state.todos.todos
  })

  const navigate = useNavigate()

  const params = useParams()
  // console.log('params : ', params)

  const foundData = todos.find((item) => {
   // console.log('item.id: ', item.id)
   // console.log('params.id: ', params.id)
   // console.log('-------')
  return item.id === params.id || item.id === parseInt(params.id, 10) // 10진수
  })

    console.log('foundData: ', foundData)

  return (
      <Layout>
        <Box>
        <BackB>
        <h4>ID : {foundData.id}</h4>
        <BackButton onClick={()=>{navigate('/')}}>이전으로</BackButton>
        </BackB>
        <h3>{foundData.title}</h3>
        <h3>{foundData.contents}</h3>
        </Box>
      </Layout>
      )
      }

export default Detail

const Layout = styled.div`
  border: 2px solid rgb(238, 238, 238);
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;  // 각각 요소들을 수직 방향으로 정렬
  justify-content: center;  // 각각 요소들을 수평 방향으로 정렬

`;

const Box = styled.div`
  width: 500px;
  height: 300px;
  border: 1px solid rgb(118, 175, 155);
  border-radius: 5px;
  display: flex;
  flex-direction: column; // Flex 컨테이너 내의 요소들을 수직 방향으로 정렬
  justify-content: space-between;
  padding: 50px;
`
const BackB = styled.div`
  display: flex;
  height: 60px;
  justify-content: space-between;
`;

const BackButton = styled.button`
  border: 1px solid rgb(255, 203, 144);
  height: 40px;
  width: 120px;
  background-color: rgb(255, 255, 255);
  border-radius: 12px;
  cursor: pointer;
`