import Cart from "./components/cart"; //added  comments
import ScrollToTop from "./components/scrolltoTop"; //   auto  scroll to the top
import AfterPurchase from "./components/afterPurchasePage";
import Login from "./components/login"; // just a comment
import Loading from "./components/loading";
import DisplayComponent from "./productsComponents/displayComponent";
import Contacts from "./components/contacts";
import ItemDesc from "./productsComponents/singleItemDescription";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Menu from "./menu/menu";
import About from "./components/about";
import "./styles.css";
import Header from "./components/header";
import { useState, useEffect } from "react";
import axios from "axios";
import HomePageBody from "./components/homePageBody";
import { moveAppContext } from "./context";
import { cartContext } from "./context";
import { isLogged } from "./context";

export default function App() {
  const [appDisplay, setAppDisplay] = useState(false);
  const [logged, setLogged] = useState(false);
  const [items, setItems] = useState([]);
  const [moveApp, setMoveApp] = useState("App");
  const [showLoading, setShowLoading] = useState(true);
  const [itemsOfCart, setItemsOfCart] = useState([]);
  const word = "hello   context";
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

  if (appDisplay) {
    return (
      <div className={moveApp}>
        <Router>
          <ScrollToTop>
            <isLogged.Provider value={{ logged, setLogged, word }}>
              <cartContext.Provider value={{ itemsOfCart, setItemsOfCart }}>
                <Header />

                <moveAppContext.Provider
                  value={{ moveApp, setMoveApp, appDisplay, setAppDisplay }}
                >
                  <Menu
                    items={items}
                    changeClass={(moveApp) => setMoveApp(moveApp)}
                  />
                </moveAppContext.Provider>
              </cartContext.Provider>
            </isLogged.Provider>
          </ScrollToTop>
        </Router>
      </div>
    );
  }
  return (
    <div className={moveApp}>
      <Router>
        <ScrollToTop>
          <isLogged.Provider value={{ logged, setLogged }}>
            <cartContext.Provider value={{ itemsOfCart, setItemsOfCart }}>
              <Header />

              <moveAppContext.Provider
                value={{ moveApp, setMoveApp, appDisplay, setAppDisplay }}
              >
                <Menu
                  items={items}
                  changeClass={(moveApp) => setMoveApp(moveApp)}
                />
              </moveAppContext.Provider>
              <Routes>
                <Route path="/about" element={<About />} />
                <Route path="/login" element={<Login />} />
                <Route path="/items" element={<DisplayComponent />} />
                <Route path="/contacts" element={<Contacts />} />
                <Route path="/loading" element={<Loading />} />
                <Route path="/itemDesc" element={<ItemDesc />} />
                <Route path="/cart" element={<Cart />} />
                <Route path="/finish" element={<AfterPurchase />} />
                <Route
                  exact
                  path="/"
                  element={<HomePageBody items={items} />}
                ></Route>
              </Routes>
            </cartContext.Provider>
          </isLogged.Provider>

          <Contacts />
        </ScrollToTop>
      </Router>
    </div>
  );
}
