import Loading from "../components/loading";
import { useState, useEffect } from "react";
const ItemDesc = () => {
  const [showLoading, setShowLoading] = useState(true);
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowLoading(false);
    }, 900);
    return () => clearTimeout(timer);
  }, []);
  if (showLoading) {
    return <Loading />;
  }
  return <div>ItemDesc</div>;
};

export default ItemDesc;
