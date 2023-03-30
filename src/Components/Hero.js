import React from "react";
import { ChatState } from "../ChatContext";
import HeroImage from "../Images/Capture.JPG";
import { Link as RouterLink } from "react-router-dom";
import { Link as ScrollLink } from "react-scroll";

function Hero() {
  const { theme } = ChatState();
  return (
    <>
      <main
        className={`py-12 ${
          theme === "dark"
            ? "bg-darkerBgColor text-white"
            : "bg-white text-darkerBgColor"
        }`}
      >
        <div className="page_container">
          <div className="flex flex-col items-center gap-8 md:flex-row">
            <div className="flex flex-col items-center gap-5 w-full md:items-start md:w-1/2">
              <h1 className="font-extrabold text-3xl text-center md:text-4xl md:leading-10 md:text-left">
                The Revolutionary AI-Powered Chatbot That Helps You{" "}
                <span className="text-textBlue">
                  Master Programming Skills and Solves Coding Challenges.
                </span>
              </h1>
              <p
                className={`text-lg text-center ${
                  theme === "dark" ? "text-primaryText" : "text-bgColor"
                } lg:text-left`}
              >
                The AI-powered chatbot that simplifies coding challenges and
                helps you master programming skills regardless of your
                experience level.
              </p>
              <div className="flex items-center gap-3">
                <RouterLink to="/signup">
                  <button className="py-2 px-4 bg-textBlue rounded-lg text-white">
                    Get Started
                  </button>
                </RouterLink>
                <ScrollLink to="features" smooth={true}>
                  <button
                    className={`py-2 px-4 ${
                      theme === "dark" ? "bg-primaryText" : "bg-bgColor"
                    } rounded-lg text-white`}
                  >
                    Learn More
                  </button>
                </ScrollLink>
              </div>
            </div>
            <div className="w-full md:w-1/2">
              <img src={HeroImage} alt="hero" className="w-full" />
            </div>
          </div>
        </div>
      </main>
    </>
  );
}

export default Hero;

// "Unlock Your Coding Potential with DevMind - The Revolutionary AI-Powered Chatbot That Helps You Master Programming Skills and Solves Coding Challenges.";

// "Revolutionize your coding journey with DevMind - the AI-powered chatbot that simplifies coding challenges and helps you master programming skills regardless of your experience level.";
