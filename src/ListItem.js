import React from "react";
import styled from "styled-components";

function ListItem({ task }) {
  return <Container>{task}</Container>;
}

export default ListItem;

const Container = styled.div`
  padding: 60px;
  margin-right: 30px;
  box-shadow: 0 2px 10px grey;
  border-radius: 10px;
`;
