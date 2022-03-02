import NavBar from "./NavBar";
import ItemListContainer from "./ItemListContainer";
import Container from "@mui/material/Container";
import {useState} from "react";

const handleClick = () => {
  console.log("clicked");
};

function App() {
  return (
    <>
      <NavBar />
      <Container maxWidth="lg">
        <ItemListContainer heading="Trending Now" />
        <button onClick={handleClick}>BUY</button>
      </Container>
    </>
  );
}

export default App;
