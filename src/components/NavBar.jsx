import CartWidget from "./CartWidget";
import Container from "@mui/material/Container";
import { NavLink } from "react-router-dom";

export const NavBar = (props) => {
  return (
    <header>
      <nav id="nav">
        <Container maxWidth="lg">
          <div className="nav-wrapper">
            <div className="nav-left">
              <a href="/">
                <img class="logo" src="/logo.svg" alt="logo" />
              </a>
              <NavLink to="/categories/sauces">Sauces</NavLink>
              <NavLink to="/categories/chiles">Chiles</NavLink>
              <NavLink to="/categories/groceries">Groceries</NavLink>
            </div>
            <CartWidget />
          </div>
        </Container>
      </nav>
    </header>
  );
};

export default NavBar;
