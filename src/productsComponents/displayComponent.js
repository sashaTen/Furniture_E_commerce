import data from "../components/data";
import { useState, useEffect } from "react";
import SingleItem from "./displaySingleComponent";
import Loading from "../components/loading";
const DisplayComponent = () => {
  let items = data;
  const [showLoading, setShowLoading] = useState(true);
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowLoading(false);
    }, 1300);
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
