import { useState } from "react";
import "./Category.css";

const categories = ["All", "Sneakers", "Flats", "Heels"];

function Category() {
  const [selected, setSelected] = useState("All");

  return (
    <div className="category-container">
      <h2>Category</h2>
      <form className="category-form">
        {categories.map((cat) => (
          <label
            key={cat}
            htmlFor={cat}
            className={`category-option ${selected === cat ? "active" : ""}`}
          >
            <input
              type="radio"
              name="category"
              id={cat}
              value={cat}
              checked={selected === cat}
              onChange={() => setSelected(cat)}
            />
            {cat}
          </label>
        ))}
      </form>
    </div>
  );
}

export default Category;
