import Loading from "./components/loading";
import DisplayComponent from "./productsComponents/displayComponent";
import Title from "./title";
import Contacts from "./components/contacts";
import ItemDesc from "./productsComponents/singleItemDescription";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Menu from "./menu/menu";
import About from "./components/about";
import "./styles.css";
import Header from "./components/header";
import { BsSearch } from "react-icons/bs";
import { useState, useEffect } from "react";
import axios from "axios";
import HomePageBody from "./components/homePageBody";
import { moveAppContext } from "./context";
export default function App() {
  const [items, setItems] = useState([]);
  const [moveApp, setMoveApp] = useState("App");
  const [showLoading, setShowLoading] = useState(true);
  useEffect(() => {
    axios
      .get("https://course-api.com/react-store-products/")
      .then((products) => {
        setItems(products.data);
      });
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowLoading(false);
    }, 1000);
    return () => clearTimeout(timer);
  }, []);
  if (showLoading) {
    return <Loading />;
  }
  /*
      <Header />
      <Title />

      <Menu items={items} changeClass={(moveApp) => setMoveApp(moveApp)} />
    
      <SlideGallery />
      <Greet />
      <Brands />
      <HomePageBody items={items} />
            <DisplayComponent />
            <Loading/>
  
  */

  return (
    <div className={moveApp}>
      <Router>
        <Header />
        <Title />
        <moveAppContext.Provider value={{ moveApp, setMoveApp }}>
          <Menu items={items} changeClass={(moveApp) => setMoveApp(moveApp)} />
        </moveAppContext.Provider>

        <Routes>
          <Route path="/about" element={<About />} />
          <Route path="/items" element={<DisplayComponent />} />
          <Route path="/contacts" element={<Contacts />} />
          <Route path="/loading" element={<Loading />} />
          <Route path="/itemDesc" element={<ItemDesc />} />
          <Route
            exact
            path="/"
            element={<HomePageBody items={items} />}
          ></Route>
        </Routes>
      </Router>
    </div>
  );
}
