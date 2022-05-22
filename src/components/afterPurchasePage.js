import { useContext } from "react";
import { isLogged } from "../context";

const AfterPurchase = () => {
  const loginCheck = useContext(isLogged);
  console.log(loginCheck);

  return <div className="finishPage">FINISH PAGE</div>;
};

export default AfterPurchase;
