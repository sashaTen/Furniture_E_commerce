import { Link } from "react-router-dom";
import { BsCircle } from "react-icons/bs";
import { useState } from "react";
import data from "./data";
const BestSelling = () => {
  const [moveRight, setMoveRight] = useState(0 + "px");

  let macrosList = [];
  for (let i = 5; i < 9; i++) {
    macrosList.push(data[i]);
  }

  return (
    <div className="marcosContainer">
      <section className="marcosGreeting">
        <h3>
          {" "}
          best items in our
          <Link to="/items">
            <span className="BestSellFont">best selling</span>{" "}
          </Link>
          collection{" "}
        </h3>
      </section>
      <div className="marcosProductsContainer" style={{ right: moveRight }}>
        {macrosList.map((item) => {
          return (
            <div className="singleMacrosItem" key={item.id}>
              <Link to="/items">
                <p>{item.name}</p>
                <img className="collectionImg" src={item.image} />
              </Link>
            </div>
          );
        })}
      </div>

      <section className="macrosBtncontainer">
        <BsCircle
          onClick={() => {
            setMoveRight(0) + "px";
          }}
          className="marcosBtn"
        />
        <BsCircle
          onClick={() => {
            setMoveRight(350) + "px";
          }}
          className="marcosBtn"
        />
        <BsCircle
          onClick={() => {
            setMoveRight(700) + "px";
          }}
          className="marcosBtn"
        />
        <BsCircle
          onClick={() => {
            setMoveRight(1050) + "px";
          }}
          className="marcosBtn"
        />
      </section>
    </div>
  );
};

export default BestSelling;
