import "./styles.css";
import { BsFillCaretDownFill, BsFillCartFill } from "react-icons/bs";
import { useState, useEffect } from "react";
import axios from "axios";
export default function App() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    axios
      .get("https://course-api.com/react-store-products/")
      .then((products) => {
        setItems(products.data);
      });
  }, []);

  return (
    <div className="App">
      <header className="header">
        <p className="latestNews">
          latest news : <span> get new year discount 20%</span>
        </p>

        <BsFillCaretDownFill />
        <BsFillCartFill />
        <p>Settings</p>
        <p>Account</p>
      </header>
    </div>
  );
}
