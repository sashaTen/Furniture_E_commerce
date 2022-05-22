import { useContext } from "react";
import { isLogged } from "../context";
import { Link } from "react-router-dom";
const Login = () => {
  const logged = useContext(isLogged);

  if (logged.logged) {
    return (
      <>
        <div className="loginContainer">
          now you can buy items in
          <Link to="/cart">
            <p>cart</p>
          </Link>
          <button
            className="cartBuyBtn"
            onClick={() => {
              logged.setLogged(false);
            }}
          >
            log out
          </button>
        </div>
      </>
    );
  }
  return (
    <>
      <form>
        <h3>Register</h3>
        <p>Please fill in this form to create an account.</p>
        <div className="loginContainer">
          <label htmlFor="email">
            <b>Email</b>
          </label>
          <input
            type="text"
            placeholder="Enter Email"
            name="email"
            id="email"
            required
          />

          <label htmlFor="psw">
            <b>Password</b>
          </label>
          <input
            type="password"
            placeholder="Enter Password"
            name="psw"
            id="psw"
            required
          />

          <label htmlFor="adress">
            <b>ADRESS</b>
          </label>
          <input type="password" placeholder="adress" name="adress" required />
          <button
            onClick={() => {
              logged.setLogged(true);
            }}
            className="cartBuyBtn"
          >
            Register
          </button>
        </div>
      </form>
    </>
  );
};

export default Login;
