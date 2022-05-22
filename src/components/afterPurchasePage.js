import { useContext } from "react";
import { isLogged } from "../context";
import { Link } from "react-router-dom";

const AfterPurchase = () => {
  const loginCheck = useContext(isLogged);
  if (loginCheck.logged) {
    return (
      <div className="finishPage">
        THANKS FOR SHOPPING WITH US
        <Link to="/items">
          {" "}
          <p>wanna keep shopping</p>{" "}
        </Link>
      </div>
    );
  }

  return (
    <div className="finishPage">
      YOU ARE NOT LOGGED IN
      <Link to="/login">
        <p>login here</p>
      </Link>
    </div>
  );
};

export default AfterPurchase;
