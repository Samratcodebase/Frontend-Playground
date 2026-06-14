import { AiFillStar } from "react-icons/ai";
import { BsFillBagHeartFill } from "react-icons/bs";

type CardProps = {
  img: string;
  title: string;
  reviews: string;
  prevPrice: string;
  newPrice: string;
};

function Card({
  img,
  title,
  reviews,
  prevPrice,
  newPrice,
}: CardProps) {
  return (
    <section className="card">
      <img src={img} alt={title} className="card-img" />
      <div className="card-details">
        <h3 className="card-title">{title}</h3>

        <section className="card-reviews">
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
          <span className="total-reviews">{reviews}</span>
        </section>

        <section className="card-price">
          <div className="price">
            <del>{prevPrice}</del>
            {newPrice}
          </div>

          <div className="bag">
            <BsFillBagHeartFill />
          </div>
        </section>
      </div>
    </section>
  );
}

export default Card;