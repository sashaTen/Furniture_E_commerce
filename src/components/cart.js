import Loading from "./loading";
import { useState, useEffect } from "react";
import data from "./data";
const Cart = () => {
  const [showLoading, setShowLoading] = useState(true);
  let cartItems = [];
  for (let i = 0; i < 4; i++) {
    cartItems.push(data[i]);
  }
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
      <div className="cartContainer">
        {cartItems.map((item) => {
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
            </div>
          );
        })}
      </div>
      <section className="cartBottom">
        <button className="cartBuyBtn"> buy </button>
        <h3>total</h3>
      </section>
    </div>
  );
};

export default Cart;
