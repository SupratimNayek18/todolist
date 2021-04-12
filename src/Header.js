import React from "react";
import styled from "styled-components";

function Header() {
  return (
    <Container>
      <TitleContainer>To Do List</TitleContainer>
    </Container>
  );
}

export default Header;

const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 50px;
  background-color: #1b1717;
  box-shadow: 0 5px 50px grey;
  color: #51c4d3;
`;

const TitleContainer = styled.h1``;
