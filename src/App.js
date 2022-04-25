import SlideGallery from "./slideGallery";
import Title from "./title";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Menu from "./menu";
import "./styles.css";
import Header from "./header";
import { BsSearch } from "react-icons/bs";
import { useState, useEffect } from "react";
import axios from "axios";
export default function App() {
  const [items, setItems] = useState([]);
  const [moveApp, setMoveApp] = useState("App");

  return (
    <div className={moveApp}>
      <Header />
      <Title />
      <Menu changeClass={(moveApp) => setMoveApp(moveApp)} />
      <BsSearch className="searchIcon" />
      <SlideGallery />
    </div>
  );
}
