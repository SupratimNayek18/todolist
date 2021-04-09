import React from "react";
import styled from "styled-components";

function Footer() {
  return (
    <Container>
      <LineOne>Improvise.Adapt.Overcome</LineOne>
      <LineTwo>Made with ❤ by Vulka9n</LineTwo>
    </Container>
  );
}

export default Footer;

const Container = styled.div`
  width: 100%;
  position: absolute;
  bottom: 0;
  padding: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #ffb037;
  display: flex;
  flex-direction: column;
`;

const LineOne = styled.h2``;

const LineTwo = styled.h3`
  margin-top: 10px;
`;
