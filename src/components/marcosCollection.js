import { Link } from "react-router-dom";
import { BsCircle } from "react-icons/bs";
import { useState, useEffect } from "react";
const MarcosCollection = (props) => {
  const [moveRight, setMoveRight] = useState(0 + "px");
  const items = props.items;

  let macrosList = [];
  for (let i = 0; i < items.length; i++) {
    if (items[i].company === "marcos") {
      macrosList.push(items[i]);
    }
  }

  return (
    <div className="marcosContainer">
      <section className="marcosGreeting">
        <h3>
          {" "}
          new design from
          <Link to="/items">
            <span className="marcosFont">marcos</span>
          </Link>
          collection{" "}
        </h3>
        <p className="greyColor">
          Visit our shop to see amazing creations from our designers.
        </p>
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

export default MarcosCollection;
