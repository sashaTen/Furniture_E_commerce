import { BsFillCartFill } from "react-icons/bs";

const Loading = () => {
  return (
    <div className="loadingContainer">
      <BsFillCartFill className="loadingCart" />
      <section className="loadingMovingSquare"></section>
    </div>
  );
};

export default Loading;
