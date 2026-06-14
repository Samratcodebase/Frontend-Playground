
import "./Price.css";
type RadioQueryType = {
  Category: string;
  Price: string;
  Color: string;
};

type SideBarProps = {
  RadioQuery: RadioQueryType;
  setRadioQuery: React.Dispatch<React.SetStateAction<RadioQueryType>>;
};
const Prices = ["ALL", "1-50", "50-100", "100-150", "Over 150"];
function Price({ RadioQuery, setRadioQuery }: SideBarProps) {
  return (
    <div className="price-container">
      <h2>Price</h2>
      <div className="price-form">
        {Prices.map((price) => {
          return (
            <label
              key={price}
              htmlFor={`price-${price}`}
              className={`price-option ${RadioQuery.Price === price ? "active" : ""}`}
            >
              <input
                checked={RadioQuery.Price === price}
                onChange={() => {
                  setRadioQuery((prev) => {
                    return {
                      ...prev,
                      Price: price,
                    };
                  });
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
