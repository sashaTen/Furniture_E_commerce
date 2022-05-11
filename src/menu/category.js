import { Link } from "react-router-dom";
import { useContext } from "react";
import { moveAppContext } from "../context";
const Category = (props) => {
  const { moveApp, setMoveApp } = useContext(moveAppContext);
  const items = props.items;
  let categories = [];
  for (let i = 0; i < items.length; i++) {
    categories.push(items[i].category);
  }
  //let uniqueChars = [...new Set(chars)];
  let uniqueCategories = [...new Set(categories)];

  return (
    <div className="categoryContainer">
      {uniqueCategories.map((item) => {
        return (
          <p
            onClick={() => {
              setMoveApp("App");
            }}
            key={item}
          >
            <Link to="/items" state={item}>
              {" "}
              {item}
            </Link>
          </p>
        );
      })}
    </div>
  );
};

export default Category;
