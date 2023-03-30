import React from "react";
import Avatar from "../Images/Avatar.810fb15b46556c45c3e3.png";
import { ChatState } from "../ChatContext";

function Contact() {
  const { theme } = ChatState();
  return (
    <>
      <section className="py-12 bg-textBlue">
        <div className="page_container md:w-2/3">
          <div
            className={`flex flex-col items-center gap-5 px-3  ${
              theme === "dark" ? "bg-darkerBgColor" : "bg-white"
            } py-12 rounded-xl`}
          >
            <img src={Avatar} alt="avatar" />
            <h3
              className={`font-bold text-xl ${
                theme === "dark" ? "text-white" : "text-darkerBgColor"
              }`}
            >
              Have suggestions or feedback?
            </h3>
            <p
              className={` text-lg text-center ${
                theme === "dark" ? "text-primaryText" : "text-bgColor"
              }`}
            >
              We'd love to hear from you! We are always available to listen and
              help in any way we can.
            </p>

            <button className="py-2 px-4 bg-textBlue rounded-lg text-white">
              <a
                href="https://discord.com/channels/@1052115395001200742"
                target="_blank"
                rel="noreferrer"
              >
                Send us a Message
              </a>
            </button>
          </div>
        </div>
      </section>
    </>
  );
}

export default Contact;
