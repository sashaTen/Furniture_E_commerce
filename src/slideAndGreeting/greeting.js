import { Link } from "react-router-dom"; //BsFillStarFill
import { useSelector } from 'react-redux';
const Greet = () => {
  const loginState= useSelector((state) => state.loginREDUCER);

  /*
  greetExpirience
  greetFast
  .greetReliable
  .greetAnd
  .greetShopping
  className =  ""
  */
  return (
    <>
      <div className="greetContainer">
        <section className="greetMessage">
          <span className="greetExpirience">exprience {loginState.value}  </span>
        <h1>{loginState.value}</h1>
          <h3 className="  greetFast">fast</h3>
          <span className="greetAnd">and</span>

          <h3 className="greetReliable">reliable</h3>
          <p className="greetShopping">shopping</p>
        </section>

        <Link className="greetLinkToItems" to="/items">
          start shopping
        </Link>
      </div>
    </>
  );
};

export default Greet;
