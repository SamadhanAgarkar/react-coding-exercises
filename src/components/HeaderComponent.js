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
      <div className="flex justify-between shadow-md fixed w-full mb-10 bg-white top-0">
        <div className="logo-container">
          <img className="w-20" src={LOGO_URL}></img>
        </div>
        <div className="">
          <ul className="flex item-center p-4 m-2">
            <li className="px-4">
              <Link to="/">Home</Link>
            </li>
            <li className="px-4">
              <Link to="/about">About</Link>
            </li>
            <li className="px-4 ">
              <Link to="/contact">Contact</Link>
            </li>
            <button
              onClick={userLoginLogout}
              className="px-2 py-1 bg-blue-500 ml-2 rounded-lg text-white"
            >
              {userLogin}
            </button>
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
