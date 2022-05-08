import data from "../components/data";
import { useState, useEffect } from "react";
import SingleItem from "./displaySingleComponent";
import Loading from "../components/loading";
import { useLocation } from "react-router-dom";

const DisplayComponent = () => {
  const [items, setItems] = useState([]);
  const location = useLocation();
  const state = location.state;
  useEffect(() => {
    if (state) {
      console.log(state);
    } else if (!state) {
      setItems(data);
    }
  }, []);

  console.log(state);

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
          {items.map((item) => {
            return <SingleItem {...item} key={item.id} />;
          })}
        </div>
      </section>
    </>
  );
};

export default DisplayComponent;
