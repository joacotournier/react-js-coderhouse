import CartWidget from "./CartWidget";
import Container from "@mui/material/Container";
import { NavLink } from "react-router-dom";

export const NavBar = (props) => {
  return (
    <header>
      <nav id="nav">
        <Container maxWidth="lg">
          <div className="nav-wrapper">
            <div>
              <NavLink to="/categories/sauces">Sauces</NavLink>
              <NavLink to="/categories/chiles">Chiles</NavLink>
              <NavLink to="/categories/dishes">Dishes</NavLink>
            </div>
            <CartWidget />
          </div>
        </Container>
      </nav>
    </header>
  );
};

export default NavBar;
