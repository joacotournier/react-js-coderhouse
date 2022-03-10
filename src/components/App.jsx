import NavBar from "./NavBar";
import ItemListContainer from "./ItemListContainer";
import Container from "@mui/material/Container";
import { ToastContainer, toast } from "react-toastify";
import { BrowserRouter as Router, useParams, Link } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <Router>
      <ToastContainer />
      <NavBar />
      <main>
        <Container maxWidth="lg">
          <ItemListContainer heading="Trending Now" />
          <button>TREAT YOURSELF</button>
          {/* <Routes>
          <Route path="/" element={<ItemListContainer/>}/>
          <Route path="/categories/:id/" element={<ItemListContainer/>}/>
          <Route path="/cart/" element={<CartWidget/>}/>
          <Route path="/items/:id/" element={<ItemDetailContainer/>}/>
          </Routes> */}
        </Container>
      </main>
    </Router>
  );
}

//catch error use react tostify, con setError como string, y setLoading false en un .finally(()=>{})

export default App;
