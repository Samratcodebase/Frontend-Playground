import "./Category.css";

const categories = ["ALL", "Sneakers", "Flats", "Heels"];
type RadioQueryType = {
  Category: string;
  Price: string;
  Color: string;
};

type SideBarProps = {
  RadioQuery: RadioQueryType;
  setRadioQuery:React.Dispatch<React.SetStateAction<RadioQueryType>>;
};
function Category({ RadioQuery, setRadioQuery }: SideBarProps) {
  return (
    <div className="category-container">
      <h2>Category</h2>
      <form className="category-form">
        {categories.map((cat) => (
          <label
            key={cat}
            htmlFor={cat}
            className={`category-option ${RadioQuery.Category === cat ? "active" : ""}`}
          >
            <input
              type="radio"
              name="category"
              id={cat}
              value={cat}
              checked={RadioQuery.Category === cat}
              onChange={() =>
                setRadioQuery((prev) => {
                  return {
                    ...prev,
                    Category: cat,
                  };
                })
              }
            />
            {cat}
          </label>
        ))}
      </form>
    </div>
  );
}

export default Category;
