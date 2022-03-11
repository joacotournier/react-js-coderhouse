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
        <Container maxWidth="lg" style={{zIndex:1}}>
          <ItemListContainer heading="Kobacán" subheading="Extreme Takeaway" />
          {/* <Routes>
          <Route path="/" element={<ItemListContainer/>}/>
          <Route path="/categories/:id/" element={<ItemListContainer/>}/>
          <Route path="/cart/" element={<CartWidget/>}/>
          <Route path="/items/:id/" element={<ItemDetailContainer/>}/>
          </Routes> */}
        </Container>
        <div class="bottom-decorator"></div>
      </main>
    </Router>
  );
}

export default App;
