import React from "react";
import styled from "styled-components";
import DeleteIcon from "@material-ui/icons/Delete";
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles({
  root: {
    color: "orange",
    "&:hover": { color: "blue", cursor: "pointer" },
    width: 30,
    height: 30,
  },
});

function ListItem({ task }) {
  const classes = useStyles();
  return (
    <Container>
      <TaskContainer>{task}</TaskContainer>
      <ButtonContainer>
        <DeleteIcon className={classes.root} />
      </ButtonContainer>
    </Container>
  );
}

export default ListItem;

const Container = styled.div`
  padding: 60px;
  margin-right: 30px;
  box-shadow: 0 2px 10px grey;
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
