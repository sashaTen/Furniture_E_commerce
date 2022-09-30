import { useContext } from "react";
import { useDispatch } from "react-redux";
import { push } from "../sliceFORcart";
import { BsFillHeartFill } from "react-icons/bs";
import { Link } from "react-router-dom";
import { cartContext } from "../context";
const SingleItem = (props) => {
  const { itemsOfCart, setItemsOfCart } = useContext(cartContext);
  const {
    id,
    name,
    description,
    image,
    price,
    company,
    category,
    shipping
  } = props;
  const itemId = id
  const   itemOBJECT   =   [id ,   name ,  description ,    image   ,   price ]
  const dispatch = useDispatch();

  return (
    <div className="singleItemContainer">
      <p className="itemTitle">{name}</p>
      <p className="itemPrice">{price / 1000}$</p>
      <p className="itemDiscount">-8%</p>
      <BsFillHeartFill className="itemHeart" />
      <img className="itemImg" src={image} />
      <div className="whiteBottomImg"></div>
      <article className="btnContainer">
        <Link to="/itemDesc" state={itemId}>
          {" "}
          <button className="itemDetailBtn">details</button>
        </Link>

        <button
          onClick={() => {
            setItemsOfCart([...itemsOfCart, itemId]);
            dispatch(push(itemOBJECT));
            
          }}
          className="addToCartBtn"
        >
          add to cart
        </button>
      </article>
    </div>
  );
};

export default SingleItem;
