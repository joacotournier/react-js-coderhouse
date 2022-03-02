import CartWidget from "./CartWidget";
import Container from "@mui/material/Container";
import { useState } from "react";

export const NavBar = (props) => {
  return (
    <header>
      <nav id="nav">
        <Container maxWidth="lg">
          <div className="nav-wrapper">
            <div className="logo" />
            <CartWidget />
          </div>
        </Container>
      </nav>
    </header>
  );
};

export default NavBar;
