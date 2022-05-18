import { Link } from "react-router-dom"; //BsFillStarFill
import { BsFillStarFill } from "react-icons/bs";
import { AiOutlineArrowRight } from "react-icons/ai";
const Greet = () => {
  return (
    <div className="greetContainer">
      <Link className="greetLinkToItems" to="/items">
        start shopping
      </Link>
    </div>
  );
};

export default Greet;
