import "./Product.css";
type ProductProps = {
  children: React.ReactNode;
};

function Product({ children }: ProductProps) {
  return <section className="card-container">{children}</section>;
}

export default Product;
