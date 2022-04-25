import { BsFillCaretDownFill, BsSearch } from "react-icons/bs";
import { AiOutlineMenu } from "react-icons/ai";
import Category from "./category";
import Company from "./company";
import { useState } from "react";

const Menu = (props) => {
  const items = props.items;
  const [showCategory, setShowCategory] = useState(false);
  const [showCompany, setShowCompany] = useState(false);
  return (
    <>
      <AiOutlineMenu
        className="menuIcon"
        onClick={() => {
          props.changeClass("moveApp");
        }}
      />
      <section className="menuContainer">
        <div
          className="btnXmobileMenu"
          onClick={() => {
            props.changeClass("App");
          }}
        >
          {" "}
          X{" "}
        </div>
        <div className="btn">
          Home <BsFillCaretDownFill className="BsFillDown" />{" "}
        </div>

        <div className="btn">
          Company
          <BsFillCaretDownFill
            className="BsFillDown"
            onClick={() => {
              setShowCompany(!showCompany);
            }}
          />{" "}
          {showCompany && <Company items={items} />}
        </div>
        <div className="btn">
          Category
          <BsFillCaretDownFill
            className="BsFillDown"
            onClick={() => {
              setShowCategory(!showCategory);
            }}
          />{" "}
          {showCategory && <Category items={items} />}
        </div>
        <div className="btn">
          About Us <BsFillCaretDownFill className="BsFillDown" />{" "}
        </div>
        <div className="btn">
          Blog <BsFillCaretDownFill className="BsFillDown" />{" "}
        </div>
        <div className="btn">
          Contact <BsFillCaretDownFill className="BsFillDown" />{" "}
        </div>
      </section>
    </>
  );
};

export default Menu;
