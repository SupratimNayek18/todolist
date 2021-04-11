import React from "react";
import styled from "styled-components";
import ListItem from "./ListItem";
import ListItemAdd from "./ListItemAdd";
import { db } from "./firebase";

function ListItems() {
  const getItems = () => {
    db.collection("listItems").onSnapshot((snapshot) => {
      let listItems = [];
      listItems = snapshot.docs.map((doc) => ({
        id: doc.id,
        item: doc.data(),
      }));
      console.log(listItems[0].item.task);
    });
  };
  getItems();
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
