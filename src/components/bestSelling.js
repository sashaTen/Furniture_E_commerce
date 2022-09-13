import { Link } from "react-router-dom";
import data from "./data";
import SingleItem from "../productsComponents/displaySingleComponent";
const BestSelling = () => {
  /*
  REPOKEORKGPEO
  RKGOEPRKGPEORKG
  ELRGKPEORKGPOERKRPE
  GERGERGERGERGE
  GEGER
  */

  const bestSellingList = [];
  for (let i = 0; i < 5; i++) {
    bestSellingList.push(data[i]);
  }

  return (
    <>
      <h3>
        {" "}
        best items in our
        <Link to="/items">
          <span className="BestSellFont">best selling</span>{" "}
        </Link>
        collection{" "}
      </h3>
      <div className="bestSellersContainer">
        {bestSellingList.map((item) => {
          return <SingleItem {...item} key={item.id} />;
        })}
      </div>
    </>
  );
};

export default BestSelling;
