import "./App.css";
import Product from "./pages/Product";
import SearchBar from "../src/components/SearchBar/SearchBar";
import Sidebar from "./components/Sidebar/sidebar";
import { useState } from "react";
import Card from "./components/Card/Card";
import data from "./db/db";
type ProuctProp = {
  img: string;
  title: string;

  reviews: string;
  prevPrice: string;
  newPrice: string;
  company: string;
  color: string;
  category: string;
};

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

  const filteredProducts = data.filter((product: ProuctProp) => {
    // Search Filter
    const matchesSearch =
      SearchQuery === "" ||
      product.title.toLowerCase().includes(SearchQuery.toLowerCase());

    // Category Filter (case-insensitive, treat any 'all' as no filter)
    const categoryLower = RadioQuery.Category ? RadioQuery.Category.toLowerCase() : "";
    const matchesCategory =
      categoryLower === "all" ||
      categoryLower === "" ||
      product.category.toLowerCase() === categoryLower;

    // Color Filter (case-insensitive, treat any 'all' as no filter)
    const colorLower = RadioQuery.Color ? RadioQuery.Color.toLowerCase() : "";
    const matchesColor =
      colorLower === "all" ||
      colorLower === "" ||
      product.color.toLowerCase() === colorLower;

    // Brand Filter: empty or any 'all' selection shows all brands; compare case-insensitive
    const brandLower = Brand ? Brand.toLowerCase() : "";
    const matchesBrand =
      Brand === "" ||
      brandLower === "all" ||
      brandLower === "all products" ||
      product.company.toLowerCase() === brandLower;

    return matchesSearch && matchesCategory && matchesColor && matchesBrand;
  });
  console.log("User  Tyoped", SearchQuery);
  console.log("Radio Query CateGory", RadioQuery.Category);
  console.log("Radio Query Price", RadioQuery.Price);
  console.log("Radio Query Color", RadioQuery.Color);
  console.log("Brand ", Brand);
  const cards = filteredProducts.map((product: ProuctProp, index: number) => (
    <Card
      key={`12${index}`}
      img={product.img}
      title={product.title}
      reviews={product.reviews}
      prevPrice={product.prevPrice}
      newPrice={product.newPrice}
    />
  ));
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

        <Product>{cards}</Product>
      </div>
    </>
  );
}

export default App;
