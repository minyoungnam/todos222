import React from "react";
import styled from "styled-components";
import WorkingTodo from "../components/WorkingTodo";
import AddForm from "../components/AddForm";
import Container from "../components/Container";
import Donetodo from "../components/Donetodo";

const App = () => {
  return (
    <Layout>
        <Container />
          <AddForm />
          <ToDoListEntire>
          <WorkingTodo />
          <Donetodo />
        </ToDoListEntire>
    </Layout>
  );
};

export default App;

const Layout = styled.div`
  margin: 0 auto;
  min-width : 800px;
  max-width : 1200px;
`;

const ToDoListEntire = styled.div`
   padding: 0 24px;
`;