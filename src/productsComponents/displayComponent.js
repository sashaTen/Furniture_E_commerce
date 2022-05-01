import data from "../components/data";
import SingleItem from "./displaySingleComponent";
const DisplayComponent = () => {
  let items = data;

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
