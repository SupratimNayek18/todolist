import "./App.css";
import Header from "./Header";
import Home from "./Home";
import Footer from "./Footer";
import styled from "styled-components";

function App() {
  return (
    <Container>
      <Header />
      <Home />
      <Footer />
    </Container>
  );
}

export default App;

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;
