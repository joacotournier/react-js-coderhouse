import NavBar from "./NavBar";
import ItemListContainer from "./ItemListContainer";
import Container from "@mui/material/Container";

function App() {
  return (
    <>
      <NavBar />
      <Container maxWidth="lg">
        <ItemListContainer heading="Trending Now" />
      </Container>
    </>
  );
}

export default App;
