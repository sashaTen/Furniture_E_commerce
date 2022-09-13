import { useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import SingleItem from "./displaySingleComponent";
import data from "../components/data";
import Loading from "../components/loading";

const DisplayComponent = () => {
  const location = useLocation();
  const state = location.state;
  let list = [];

  if (state) {
    for (let i = 0; i < data.length; i++) {
      if (data[i].category === state) {
        list.push(data[i]);
      } else if (list.length === 0) {
        for (let i = 0; i < data.length; i++) {
          if (data[i].company === state) {
            list.push(data[i]);
          }
        }
      }
    }
  } else if (!state) {
    for (let i = 0; i < data.length; i++) {
      list.push(data[i]);
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
