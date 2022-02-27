import CartWidget from "./CartWidget";
import ShoppingCart2Fill from "remixicon-react/ShoppingCart2FillIcon";
import Container from "@mui/material/Container";

export const NavBar = (props) => {
  return (
    <header>
      <nav id="nav">
        <Container maxWidth="lg">
          <div className="nav-wrapper">
            <div className="logo" />
            <ShoppingCart2Fill color="#333333" />
          </div>
        </Container>
      </nav>
    </header>
  );
};

export default NavBar;
