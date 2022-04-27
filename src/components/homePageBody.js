//BsArrowRight
import { BsArrowRight } from "react-icons/bs";

const HomePageBody = () => {
  const imgUrl1 =
    "https://dl.airtable.com/.attachmentThumbnails/1e4a818f5184993e430420a152315b40/873c7094?ts=1651055573&userId=usrQMwWEPx18KgLcP&cs=b17d245a2110110e";
  const imgUrl2 =
    "https://dl.airtable.com/.attachmentThumbnails/89ba7458c24252be77f5a835dd398880/c13ef359?ts=1651055573&userId=usrQMwWEPx18KgLcP&cs=27d5098576ec5938";
  const imgUrl3 =
    "https://dl.airtable.com/.attachmentThumbnails/e3fa7aa6dc112c4998da18bb401bd70f/61e2fb5e?ts=1651055573&userId=usrQMwWEPx18KgLcP&cs=8b1787f55cd7d1db";

  return (
    <div className="homePagebodyContainer">
      <section className="collectionAnnouncement">
        <p className="orangeColor">Massey Collection 2021</p>
        <h2>New Decoration For Your</h2>
        <h2>Living Spaces</h2>
        <p className="greyColor">
          Praesent faucibus, lorem ut sollicitudin dapibus,
        </p>
        <p className="greyColor">
          {" "}
          quam ligula pretium magna, eu congue ex quam ut neque.
        </p>
        <p className="dateAgenda">It'll be worth the wait very soon !</p>
        <h2>2022 - 07- 21 </h2>
      </section>
      <section className="img1Container">
        <img className="homePageImg" src={imgUrl1} />
        <h3>Deluxe Venezie Collection</h3>
        <p className="shopBtn">
          {" "}
          shop collection <BsArrowRight />{" "}
        </p>
      </section>
      <section className="img2Container">
        <img src={imgUrl2} className="homePageImg" />
        <h3>Great Design For Home and Decoration.</h3>
        <p className="shopBtn">
          {" "}
          shop collection <BsArrowRight />{" "}
        </p>
      </section>
      <section className="img3Container">
        <img src={imgUrl3} className="homePageImg" />
        <h3>Le’Bologna Collection</h3>
        <p className="shopBtn">
          {" "}
          shop collection <BsArrowRight />{" "}
        </p>
      </section>
    </div>
  );
};

export default HomePageBody;
