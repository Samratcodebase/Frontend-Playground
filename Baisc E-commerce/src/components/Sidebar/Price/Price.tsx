import { useState } from "react";
import "./Price.css";
const Prices = ["All", "1-50", "50-100", "100-150", "Over 150"];
function Price() {
  const [SelectedPrice, setSeletedPrice] = useState("All");
   console.log("Currecnt State is ", SelectedPrice);
   
  return (
    <div className="price-container">
      <h2>Price</h2>
      <div className="price-form">
        {Prices.map((price) => {
          return (
            <label
              key={price}
              htmlFor={`price-${price}`}
              className={`price-option ${SelectedPrice === price ? "active" : ""}`}
            >
              <input
                checked={SelectedPrice === price}
                onChange={() => {
                  setSeletedPrice(price);
                }}
                type="radio"
                value={price}
                name="price"
                id={`price-${price}`}
              />
              {/^[A-Za-z]/.test(price) ? price : `₹${price}`}
            </label>
          );
        })}
      </div>
    </div>
  );
}

export default Price;
