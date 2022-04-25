import SlideGallery from "./slideAndGreeting/slideGallery";
import Title from "./title";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Menu from "./menu/menu";
import "./styles.css";
import Header from "./header";
import { BsSearch } from "react-icons/bs";
import { useState, useEffect } from "react";
import axios from "axios";
export default function App() {
  const [items, setItems] = useState([]);
  const [moveApp, setMoveApp] = useState("App");
  useEffect(() => {
    axios
      .get("https://course-api.com/react-store-products/")
      .then((products) => {
        setItems(products.data);
      });
  }, []);

  return (
    <div className={moveApp}>
      <Header />
      <Title />
      <Menu items={items} changeClass={(moveApp) => setMoveApp(moveApp)} />
      <BsSearch className="searchIcon" />
      <SlideGallery />
    </div>
  );
}
