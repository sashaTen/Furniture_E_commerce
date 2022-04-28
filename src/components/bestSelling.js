import { BsCircle } from "react-icons/bs";
import { useState, useEffect } from "react";
const BestSelling = (props) => {
  const [moveRight, setMoveRight] = useState(0 + "px");
  const items = props.items;

  let macrosList = [];
  for (let i = 5; i < 9; i++) {
    macrosList.push(items[i]);
  }

  return (
    <div className="marcosContainer">
      <section className="marcosGreeting">
        <h3>
          {" "}
          best items in our <span className="BestSellFont">
            best selling
          </span>{" "}
          collection{" "}
        </h3>
      </section>
      <div className="marcosProductsContainer" style={{ right: moveRight }}>
        {macrosList.map((item) => {
          return (
            <div className="singleMacrosItem" key={item.id}>
              <p>{item.name}</p>
              <img className="collectionImg" src={item.image} />
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
