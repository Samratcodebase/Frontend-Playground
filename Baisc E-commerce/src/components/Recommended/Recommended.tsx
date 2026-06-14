import "./Recommended.css";
type RecomendedProp = {
  setBrand: (value: string) => void;
};

const brands = ["All Products", "Nike", "Puma", "Chappal", "Adidas", "Vans"];
function Recommended({ setBrand }: RecomendedProp) {
  return (
    <div className="recommended-container">
      <div className="recommended-btns">
        {brands.map((band) => {
          return <button onClick={() => setBrand(band)}>{band}</button>;
        })}
      </div>
    </div>
  );
}

export default Recommended;
