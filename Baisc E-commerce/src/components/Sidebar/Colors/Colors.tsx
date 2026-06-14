import "./Color.css";
const colors = ["ALL", "Green", "Red", "Black", "Blue", "White"];
type RadioQueryType = {
  Category: string;
  Price: string;
  Color: string;
};

type SideBarProps = {
  RadioQuery: RadioQueryType;
  setRadioQuery: React.Dispatch<React.SetStateAction<RadioQueryType>>;
};
function Colors({ RadioQuery, setRadioQuery }: SideBarProps) {
  return (
    <div className="color-container">
      <h2>Colors</h2>
      <div className="color-form">
        {colors.map((color) => {
          return (
            <label
              key={color}
              htmlFor={`color-${color}`}
              className={`color-option ${RadioQuery.Color === color ? "active" : ""}`}
            >
              <input
                type="radio"
                value={color}
                name="color"
                id={`color-${color}`}
                checked={RadioQuery.Color === color}
                onChange={() =>
                  setRadioQuery((prev) => {
                    return {
                      ...prev,
                      Color: color,
                    };
                  })
                }
              />
              {color}
            </label>
          );
        })}
      </div>
    </div>
  );
}

export default Colors;
