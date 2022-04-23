import "./styles.css";
import {
  BsFillCaretDownFill,
  BsFillCartFill,
  BsFillPersonFill,
  BsSearch
} from "react-icons/bs";
import { AiOutlineMenu, AiFillSetting } from "react-icons/ai";
import { useState, useEffect } from "react";
import axios from "axios";
export default function App() {
  const [items, setItems] = useState([]);
  const [moveApp, setMoveApp] = useState("App");
  const imgUrl1 = `https://cgaxisimages.fra1.cdn.digitaloceanspaces.com/2018/07/cgaxis_models_106_14a.jpg`;
  const imgUrl2 = `https://shop.mohd.it/media/catalog/product/cache/11b1b7f5d04077d123613fe5bd9b4f06/l/o/lovy-sofa-bonaldo.jpg`;
  const imgUrl3 = `https://mir-s3-cdn-cf.behance.net/project_modules/fs/cbeffe68752533.5b686b9a7f5f2.jpg`;

  useEffect(() => {
    axios
      .get("https://course-api.com/react-store-products/")
      .then((products) => {
        setItems(products.data);
        console.log(products.data);
      });
  }, []);

  return (
    <div className={moveApp}>
      <div className="sidebar"></div>
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
      <h1 className="title">
        <span className="letterC">C</span>onosin
      </h1>
      <div className="crossLine"></div>
      <AiOutlineMenu
        className="menuIcon"
        onClick={() => {
          setMoveApp("moveApp");
        }}
      />
      <section className="menuContainer">
        <p
          className="btnXmobileMenu"
          onClick={() => {
            setMoveApp("App");
          }}
        >
          {" "}
          X{" "}
        </p>
        <p className="btn">
          Home <BsFillCaretDownFill />{" "}
        </p>
        <p className="btn">
          Collection <BsFillCaretDownFill />{" "}
        </p>
        <p className="btn">
          Category
          <BsFillCaretDownFill />{" "}
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
      <BsSearch className="searchIcon" />

      <img className="billBoard" src={imgUrl3} />
      <div className=""></div>

      <section className="galleryContainer">
        {items.map((item) => {
          return (
            <div key={item.id} className="galleryItemContainer">
              <h1 className="itemName">{item.name}</h1>
              <img className="galleryImage" src={item.image} />
            </div>
          );
        })}
      </section>
    </div>
  );
}
