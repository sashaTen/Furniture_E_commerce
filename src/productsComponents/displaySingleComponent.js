import { BsFillHeartFill } from "react-icons/bs";
const SingleItem = (props) => {
  const {
    name,
    description,
    image,
    price,
    company,
    category,
    shipping
  } = props;
  return (
    <div className="singleItemContainer">
      <p className="itemTitle">{name}</p>
      <p className="itemPrice">{price / 1000}$</p>
      <p className="itemDiscount">-8%</p>
      <BsFillHeartFill className="itemHeart" />
      <img className="itemImg" src={image} />
      <div className="whiteBottomImg"></div>
      <article className="btnContainer">
        <button className="itemDetailBtn">details</button>
        <button className="addToCartBtn">add to cart</button>
      </article>
    </div>
  );
};

export default SingleItem;
