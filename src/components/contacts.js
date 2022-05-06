import Loading from "../components/loading";
import { useState, useEffect } from "react";
const Contacts = () => {
  const [showLoading, setShowLoading] = useState(true);
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowLoading(false);
    }, 1300);
    return () => clearTimeout(timer);
  }, []);
  if (showLoading) {
    return <Loading />;
  }

  return <>contacts</>;
};

export default Contacts;
