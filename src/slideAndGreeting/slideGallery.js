import { useState, useEffect } from "react";

const imgUrl1 = `https://cgaxisimages.fra1.cdn.digitaloceanspaces.com/2018/07/cgaxis_models_106_14a.jpg`;
const imgUrl2 = `https://htdeco.fr/2034-thickbox_default/baroque-white-and-silver-sofa.jpg`;
const imgUrl3 = `https://secure.img1-fg.wfcdn.com/im/83591330/compr-r85/1182/118254953/sonny-91-sofa-with-reversible-cushions.jpg`;

const SlideGallery = () => {
  useEffect(() => {
    const interval = setInterval(() => {
      billBoardIndex++;
      if (billBoardIndex > 2) {
        billBoardIndex = 0;
      }
      setMoveImage(moveLeft[billBoardIndex] + "%");

      // setMoveImage()
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  let billBoardIndex = 0;
  const moveLeft = [40, -40, -120];
  const [moveImage, setMoveImage] = useState(moveLeft[billBoardIndex] + "%");
  return (
    <>
      <section className="imgContainer" style={{ left: moveImage }}>
        <img className="billBoard" src={imgUrl1} />
        <img className="billBoard" src={imgUrl2} />
        <img className="billBoard" src={imgUrl3} />
      </section>
      <section className="imgContainerMobile">
        <img className="billBoardMobile" src={imgUrl1} />
        <img className="billBoardMobile" src={imgUrl2} />
        <img className="billBoardMobile" src={imgUrl3} />
      </section>
    </>
  );
};

export default SlideGallery;