import "./Search.css";
import Recommended from "../Recommended/Recommended";
import { FiShoppingCart } from "react-icons/fi";
import { FaRegUser, FaRegHeart } from "react-icons/fa";

type SearchBarProps = {
  SearchQuery: string;
  handleSearchQuery: (event: React.ChangeEvent<HTMLInputElement>) => void;

  setBrand: (value: string) => void;
};

const SearchBar = ({
  SearchQuery,
  handleSearchQuery,

  setBrand,
}: SearchBarProps) => {
  return (
    <>
      <nav>
        <div className="brand-logo">
          <h1>logo</h1>
        </div>
        <Recommended setBrand={setBrand} />
        <div className="input-container">
          <input
            type="text"
            value={SearchQuery}
            placeholder="Enter anything"
            onChange={(e) => handleSearchQuery(e)}
          />
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
