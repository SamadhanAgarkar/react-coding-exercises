import { useState } from "react";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";

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
            <li className="nav-item">
              <Link to="/">Home</Link>
            </li>
            <li className="nav-item">
              <Link to="/about">About</Link>
            </li>
            <li className="nav-item">
              <Link to="/contact">Contact</Link>
            </li>
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
