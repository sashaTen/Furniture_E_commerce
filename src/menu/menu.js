import { BsFillCaretDownFill } from "react-icons/bs";
import { Link } from "react-router-dom";
import { AiOutlineMenu } from "react-icons/ai";
import Category from "./category";
import Company from "./company";
import { useState } from "react";

const Menu = (props) => {
  const items = props.items;
  const [showCategory, setShowCategory] = useState(false);
  const [showCompany, setShowCompany] = useState(false);
  const [menuIcon, setMenuIcon] = useState("menuIcon");
  return (
    <>
      <AiOutlineMenu
        className={menuIcon}
        onClick={() => {
          props.changeClass("moveApp");
          setMenuIcon("invisible");
        }}
      />
      <section className="menuContainer">
        <div
          className="btnXmobileMenu"
          onClick={() => {
            props.changeClass("App");
            setMenuIcon("menuIcon");
          }}
        >
          {" "}
          X{" "}
        </div>
        <Link to="/">
          {" "}
          <div
            className="btn"
            onClick={() => {
              props.changeClass("App");
              setMenuIcon("menuIcon");
            }}
          >
            Home{" "}
          </div>
        </Link>
        <div className="btn">
          Category
          <BsFillCaretDownFill
            className="BsFillDown"
            onClick={() => {
              setShowCategory(!showCategory);
            }}
          />{" "}
          {showCategory && (
            <Category
              showMenu={(menuIcon) => setMenuIcon(menuIcon)}
              items={items}
              closeCategory={() => setShowCategory(false)}
            />
          )}
        </div>
        <div className="btn">
          Company
          <BsFillCaretDownFill
            className="BsFillDown"
            onClick={() => {
              setShowCompany(!showCompany);
            }}
          />{" "}
          {showCompany && (
            <Company
              showMenu={(menuIcon) => setMenuIcon(menuIcon)}
              items={items}
            />
          )}
        </div>
        <Link to="/about">
          <div
            onClick={() => {
              props.changeClass("App");
              setMenuIcon("menuIcon");
            }}
            className="btn"
          >
            About Us{" "}
          </div>
        </Link>

        <Link to="/contacts">
          <div
            onClick={() => {
              props.changeClass("App");
              setMenuIcon("menuIcon");
            }}
            className="btn"
          >
            Contacts
          </div>
        </Link>
      </section>
    </>
  );
};

export default Menu;
