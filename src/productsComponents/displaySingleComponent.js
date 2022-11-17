import { useContext } from "react";
import { useDispatch } from "react-redux";
import { push } from "../reduxSlices/sliceFORcart";
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
  const   ITEMobject    =  {id: id ,    name: name   ,    description:  description ,     image:image ,   price:  price}
  const dispatch = useDispatch();

  return (
    <div className="singleItemContainer">
      <p className="itemTitle">{name}</p>
      <p className="itemPrice">{price / 1000}$</p>
      <p className="itemDiscount">-8%</p>
      <img className="itemImg" src={image} />
      <div ></div>
      <article className="btnContainer">
        <Link to="/itemDesc" state={itemId}>
          {" "}
          <button className="itemDetailBtn">details</button>
        </Link>

        <button
          onClick={() => {
            setItemsOfCart([...itemsOfCart, itemId]);
            dispatch(push(ITEMobject));
            
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
