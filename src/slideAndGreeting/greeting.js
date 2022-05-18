import { Link } from "react-router-dom"; //BsFillStarFill
import { BsFillStarFill } from "react-icons/bs";
import { AiOutlineArrowRight } from "react-icons/ai";
const Greet = () => {
  return (
    <div className="greetContainer">
      <Link to="/items">shop here</Link>
    </div>
  );
};

export default Greet;
