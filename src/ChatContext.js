import React from "react";
import { createContext, useContext, useState, useReducer } from "react";

const Chat = createContext();

const initial = {
  isAuthenticated: false,
  user: null,
  modalOpen: false,
  modalContent: "",
};

const reducer = (state, action) => {
  switch (action.type) {
    case "LOGIN":
      return {
        ...state,
        isAuthenticated: true,
        user: action.payload,
      };

    case "LOGOUT":
      return {
        ...state,
        isAuthenticated: false,
        user: null,
      };

    case "closeModal":
      return {
        ...state,
        modalOpen: false,
      };

    case "openModal":
      return {
        ...state,
        modalOpen: true,
        modalContent: action.payload,
      };

    default:
      return state;
  }
};

function ChatContext({ children }) {
  const [state, dispatch] = useReducer(reducer, initial);
  const [theme, setTheme] = useState("dark");
  function toggleTheme() {
    setTheme(theme === "dark" ? "light" : "dark");
  }
  return (
    <Chat.Provider value={{ theme, toggleTheme, state, dispatch }}>
      {children}
    </Chat.Provider>
  );
}

export default ChatContext;

export const ChatState = () => {
  return useContext(Chat);
};
