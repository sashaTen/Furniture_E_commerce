import { useContext } from "react";
import { BsFillCaretDownFill } from "react-icons/bs";
import { AiOutlineMenu } from "react-icons/ai";
import { useState } from "react";
import { Link } from "react-router-dom";
import Category from "./category";
import Company from "./company";
import { moveAppContext } from "../context";
const Menu = (props) => {
  const { setMoveApp, setAppDisplay } = useContext(moveAppContext);
  const items = props.items;
  const [showCategory, setShowCategory] = useState(false);
  const [showCompany, setShowCompany] = useState(false);
  const [menuIcon, setMenuIcon] = useState("menuIcon");
  return (
    <>
      <AiOutlineMenu
        className={menuIcon}
        onClick={() => {
          // props.changeClass("moveApp");
          setMoveApp("moveApp");
          setAppDisplay(true);
          setMenuIcon("invisible");
        }}
      />
      <section className="menuContainer">
        <div
          className="btnXmobileMenu"
          onClick={() => {
            props.changeClass("App");
            setMenuIcon("menuIcon");
            setAppDisplay(false);
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
              setAppDisplay(false);
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
              closeCategory={() => setShowCompany(false)}
            />
          )}
        </div>
        <Link to="/about">
          <div
            onClick={() => {
              setAppDisplay(false);
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
              setAppDisplay(false);
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
