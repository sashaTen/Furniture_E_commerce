import {
  BsFillCaretDownFill,
  BsFillCartFill,
  BsFillPersonFill,
  BsSearch
} from "react-icons/bs";
import { AiOutlineMenu, AiFillSetting } from "react-icons/ai";
const Header = () => {
  return (
    <>
      <header className="header">
        <p className="latestNews">
          latest news :{" "}
          <span className="newsDiscount"> get new year discount 20%</span>
        </p>

        <div className="header_menu">
          <ul>
            <li>
              <span className="settingsBtn"> Settings</span> <AiFillSetting />{" "}
            </li>
            <li>
              <BsFillCaretDownFill />
            </li>
          </ul>
          <ul>
            <li>
              {" "}
              <span className="accountBtn">Account</span> <BsFillPersonFill />
            </li>
            <li>
              <BsFillCaretDownFill />
            </li>
          </ul>
          <BsFillCartFill className="cart_icon" />
        </div>
      </header>
    </>
  );
};

export default Header;
