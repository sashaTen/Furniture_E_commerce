import data from "../components/data";
import SingleItem from "./displaySingleComponent";
const DisplayComponent = () => {
  return (
    <>
      <p></p>
      {data.map((item) => {
        return <SingleItem {...item} key={item.id} />;
      })}
    </>
  );
};

export default DisplayComponent;
