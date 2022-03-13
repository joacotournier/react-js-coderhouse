import NavBar from "./NavBar";
import ItemListContainer from "./ItemListContainer";
import Container from "@mui/material/Container";
import { ToastContainer, toast } from "react-toastify";
import { BrowserRouter as Router, useParams, Link } from "react-router-dom";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import { CartWidget } from "./CartWidget";
import { ItemDetailContainer } from "./ItemDetailContainer";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <BrowserRouter>
      <ToastContainer />
      <NavBar />
      <main>
        <Container maxWidth="lg" style={{ zIndex: 1 }}>
          <Routes>
            <Route path="/"
              element={
                <ItemListContainer
                  heading="Kobacán"
                  subheading="Extreme Takeaway"
                  filter="all"
                />
              }
            />
            <Route path="/categories/:id/"
              element={
                <ItemListContainer
                  heading="Kobacán"
                  subheading="Extreme Takeaway"
                />
              }
            />
            <Route path="/cart/" element={<CartWidget />} />
            <Route path="/items/:id/" element={<ItemDetailContainer />} />
          </Routes>
        </Container>
        <div class="bottom-decorator"></div>
      </main>
    </BrowserRouter>
  );
}

export default App;