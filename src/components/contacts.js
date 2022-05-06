import Loading from "../components/loading";
import {
  RiKakaoTalkFill,
  RiMapPinFill,
  RiMailUnreadFill
} from "react-icons/ri";
import {
  BsTwitter,
  BsFacebook,
  BsTelegram,
  BsTelephoneFill
} from "react-icons/bs";

import { useState, useEffect } from "react";
const Contacts = () => {
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

  return (
    <div className="contactContainer">
      <section className="contactIconContainer">
        <BsTwitter />
        <p>read our twits on twitter</p>
      </section>
      <section className="contactIconContainer">
        <BsFacebook />
        <p>lets be friends on the Facebook</p>
      </section>
      <section className="contactIconContainer">
        <RiKakaoTalkFill />
        <p>chat with us on kakao</p>
      </section>
      <section className="contactIconContainer">
        <BsTelegram />
        <p>read our posts on Telegram</p>
      </section>
      <section className="contactIconContainer">
        <RiMapPinFill />
        <p>find us in real world</p>
        <img src="https://www.google.com/maps/d/thumbnail?mid=1vjK2b6e1DQ79H7hGdWl_Y_1BEMw&hl=en_US" />
      </section>
      <section className="contactIconContainer">
        <BsTelephoneFill />
        <p>call us time</p>
        <p>+8210-1111-2222</p>
      </section>
      <section className="contactIconContainer">
        <RiMailUnreadFill />
        <p>send us email and get quick response</p>
        <p> conosinChairSofa@gmail.com</p>
      </section>
    </div>
  );
};

export default Contacts;
