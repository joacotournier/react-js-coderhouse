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
        <button onClick={handleClick}>ADD TO CART</button>
      </Container>
    </>
  );
}

//catch error use react tostify, con setError como string, y setLoading false en un .finally(()=>{})

export default App;

  