import React from "react";
import styled from "styled-components";
import AddCircleIcon from "@material-ui/icons/AddCircle";

function ListItemAdd() {
  return (
    <Container>
      <AddContentContainer>Click button to add me to list</AddContentContainer>
      <ButtonContainer>
        <AddCircleIcon />
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
