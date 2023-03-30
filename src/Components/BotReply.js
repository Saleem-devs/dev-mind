import React from "react";
import SmallLogo from "../Images/small_logo.png";
import Typewriter from "typewriter-effect";
import { ChatState } from "../ChatContext";

function BotReply({ replyMessage }) {
  const { theme } = ChatState();
  return (
    <div
      className={`flex items-start gap-3 px-[5%] py-6 md:px-[15%] ${
        theme === "dark" ? "bg-lightBgColor" : "bg-whitishGray"
      }`}
    >
      <div className="h-[30px] w-[30px]">
        <img src={SmallLogo} alt="DevMind" className="h-full w-full " />
      </div>
      <div
        className={
          replyMessage === ("Something went wrong!" || "Error")
            ? "text-red-500 w-[70%]"
            : "whitespace-pre-wrap w-[70%]"
        }
      >
        {replyMessage ? (
          <Typewriter
            onInit={(typewriter) => {
              typewriter.typeString(replyMessage).changeDelay(1).start();
            }}
            options={{
              delay: 25,
            }}
          />
        ) : (
          <span className="flex items-end">
            DevMind is thinking{" "}
            <Typewriter
              onInit={(typewriter) => {
                typewriter.typeString("...").deleteAll().changeDelay(1).start();
              }}
              options={{
                delay: 100,
                loop: true,
              }}
            />
          </span>
        )}
      </div>
    </div>
  );
}

export default BotReply;
