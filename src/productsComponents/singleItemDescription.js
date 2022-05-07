import Loading from "../components/loading";
import { useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
const ItemDesc = () => {
  const [showLoading, setShowLoading] = useState(true);
  const location = useLocation();
  const state = location.state;
  console.log(state);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowLoading(false);
    }, 900);
    return () => clearTimeout(timer);
  }, []);
  if (showLoading) {
    return <Loading />;
  }

  return (
    <div>
      ItemDesc
      <Link to="/items">back</Link>
    </div>
  );
};

export default ItemDesc;
