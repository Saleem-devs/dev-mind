import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaperPlane } from "@fortawesome/free-solid-svg-icons";
import { ChatState } from "../ChatContext";

function ChatForm({ value, onChange, onSubmit }) {
  const { theme } = ChatState();

  function handleKeyDown(event) {
    // Set the height of the textarea based on its content
    event.target.style.height = "auto";
    event.target.style.height = `${event.target.scrollHeight}px`;
  }

  return (
    <form
      className="fixed bottom-6 left-1/2 -translate-x-1/2 w-11/12 mx-auto flex items-end gap-3 md:w-3/5"
      onSubmit={onSubmit}
    >
      <textarea
        name="prompt"
        className={`p-2 h-9  shadow-md text-sm rounded-md ${
          theme === "dark"
            ? "bg-darkerBgColor placeholder-white text-white"
            : "bg-white placeholder-black text-black"
        }`}
        style={{
          resize: "none",
          overflow: "hidden",
          maxHeight: "160px",
          outline: "none",
          flex: 1,
        }}
        rows={1}
        value={value}
        onChange={onChange}
        onKeyDown={handleKeyDown}
        placeholder="Ask DevMind..."
      />
      <div
        className={`w-9 h-9 flex justify-center items-center rounded-md bg-darkerBgColor ${
          theme === "dark" ? "bg-darkerBgColor" : "bg-white "
        }`}
      >
        <button type="submit">
          <FontAwesomeIcon icon={faPaperPlane} className="text-textBlue" />
        </button>
      </div>
    </form>
  );
}

export default ChatForm;
