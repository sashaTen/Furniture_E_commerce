import "./styles.css";
import { useState, useEffect } from "react";
import axios from "axios";
export default function App() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    axios
      .get("https://course-api.com/react-store-products/")
      .then((products) => {
        setItems(products.data);
        console.log(products.data);
      });
  }, []);

  return (
    <div className="App">
      {items.map((item) => {
        return <div>{item.name}</div>;
      })}
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
    </div>
  );
}
