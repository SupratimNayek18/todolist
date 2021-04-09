import React from "react";
import styled from "styled-components";
import ListItem from "./ListItem";
import ListItemAdd from "./ListItemAdd";

function ListItems() {
  return (
    <Container>
      <ListItem />
      <ListItemAdd />
    </Container>
  );
}

export default ListItems;

const Container = styled.div`
  display: flex;
  margin: 40px;
  justify-content: start;
`;
