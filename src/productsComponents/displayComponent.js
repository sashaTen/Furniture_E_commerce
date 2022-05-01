import data from "../components/data";
import SingleItem from "./displaySingleComponent";
const DisplayComponent = () => {
  return (
    <>
      <img src="https://apollotran.com/prestashop/leo_conosin/images/logo.png" />

      {data.map((item) => {
        return <SingleItem {...item} key={item.id} />;
      })}
    </>
  );
};

export default DisplayComponent;
