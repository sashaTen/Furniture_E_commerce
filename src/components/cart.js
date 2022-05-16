import Loading from "./loading";
import { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { cartContext } from "../context";
import data from "./data";
import { BsTrash } from "react-icons/bs";
const Cart = () => {
  const { itemsOfCart, setItemsOfCart } = useContext(cartContext);
  const [showLoading, setShowLoading] = useState(true);
  let total = 0;
  let productsItems = [];
  const [displayItems, setDisplayItems] = useState([]);
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
  const plusItem = (id) => {
    setItemsOfCart([...itemsOfCart, id]);
  };

  const removeItem = (id) => {
    let newList = [];
    for (let i = 0; i < itemsOfCart.length; i++) {
      if (itemsOfCart[i] !== id) {
        newList.push(itemsOfCart[i]);
      }

      setItemsOfCart(newList);
    }
  };

  for (let i = 0; i < productsItems.length; i++) {
    total += parseInt(productsItems[i].price / 1000);
  }
  useEffect(() => {
    setDisplayItems([...new Set(productsItems)]);
  }, []);
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
        {displayItems.map((item) => {
          return (
            <div key={item.id} className="cartItemContainer">
              <img className="cartImg" src={item.image} />
              <div>
                <p className="cartItemName"> {item.name}</p>
                <p className="cartItemPrice">{item.price / 1000}$</p>
              </div>
              <section className="cartPlusMinus">
                <button
                  onClick={() => {
                    plusItem(item.id);
                  }}
                  className="cartBtnPlus"
                >
                  +
                </button>
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

        <h3>check with discount : {total}$</h3>
      </section>
      <Link to="/items">start shopping</Link>
    </div>
  );
};

export default Cart;
