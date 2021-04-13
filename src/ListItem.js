import React from "react";
import styled from "styled-components";
import DeleteIcon from "@material-ui/icons/Delete";
import { makeStyles } from "@material-ui/core";
import { db } from "./firebase";

const useStyles = makeStyles({
  root: {
    color: "#ce1212",
    "&:hover": { color: "#810000", cursor: "pointer" },
    width: 30,
    height: 30,
  },
});

function ListItem({ task, id }) {
  const deleteTask = () => {
    db.collection("listItems").doc(id).delete();
  };
  const classes = useStyles();
  return (
    <Container>
      <TaskContainer>{task}</TaskContainer>
      <ButtonContainer onClick={deleteTask}>
        <DeleteIcon className={classes.root} />
      </ButtonContainer>
    </Container>
  );
}

export default ListItem;

const Container = styled.div`
  padding: 60px;
  margin: 25px 30px 25px;
  box-shadow: 0 0 5px grey;
  border-radius: 10px;
  position: relative;
`;

const TaskContainer = styled.div``;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  position: absolute;
  bottom: 8px;
  right: 8px;
`;
