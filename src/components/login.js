import { useContext } from "react";
import   {useState}  from   "react"
import { Link } from "react-router-dom";
import { isLogged } from "../context";
import     {useDispatch }   from     "react-redux"  
import { consoleLOG  ,  logIN ,  logOUT} from "../reduxSlices/slice";
const Login = () => {
  const   [name ,   setname]=useState('dddd')
  function   changeName(e){
     setname(e.target.value)
     dispatch(logIN(name))
  }
  const logged = useContext(isLogged);
  const   dispatch   =   useDispatch()
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
       
          </label>
          <input
            type="text"
            placeholder="Enter Email"
            name="email"
            id="email"
            required
          />

          <label htmlFor="psw">
      
          </label>
          <input
            type="password"
            placeholder="Enter Password"
            name="psw"
            id="psw"
            required
          />

          <label htmlFor="adress">
       
          </label>
          <input placeholder="name" value={name}   onChange={changeName} name="adress" required />
          <button
            onClick={() => {
              //logged.setLogged(true);
              dispatch(logIN())
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
