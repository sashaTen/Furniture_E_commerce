import Loading from "./components/loading";
import DisplayComponent from "./productsComponents/displayComponent";
import Title from "./title";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Routes
} from "react-router-dom";
import Menu from "./menu/menu";
import "./styles.css";
import Header from "./header";
import { BsSearch } from "react-icons/bs";
import { useState, useEffect } from "react";
import axios from "axios";
import HomePageBody from "./components/homePageBody";
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
    }, 1300);
    return () => clearTimeout(timer);
  }, []);
  if (showLoading) {
    return <Loading />;
  }
  /*
      <Header />
      <Title />

      <Menu items={items} changeClass={(moveApp) => setMoveApp(moveApp)} />
      <BsSearch className="searchIcon" />
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

        <Menu items={items} changeClass={(moveApp) => setMoveApp(moveApp)} />
        <BsSearch className="searchIcon" />
        <Routes>
          <Route path="/items" element={<DisplayComponent />} />
          <Route path="/loading" element={<Loading />} />
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
