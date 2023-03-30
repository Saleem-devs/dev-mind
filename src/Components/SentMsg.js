import React from "react";
import { ChatState } from "../ChatContext";

function SentMsg({ sentMsg }) {
  const { state } = ChatState();
  return (
    <div className="flex items-start gap-3 px-[5%] py-6 md:px-[15%]">
      <img
        src={
          state.user?.photoURL
            ? state.user.photoURL
            : "https://cdn-icons-png.flaticon.com/512/149/149071.png"
        }
        className="border-2 border-white h-[30px] w-[30px] self-start rounded-full"
        alt=""
      />
      <div className="whitespace-pre-wrap">{sentMsg}</div>
    </div>
  );
}

export default SentMsg;
