import { Link } from "react-router-dom";
import Button from "./Button";
import Logo from "./Logo";
import BrandLogo from "../assests/brand_logo.png";
const Nav = () => {
  const navStyle = {
    display: "flex",
    listStyle: "none",
    gap: "20px",
    textDecoration: "none",
    margin: "0 auto",
  };
  const container = {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
  };
  return (
    <>
      <div style={container}>
        <Logo><img src={BrandLogo} alt="brand logo" /></Logo>
        <nav>
          <ul style={navStyle}>
            <li>
              <Link style={{ textDecoration: "none" }} to="/">
                {" "}
                Home{" "}
              </Link>
            </li>
            <li>
              <Link style={{ textDecoration: "none" }} to="/location">
                {" "}
                Location{" "}
              </Link>
            </li>
            <li>
              <Link style={{ textDecoration: "none" }} to="/about">
                {" "}
                ABOUT
              </Link>
            </li>
            <li>
              <Link style={{ textDecoration: "none" }} to="/contact">
                {" "}
                CONTACT
              </Link>
            </li>
          </ul>
        </nav>
        <Button
          Text="Login"
          style={{
            backgroundColor: "#d01c28",
            padding: "10px",
            color: "white",
            fontSize: "16px",
            width: "50px",
            textAlign: "center",
          }}
        />
      </div>
    </>
  );
};

export default Nav;
