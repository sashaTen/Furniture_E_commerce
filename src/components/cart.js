import Loading from "./loading";
import { useState, useEffect } from "react";

const Cart = () => {
  const [showLoading, setShowLoading] = useState(true);
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowLoading(false);
    }, 1000);
    return () => clearTimeout(timer);
  }, []);
  if (showLoading) {
    return <Loading />;
  }
  return <>this is the cart component</>;
};

export default Cart;
