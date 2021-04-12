import React, { useEffect, useState } from "react";
import styled from "styled-components";
import ListItem from "./ListItem";
import ListItemAdd from "./ListItemAdd";
import { db } from "./firebase";

function ListItems() {
  //react state functionality
  const [items, setItems] = useState([]);
  //getting task items from database
  const getItems = () => {
    db.collection("listItems").onSnapshot((snapshot) => {
      let listItems = [];
      listItems = snapshot.docs.map((doc) => ({
        id: doc.id,
        item: doc.data(),
      }));
      setItems(listItems);
    });
  };

  //useeffect hook to make sure the data loads only whn the page loads for the first time
  useEffect(() => {
    getItems();
  }, []);

  return (
    <Container>
      {items.map((item) => (
        <ListItem task={item.item.task} id={item.id} />
      ))}
      <ListItemAdd />
    </Container>
  );
}

export default ListItems;

const Container = styled.div`
  display: flex;
  justify-content: start;
  flex-wrap: wrap;
`;
