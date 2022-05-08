import data from "../components/data";
import { useState, useEffect } from "react";
import SingleItem from "./displaySingleComponent";
import Loading from "../components/loading";
import { useLocation } from "react-router-dom";

const DisplayComponent = () => {
  const location = useLocation();
  const state = location.state;
  let list = [];

  if (state) {
    console.log(state);
    for (let i = 0; i < data.length; i++) {
      if (data[i].category === state) {
        list.push(data[i]);
      }
    }
  } else if (!state) {
    for (let i = 0; i < data.length; i++) {
      list = data;
    }
  }

  const [showLoading, setShowLoading] = useState(true);
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
    <>
      <section className="productsPage">
        <div className="filtersContainer"></div>
        <div className="productsContainer">
          {list.map((item) => {
            return <SingleItem {...item} key={item.id} />;
          })}
        </div>
      </section>
    </>
  );
};

export default DisplayComponent;
