import { useContext } from "react";
import { accountInfo } from "../context";
const Login = () => {
  const personalInfo = useContext(accountInfo);

  return (
    <>
      <div className="loginContainer">login page g</div>
    </>
  );
};

export default Login;
