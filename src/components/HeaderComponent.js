import { useState } from "react";
import { LOGO_URL } from "../utils/constants";

const HeaderComponent = () => {
  const [userLogin, setUserLogin] = useState("Login");

  const userLoginLogout = () => {
    userLogin === "Login" ? setUserLogin("LogOut") : setUserLogin("Login");
  };

  return (
    <div>
      <div className="header">
        <div className="logo-container">
          <img className="logo" src={LOGO_URL}></img>
        </div>
        <div className="d-flex">
          <ul className="navbar-nav">
            <li className="nav-item">Home</li>
            <li className="nav-item">About</li>
            <li className="nav-item">Contact</li>
            <button onClick={userLoginLogout}>{userLogin}</button>
            {/* <button
              onClick={() => {
                userLogin === "Login"
                  ? setUserLogin("LogOut")
                  : setUserLogin("Login");
              }}
            >
              {{ userLogin }}
            </button> */}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default HeaderComponent;
