import { BsFillStarFill } from "react-icons/bs";
import Loading from "../components/loading";
import { useLocation } from "react-router-dom";
import data from "../components/data";
import { useState, useEffect, useContext } from "react";
import { cartContext } from "../context";
import { Link } from "react-router-dom";
const ItemDesc = () => {
  const { itemsOfCart, setItemsOfCart } = useContext(cartContext);
  const [showLoading, setShowLoading] = useState(true);
  const location = useLocation();
  const state = location.state;
  //console.log();
  let itemObject = {};
  for (let i = 0; i < data.length; i++) {
    if (data[i].id === state) {
      itemObject = data[i];
    }
  }
  //console.log(itemObject.name);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowLoading(false);
    }, 900);
    return () => clearTimeout(timer);
  }, []);
  if (showLoading) {
    return <Loading />;
  }

  return (
    <div>
      <Link to="/items">back</Link>
      <section className="specificItemContainer">
        <img className="specificItemImg" src={itemObject.image} />
        <div className="specificItemInfo">
          <h3>{itemObject.name}</h3>
          <div className="starIcon">
            <BsFillStarFill />
            <BsFillStarFill />
            <BsFillStarFill />
            <BsFillStarFill />
            <BsFillStarFill />
          </div>
          <p style={{ color: "red" }}>{itemObject.price / 100}$</p>
          <p className="specificItemDesc">{itemObject.description}</p>

          <h4
            onClick={() => {
              setItemsOfCart([...itemsOfCart, itemObject.id]);
            }}
            className="specificItemCartBtn"
          >
            add to cart
          </h4>
        </div>
      </section>
    </div>
  );
};

export default ItemDesc;
