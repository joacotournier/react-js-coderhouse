import CartWidget from './CartWidget';

export const NavBar = (props) => {
  console.table(props);
  return (
    <header>
      <nav>
        <ul>
          <li>hello {props.name}</li>
          <li></li>
        </ul>
      </nav>
    </header>
  );
};

export default NavBar;
