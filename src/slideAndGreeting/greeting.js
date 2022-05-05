import { Link } from "react-router-dom"; //BsFillStarFill
import { BsFillStarFill } from "react-icons/bs";
import { AiOutlineArrowRight } from "react-icons/ai";
const Greet = () => {
  return (
    <div className="greetContainer">
      <h1 className="trustStyle">TRUST YOUR STYLE TO CONOSIN</h1>

      <img
        className="newSeason"
        src="https://k4j3j2s7.rocketcdn.me/furnob/wp-content/uploads/2022/01/season-text.png"
      />
      <Link to="/items">
        <button className="GreetBtn">
          Shop Colletion <AiOutlineArrowRight />
        </button>
      </Link>
    </div>
  );
};

export default Greet;
