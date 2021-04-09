import React from "react";
import styled from "styled-components";
import ListItems from "./ListItems";

function Home() {
  return (
    <Container>
      <ListItems />
    </Container>
  );
}

export default Home;

const Container = styled.div``;
