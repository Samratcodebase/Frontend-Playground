import "./App.css";
import Product from "./pages/Product";
import SearchBar from "../src/components/SearchBar/SearchBar";
import Sidebar from "./components/Sidebar/sidebar";
function App() {
  return (
    <>
      <SearchBar />

      <div className="main-container">
        <div className="side-bar">
          <Sidebar />
        </div>

        <div className="card-container">
          <Product />

          <Product />

          <Product />
          <Product />
          <Product />

          <Product />

          <Product />

          <Product />

          <Product />

          <Product />

          <Product />
        </div>
      </div>
    </>
  );
}

export default App;
