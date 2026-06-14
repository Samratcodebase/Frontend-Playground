import "./App.css";
import Product from "./pages/Product";
import SearchBar from "../src/components/SearchBar/SearchBar";
import Sidebar from "./components/Sidebar/sidebar";
import { useState } from "react";

// import data from "./db/db.js";
// type ProuctProp = {
//   img: string;
//   title: string;

//   reviews: string;
//   prevPrice: string;
//   newPrice: string;
//   company: string;
//   color: string;
//   category: string;
// };

function App() {
  const [SearchQuery, setSearchQuery] = useState("");
  const [RadioQuery, setRadioQuery] = useState({
    Category: "ALL",
    Price: "ALL",
    Color: "ALL",
  });
  const [Brand, setBrand] = useState("");

  const handleSearchQuery = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(event.target.value);
  };

  // // const fileredItems = data.filter((product: ProuctProp) => {
  // //   return product.title.toLowerCase().includes(SearchQuery.toLowerCase());
  // });
  console.log("User  Tyoped", SearchQuery);
  console.log("Radio Query CateGory", RadioQuery.Category);
  console.log("Radio Query Price", RadioQuery.Price);
  console.log("Radio Query Color", RadioQuery.Color);
  console.log("Brand ", Brand);

  return (
    <>
      <SearchBar
        SearchQuery={SearchQuery}
        handleSearchQuery={handleSearchQuery}
  
        setBrand={setBrand}
      />

      <div className="main-container">
        <div className="side-bar">
          <Sidebar RadioQuery={RadioQuery} setRadioQuery={setRadioQuery} />
        </div>

        <div className="card-container">
          <Product />
        </div>
      </div>
    </>
  );
}

export default App;
