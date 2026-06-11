import "./Search.css";
import Recommended from "../Recommended/Recommended";
import { FiShoppingCart } from "react-icons/fi";
import { FaRegUser, FaRegHeart } from "react-icons/fa";

const SearchBar = () => {
  return (
    <>
      <nav>
        <div className="brand-logo">
          <h1>logo</h1>
        </div>
        <Recommended />
        <div className="input-container">
          <input type="text" placeholder="Enter anything" />
        </div>
        <div className="input-icon-container">
          <FaRegHeart />
          <FiShoppingCart />
          <FaRegUser />
        </div>
      </nav>
    </>
  );
};

export default SearchBar;
