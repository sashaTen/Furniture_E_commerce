import Loading from "./loading";
import { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { cartContext } from "../context";
import data from "./data";
import { BsTrash } from "react-icons/bs";
const Cart = () => {
  const { itemsOfCart, setItemsOfCart } = useContext(cartContext);
  const [showLoading, setShowLoading] = useState(true);

  let productsItems = [];

  function pushInProductsList(id) {
    for (let i = 0; i < data.length; i++) {
      if (data[i].id === id) {
        productsItems.push(data[i]);
      }
    }
  }

  for (let i = 0; i < itemsOfCart.length; i++) {
    pushInProductsList(itemsOfCart[i]);
  }

  const removeItem = (id) => {
    let newList = [];
    for (let i = 0; i < itemsOfCart.length; i++) {
      if (itemsOfCart[i] !== id) {
        newList.push(itemsOfCart[i]);
      }
      console.log(newList.length);
      setItemsOfCart(newList);
    }
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowLoading(false);
    }, 1000);
    return () => clearTimeout(timer);
  }, []);
  if (showLoading) {
    return <Loading />;
  }
  return (
    <div className="cartComponent">
      your cart
      <h4
        onClick={() => {
          setItemsOfCart([]); //  clear  cart  btn
        }}
        className="cartClear"
      >
        clear cart
      </h4>
      <div className="cartContainer">
        {productsItems.map((item) => {
          return (
            <div key={item.id} className="cartItemContainer">
              <img className="cartImg" src={item.image} />
              <div>
                <p className="cartItemName"> {item.name}</p>
                <p className="cartItemPrice">{item.price / 100}$</p>
              </div>
              <section className="cartPlusMinus">
                <button className="cartBtnPlus">+</button>
                <h4>1</h4>
                <button className="cartBtnMinus">-</button>
              </section>
              <BsTrash
                onClick={() => {
                  removeItem(item.id);
                }}
                className="deleteCartItem"
              />
            </div>
          );
        })}
      </div>
      <section className="cartBottom">
        <button className="cartBuyBtn"> buy </button>
        <h3>total</h3>
      </section>
      <Link to="/items">start shopping</Link>
    </div>
  );
};

export default Cart;
