import SlideGallery from "./slideGallery";
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

      <h1 className="title">
        <span className="letterC">C</span>onosin
      </h1>
      <div className="crossLine"></div>

      <Menu changeClass={(moveApp) => setMoveApp(moveApp)} />

      <BsSearch className="searchIcon" />
      <SlideGallery />
    </div>
  );
}
