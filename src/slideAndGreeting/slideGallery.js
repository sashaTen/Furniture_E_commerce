const imgUrl1 = "https://wallpaperaccess.com/full/2076086.jpg";
const imgUrl2 = "https://wallpaperaccess.com/full/2076099.jpg";
const imgUrl3 =
  "https://img5.goodfon.com/wallpaper/nbig/0/89/stil-interer-mebel-divan-gostinaia-style-interior-furniture.jpg";
const imgUrl4 =
  "https://ksassets.timeincuk.net/wp/uploads/sites/56/2019/06/Off-White-Panel-Wallpaper-Wallsauce.jpg";
const SlideGallery = () => {
  return (
    <>
      <div className="slideGallery">
        <img className="slideGalleryImg" src={imgUrl1} />
        <img className="slideGalleryImg" src={imgUrl2} />
        <img className="slideGalleryImg" src={imgUrl3} />
        <img className="slideGalleryImg" src={imgUrl4} />
      </div>
      <section className="blackCoverForSlides"></section>
    </>
  );
};

export default SlideGallery;
