import { useContext } from "react";
import { Link } from "react-router-dom";
import { moveAppContext } from "../context";
const Company = (props) => {
  const { setAppDisplay, setMoveApp } = useContext(moveAppContext);
  const items = props.items;
  let companies = [];
  for (let i = 0; i < items.length; i++) {
    companies.push(items[i].company);
  }
  let uniqueCompanies = [...new Set(companies)];

  return (
    <div>
      {uniqueCompanies.map((item, index) => {
        return (
          <div
            onClick={() => {
              setAppDisplay(false);
              setMoveApp("App");
              props.showMenu("menuIcon");
              props.closeCategory(false);
            }}
            key={index}
          >
            <Link to="/items" state={item}>
              {item}
            </Link>
          </div>
        );
      })}
    </div>
  );
};

export default Company;
