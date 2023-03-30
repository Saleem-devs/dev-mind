import React from "react";
import { ChatState } from "../ChatContext";
import LightLogo from "../Images/Light_logo.png";
import DarkLogo from "../Images/dark_logo.png";
import { Link } from "react-router-dom";

function Footer() {
  const { theme } = ChatState();
  return (
    <>
      <section
        className={`py-12 ${
          theme === "dark"
            ? "bg-darkerBgColor text-white"
            : "bg-white text-darkerBgColor"
        } `}
      >
        <div className="page_container">
          <div className="flex flex-col items-center justify-between gap-5 md:flex-row">
            <div className="w-32 cursor-pointer md:w-40">
              <Link to="/">
                <img
                  src={theme === "dark" ? LightLogo : DarkLogo}
                  alt="logo"
                  className="w-full"
                />
              </Link>
            </div>
            <p className="text-lg">© 2023 CodeByte. All rights reserved.</p>
          </div>
        </div>
      </section>
    </>
  );
}

export default Footer;
