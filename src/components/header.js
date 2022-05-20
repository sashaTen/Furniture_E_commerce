import {
  BsFillCaretDownFill,
  BsFillCartFill,
  BsFillPersonFill
} from "react-icons/bs";
import { Link } from "react-router-dom";
import { AiFillHome, AiFillSetting } from "react-icons/ai";
import { useContext } from "react";
import { cartContext } from "../context";
const Header = () => {
  const { itemsOfCart } = useContext(cartContext);

  return (
    <>
      <header className="header">
        <p className="itemsAmount">{itemsOfCart.length}</p>
        <p className="latestNews">
          latest news :{" "}
          <span className="newsDiscount"> get new year discount 20%</span>
        </p>

        <div className="header_menu">
          <ul>
            <li>
              {" "}
              <BsFillPersonFill className="acountIcon" />
            </li>
          </ul>
          <Link to="/cart">
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
