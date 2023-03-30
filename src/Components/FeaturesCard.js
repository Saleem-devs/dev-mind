import React from "react";
import { ChatState } from "../ChatContext";

function FeaturesCard(props) {
  const { icon, title, description } = props;
  const { theme } = ChatState();
  return (
    <div
      className={`${
        theme === "dark" ? "bg-darkerBgColor" : "bg-white"
      } mt-8 relative rounded-md shadow-lg p-6 text-center md:text-left md:w-1/3`}
    >
      <div
        className={`${
          theme === "dark"
            ? "bg-white text-darkerBgColor"
            : "bg-darkerBgColor text-white"
        } text-4xl w-16 h-16 rounded-full flex items-center justify-center absolute -top-8 left-1/2 -translate-x-1/2 md:translate-x-0 md:left-6`}
      >
        {icon}
      </div>
      <h3
        className={`text-lg ${
          theme === "dark" ? "text-white" : "text-darkerBgColor"
        }  font-bold mt-8 mb-2`}
      >
        {title}
      </h3>
      <p
        className={`${theme === "dark" ? "text-primaryText" : "text-bgColor"}`}
      >
        {description}
      </p>
    </div>
  );
}

export default FeaturesCard;
