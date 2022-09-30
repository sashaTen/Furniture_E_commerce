import { useContext } from "react";
import { Link } from "react-router-dom";
import { AiFillHome, AiFillSetting } from "react-icons/ai";
import {
  BsFillCaretDownFill,
  BsFillCartFill,
  BsFillPersonFill
} from "react-icons/bs";
//
import { cartContext } from "../context";
const Header = () => {
  const { itemsOfCart } = useContext(cartContext);

  return (
    <>
      <header className="header">
        <p className="itemsAmount">{itemsOfCart.length}</p>
       
        <Link to="/login">
          <BsFillPersonFill className="acountIcon" />
        </Link>
        <div className="header_menu">
          <Link to="/shoppingCART">
            <BsFillCartFill className="cart_icon" />
          </Link>
        </div>
        <Link to="/">
          <AiFillHome className="AiFillHome" />
        </Link>
      </header>
    </>
  );
};

export default Header;
