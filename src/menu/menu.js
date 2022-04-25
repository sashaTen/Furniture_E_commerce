import { BsFillCaretDownFill, BsSearch } from "react-icons/bs";
import { AiOutlineMenu } from "react-icons/ai";
import Category from "./category";
import { useState } from "react";
const Menu = (props) => {
  const items = props.items;
  const [showCategory, setShowCategory] = useState(false);

  return (
    <>
      <AiOutlineMenu
        className="menuIcon"
        onClick={() => {
          props.changeClass("moveApp");
        }}
      />
      <section className="menuContainer">
        <p
          className="btnXmobileMenu"
          onClick={() => {
            props.changeClass("App");
          }}
        >
          {" "}
          X{" "}
        </p>
        <p className="btn">
          Home <BsFillCaretDownFill />{" "}
        </p>

        <p className="btn">
          Company
          <BsFillCaretDownFill />{" "}
        </p>
        <p className="btn">
          Category
          <BsFillCaretDownFill
            onClick={() => {
              setShowCategory(!showCategory);
            }}
          />{" "}
          {showCategory && <Category />}
        </p>
        <p className="btn">
          About Us <BsFillCaretDownFill />{" "}
        </p>
        <p className="btn">
          Blog <BsFillCaretDownFill />{" "}
        </p>
        <p className="btn">
          Contact <BsFillCaretDownFill />{" "}
        </p>
      </section>
    </>
  );
};

export default Menu;
