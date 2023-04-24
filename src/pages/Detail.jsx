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
        <h5>ID : {foundData.id}</h5>
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
  -webkit-box-align: center;
  align-items: center;
  -webkit-box-pack: center;
  justify-content: center;

`;

const Box = styled.div`
  width: 600px;
  height: 400px;
  border: 1px solid rgb(238, 238, 238);
  display: flex;
  flex-direction: column;
  -webkit-box-pack: justify;
  justify-content: space-between;
  padding: 50px;
`
const BackB = styled.div`
  display: flex;
  height: 80px;
  -webkit-box-pack: justify;
  justify-content: space-between;
  padding: 0px 24px;
  -webkit-box-align: center;
  align-items: center;
`;

const BackButton = styled.button`
  border: 1px solid rgb(221, 221, 221);
  height: 40px;
  width: 120px;
  background-color: rgb(255, 255, 255);
  border-radius: 12px;
  cursor: pointer;
`