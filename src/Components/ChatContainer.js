import React from "react";
import { useState } from "react";
import { ChatState } from "../ChatContext";
import BotReply from "./BotReply";
import SentMsg from "./SentMsg";
import ChatForm from "./ChatForm";

function ChatContainer() {
  const { theme } = ChatState();
  const [message, setMessage] = useState("");
  const [conversation, setConversation] = useState([]);
  const [loading, setLoading] = useState(true);

  function chatSettings(e) {
    e.preventDefault();

    const newConversation = [...conversation, { sent: message }];
    setLoading(true);
    setConversation(newConversation);
    switch (message.toLowerCase()) {
      case "hello":
        setLoading(false);
        const anotherConvo = [
          ...newConversation,
          { reply: "Hi, how may I help you ?" },
        ];
        setConversation(anotherConvo);
        break;
      case "hi":
        setLoading(false);
        const newConvo = [
          ...newConversation,
          { reply: "Hello, need my help ?" },
        ];
        setConversation(newConvo);
        break;
      case "who are you":
        setLoading(false);
        const newConvo2 = [
          ...newConversation,
          {
            reply:
              "I am DevMind - a chatbot programmed by Saleem A. Abdulsalam",
          },
        ];
        setConversation(newConvo2);
        break;
      case "who are you?":
        setLoading(false);
        const newConvo3 = [
          ...newConversation,
          {
            reply:
              "I am DevMind - a chatbot programmed by Saleem A. Abdulsalam",
          },
        ];
        setConversation(newConvo3);
        break;
      case "what can you do":
        setLoading(false);
        const newConvo4 = [
          ...newConversation,
          {
            reply:
              "I can interact and give accurate responses to your queries and provide solutions to any programming/coding challenge.",
          },
        ];
        setConversation(newConvo4);
        break;
      case "what can you do?":
        setLoading(false);
        const newConvo5 = [
          ...newConversation,
          {
            reply:
              "I can interact and give accurate responses to your queries and provide solutions to any programming/coding challenge.",
          },
        ];
        setConversation(newConvo5);
        break;
      case "what are you?":
        setLoading(false);
        const newConvo6 = [
          ...newConversation,
          {
            reply: "A chatbot that solves programming/coding tasks.",
          },
        ];
        setConversation(newConvo6);
        break;
      case "what are you":
        setLoading(false);
        const newConvo7 = [
          ...newConversation,
          {
            reply: "A chatbot that solves programming/coding tasks.",
          },
        ];
        setConversation(newConvo7);
        break;
      case "who made you?":
        setLoading(false);
        const newConvo8 = [
          ...newConversation,
          {
            reply:
              "This chatbot was programmed by Saleem A. Abdulsalam - A Frontend Developer",
          },
        ];
        setConversation(newConvo8);
        break;
      case "who made you":
        setLoading(false);
        const newConvo9 = [
          ...newConversation,
          {
            reply:
              "This chatbot was programmed by Saleem A. Abdulsalam - A Frontend Developer",
          },
        ];
        setConversation(newConvo9);
        break;
      case "what does devmind mean":
        setLoading(false);
        const newConvo10 = [
          ...newConversation,
          {
            reply:
              "Only Saleem knows but I presume it means a mind of a Developer. - which is or was the purpose of this bot",
          },
        ];
        setConversation(newConvo10);
        break;
      case "what does devmind mean?":
        setLoading(false);
        const newConvo11 = [
          ...newConversation,
          {
            reply:
              "Only Saleem knows but I presume it means a mind of a Developer. - which is or was the purpose of this bot",
          },
        ];
        setConversation(newConvo11);
        break;
      default:
        fetch("http://localhost:5000", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            prompt: message,
          }),
        })
          .then((response) => response.json())
          .then((data) => {
            setLoading(false);
            console.log(data);
            const anotherConvo = [
              ...newConversation,
              { reply: data.bot ? data.bot : data.error.name },
            ];
            setConversation(anotherConvo);
          })
          .catch((error) => {
            setLoading(false);
            setConversation([
              ...newConversation,
              { reply: "Something went wrong!" },
            ]);
          });
    }
    setMessage("");
  }

  return (
    <>
      <div
        className={`h-full pt-8  ${
          theme === "dark"
            ? "bg-bgColor text-white"
            : "bg-whiteShade text-black"
        }`}
      >
        <div className=" convo h-3/4 overflow-y-scroll scroll-smooth">
          {conversation.map((chat, index) => (
            <div key={index}>
              {chat.sent && (
                <SentMsg key={new Date().getTime()} sentMsg={chat.sent} />
              )}
              {index >= conversation.length - 1 &&
                loading &&
                chat.sent &&
                !chat.reply && <BotReply replyMessage="" />}
              {chat.reply && <BotReply replyMessage={chat.reply} />}
            </div>
          ))}
        </div>
      </div>
      <ChatForm
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        onSubmit={chatSettings}
      />
    </>
  );
}

export default ChatContainer;
