import { isLogged } from "../context";
import { Link } from "react-router-dom";
import     {useSelector    }   from     "react-redux"  
const AfterPurchase = () => {
    const loginState= useSelector((state) => state.loginREDUCER);
  if (loginState.value!=="logout") {
    return (
      <div className="finishPage">
       
        THANKS FOR SHOPPING WITH US 
        <Link to="/items">
          {" "}
          <p>wanna keep shopping  </p>{" "}
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
