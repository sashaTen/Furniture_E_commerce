import { useContext } from "react";
import { accountInfo, isLogged } from "../context";
const Login = () => {
  const personalInfo = useContext(accountInfo);
  const logged = useContext(isLogged);
  console.log(logged);

  if (logged.logged) {
    return (
      <>
        <div className="loginContainer">logged in</div>
      </>
    );
  }
  return (
    <>
      <div className="loginContainer">not logged in</div>
    </>
  );
};

export default Login;
