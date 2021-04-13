import React from "react";
import styled from "styled-components";
import ListItems from "./ListItems";

var date = new Date();
const weekdays = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
let DayOfTheWeek = weekdays[date.getDay()];

function Home() {
  return (
    <Container>
      <DayContainer>
        <h2>{DayOfTheWeek}</h2>
      </DayContainer>
      <ListItems />
    </Container>
  );
}

export default Home;

const Container = styled.div``;

const DayContainer = styled.div`
  display: flex;
  justify-content: center;
  margin: 25px;
`;
