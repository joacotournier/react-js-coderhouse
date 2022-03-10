import CartWidget from "./CartWidget";
import Container from "@mui/material/Container";
import { NavLink } from "react-router-dom";

export const NavBar = (props) => {
  return (
    <header>
      <nav id="nav">
        <Container maxWidth="lg">
          <div className="nav-wrapper">
            <div className="logo" />
            <NavLink to="/categories/1">Option</NavLink>
            <NavLink to="/categories/2">Option</NavLink>
            <NavLink to="/cart">Option</NavLink>
            <CartWidget />
          </div>
        </Container>
      </nav>
    </header>
  );
};

export default NavBar;
