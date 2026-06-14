import { useState, useEffect } from "react";
import "./Color.css";
const categories = ["All", "Green", "Red", "Black", "Blue", "White"];
function Colors() {
  const [SelectedColor, setSeletedColor] = useState("All");
  console.log("The Color is", SelectedColor);
  useEffect(() => {
    console.log("Colors MOUNTED");
    return () => console.log("Colors UNMOUNTED");
  }, []);
  return (
    <div className="color-container">
      <h2>Colors</h2>
      <div className="color-form">
        {categories.map((cat) => {
          return (
            <label
              key={cat}
              htmlFor={`color-${cat}`}
              className={`color-option ${SelectedColor === cat ? "active" : ""}`}
            >
              <input
                type="radio"
                value={cat}
                name="color"
                id={`color-${cat}`}
                checked={SelectedColor === cat}
                onChange={() => setSeletedColor(cat)}
              />
              {cat}
            </label>
          );
        })}
      </div>
    </div>
  );
}

export default Colors;
