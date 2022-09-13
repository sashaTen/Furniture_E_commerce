import { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { BsTrash } from "react-icons/bs"
///
import data from "./data";
import Loading from "./loading";
import { cartContext } from "../context";
import { isLogged } from "../context";
const Cart = () => {
  const { itemsOfCart, setItemsOfCart } = useContext(cartContext);
  const { logged, setLogged } = useContext(isLogged);
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

  function shiftItem(i) {
    let temp = itemsOfCart[0];
    itemsOfCart[0] = itemsOfCart[i];
    itemsOfCart[i] = temp;

    itemsOfCart.shift();
    setItemsOfCart([...itemsOfCart]);
  }
  const minusItem = (id) => {
    for (let i = 0; i < itemsOfCart.length; i++) {
      if (itemsOfCart[i] === id) {
        //
        return shiftItem(i);
      }
    }
  };
  const itemsAmount = (id) => {
    let number = 0;
    for (let i = 0; i < itemsOfCart.length; i++) {
      if (itemsOfCart[i] === id) {
        number++;
      }
    }
    return number;
  };

  const removeItem = (id) => {
    let newCartList = [];
    let newDisplayList = [];

    for (let i = 0; i < displayItems.length; i++) {
      if (displayItems[i].id !== id) {
        newDisplayList.push(displayItems[i]);
      }
    }
    setDisplayItems(newDisplayList);
    for (let i = 0; i < itemsOfCart.length; i++) {
      if (itemsOfCart[i] !== id) {
        newCartList.push(itemsOfCart[i]);
      }

      setItemsOfCart(newCartList);
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
                <h4>{itemsAmount(item.id)}</h4>
                <button
                  onClick={() => {
                    minusItem(item.id);
                  }}
                  className="cartBtnMinus"
                >
                  -
                </button>
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
        <Link to="/finish">
          <button className="cartBuyBtn"> buy </button>
        </Link>

        <h3>check with discount : {total}$</h3>
      </section>
      <Link to="/items">start shopping</Link>
    </div>
  );
};

export default Cart;
