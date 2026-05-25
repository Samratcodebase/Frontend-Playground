import { Link } from "react-router-dom";
const Nav = () => {
  const navStyle = {
    display: "flex",
  };
  return (
    <>
      <nav>
        <ul style={navStyle}>
          <li>
            <Link to="/"> Home </Link>
          </li>
          <li>
            <Link to="/location"> Location </Link>
          </li>
          <li>
            <Link to="/about"> ABOUT</Link>
          </li>
          <li>
            <Link to="/contact"> CONTACT</Link>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Nav;
