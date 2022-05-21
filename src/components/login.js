import { useContext } from "react";
import { accountInfo, isLogged } from "../context";
const Login = () => {
  const personalInfo = useContext(accountInfo);
  const logged = useContext(isLogged);

  if (logged.logged) {
    return (
      <>
        <div className="loginContainer">
          logged in
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
          <label for="email">
            <b>Email</b>
          </label>
          <input
            type="text"
            placeholder="Enter Email"
            name="email"
            id="email"
            required
          />

          <label for="psw">
            <b>Password</b>
          </label>
          <input
            type="password"
            placeholder="Enter Password"
            name="psw"
            id="psw"
            required
          />

          <label for="adress">
            <b>ADRESS</b>
          </label>
          <input type="password" placeholder="adress" name="adress" required />
          <button
            onClick={() => {
              logged.setLogged(true);
            }}
            class="cartBuyBtn"
          >
            Register
          </button>
        </div>
      </form>
    </>
  );
};

export default Login;
