import React from "react";
import styled from "styled-components";
import AddCircleIcon from "@material-ui/icons/AddCircle";
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles({
  root: {
    color: "orange",
    "&:hover": { color: "blue", cursor: "pointer" },
    width: 30,
    height: 30,
  },
});

function ListItemAdd() {
  const classes = useStyles();
  return (
    <Container>
      <AddContentContainer>Click button to add me to list</AddContentContainer>
      <ButtonContainer>
        <AddCircleIcon className={classes.root} />
      </ButtonContainer>
    </Container>
  );
}

export default ListItemAdd;

const Container = styled.div`
  position: relative;
  padding: 40px;
  box-shadow: 0 2px 10px grey;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;

const AddContentContainer = styled.div``;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  position: absolute;
  bottom: 8px;
  right: 8px;
`;
