const Brands = () => {
  const imgUrls = [
    "https://k4j3j2s7.rocketcdn.me/furnob/wp-content/uploads/2021/12/logo-1.png",
    "https://k4j3j2s7.rocketcdn.me/furnob/wp-content/uploads/2021/12/logo-8.png",
    "https://k4j3j2s7.rocketcdn.me/furnob/wp-content/uploads/2021/12/logo-7.png",
    "https://k4j3j2s7.rocketcdn.me/furnob/wp-content/uploads/2021/12/logo-5.png",
    "https://k4j3j2s7.rocketcdn.me/furnob/wp-content/uploads/2021/12/logo-2.png",
    "https://k4j3j2s7.rocketcdn.me/furnob/wp-content/uploads/2021/12/logo-2.png "
  ];

  return (
    <div className="brandContainer">
      {imgUrls.map((item) => {
        return (
          <div>
            <img className="brandImg" src={item} />
          </div>
        );
      })}
    </div>
  );
};

export default Brands;
