import React from "react";
import styled from "styled-components";
import AddCircleIcon from "@material-ui/icons/AddCircle";
import { makeStyles } from "@material-ui/core";
import { db } from "./firebase";

const useStyles = makeStyles({
  root: {
    color: "#51c4d3",
    "&:hover": { color: "#126e82", cursor: "pointer" },
    width: 30,
    height: 30,
  },
});

function ListItemAdd() {
  const classes = useStyles();
  const insertIntoDatabse = () => {
    let task = document.getElementById("taskInput").value;
    db.collection("listItems").doc().set({
      task: task,
    });
    document.getElementById("taskInput").value = "";
  };
  return (
    <Container>
      <AddContentContainer>
        <p>Enter new task</p>
        <input type="text" name="name" id="taskInput" />
      </AddContentContainer>
      <ButtonContainer>
        <AddCircleIcon className={classes.root} onClick={insertIntoDatabse} />
      </ButtonContainer>
    </Container>
  );
}

export default ListItemAdd;

const Container = styled.div`
  position: relative;
  padding: 40px;
  box-shadow: 0 1px 8px grey;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  margin: 50px 30px 30px;
`;

const AddContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  p {
    margin-bottom: 20px;
  }
  input {
    border: none;
    border-bottom: 1px solid;
    :focus {
      outline: none;
    }
  }
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  position: absolute;
  bottom: 8px;
  right: 8px;
`;
