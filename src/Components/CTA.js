import React from "react";
import Image from "../Images/GPT-image-1.jpg";
import { ChatState } from "../ChatContext";
import { Link as RouterLink } from "react-router-dom";

function CTA() {
  const { theme } = ChatState();
  return (
    <>
      <section
        className={`py-12 ${
          theme === "dark" ? "bg-darkerBgColor" : "bg-white"
        }`}
      >
        <div className="page_container">
          <div className="flex flex-col items-center gap-8 justify-between  md:flex-row">
            <div className="w-full flex flex-col gap-4 items-center md:items-start md:w-1/2">
              {" "}
              <h1
                className={`${
                  theme === "dark" ? "text-white" : "text-darkerBgColor"
                } font-extrabold text-3xl text-center md:text-4xl md:leading-10 md:text-left `}
              >
                <span className="hidden md:block">
                  The Developers' <br /> Mind
                </span>
                <span className="block md:hidden">The Developers' Mind</span>
              </h1>
              <p
                className={`text-center text-lg ${
                  theme === "dark" ? "text-primaryText" : "text-bgColor"
                } md:text-left`}
              >
                Enhance your coding skills and elevate your problem-solving
                abilities with DevMind.
              </p>
              <RouterLink to="/signup">
                <button className="py-2 px-4 bg-textBlue rounded-lg text-white">
                  Get Started
                </button>
              </RouterLink>
            </div>

            <div className="w-full md:w-1/2">
              <img src={Image} alt="dev" className="w-full" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default CTA;
