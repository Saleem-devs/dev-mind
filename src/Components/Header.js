import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSun, faMoon } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import { ChatState } from "../ChatContext";
import LightLogo from "../Images/Light_logo.png";
import DarkLogo from "../Images/dark_logo.png";

function Header() {
  const { theme, toggleTheme, state } = ChatState();

  return (
    <header
      className={`py-4  ${
        theme === "dark"
          ? "text-white bg-darkerBgColor"
          : "text-darkerBgColor bg-white shadow-sm"
      }`}
    >
      <nav className="page_container flex items-center justify-between">
        <div className="w-32 cursor-pointer md:w-40">
          <Link to="/">
            <img
              src={theme === "dark" ? LightLogo : DarkLogo}
              alt="logo"
              className="w-full"
            />
          </Link>
        </div>
        <div className="flex items-center gap-4">
          <FontAwesomeIcon
            icon={theme === "dark" ? faSun : faMoon}
            className="cursor-pointer"
            onClick={toggleTheme}
          />
          <span>
            {!state.isAuthenticated ? (
              <Link to="/login">
                <button className="py-2 px-5 bg-textBlue rounded-lg cursor-pointer text-white">
                  Login
                </button>
              </Link>
            ) : (
              <Link to="/chat">
                <img
                  src={
                    state.user.photoURL
                      ? state.user.photoURL
                      : "https://cdn-icons-png.flaticon.com/512/149/149071.png"
                  }
                  className="h-[30px] w-[30px] rounded-full"
                  alt=""
                />
              </Link>
            )}
          </span>
        </div>
      </nav>
    </header>
  );
}

export default Header;
