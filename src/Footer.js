import React from "react";
import styled from "styled-components";

function Footer() {
  return (
    <Container>
      <LineOne>Improvise Adapt Overcome</LineOne>
      <LineTwo>Made with ❤️ by Vulka9n</LineTwo>
    </Container>
  );
}

export default Footer;

const Container = styled.div`
  color: white;
  width: 100%;
  position: absolute;
  bottom: 0;
  padding: 20px 0;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #1b1717;
  display: flex;
  flex-direction: column;
  color: #51c4d3;
`;

//

const LineOne = styled.p``;

const LineTwo = styled.p`
  margin-top: 10px;
`;
