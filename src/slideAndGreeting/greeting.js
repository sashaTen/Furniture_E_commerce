import { Link } from "react-router-dom"; //BsFillStarFill
import { BsFillStarFill } from "react-icons/bs";
import { AiOutlineArrowRight } from "react-icons/ai";
const Greet = () => {
  return (
    <>
      <div className="greetContainer">
        <section className="greetMessage">
          exprience
          <h3 style={{ color: "lightblue" }}>fast</h3>
          and <h3 style={{ color: "red" }}>reliable</h3>
          <p>shopping</p>
        </section>

        <Link className="greetLinkToItems" to="/items">
          start shopping
        </Link>
      </div>
    </>
  );
};

export default Greet;
