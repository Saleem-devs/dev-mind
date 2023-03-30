import React from "react";
import Header from "../Components/Header";
import ChatContainer from "../Components/ChatContainer";

import { ChatState } from "../ChatContext";
import { useNavigate } from "react-router-dom";

function Chat() {
  const { state } = ChatState();

  const navigate = useNavigate();

  React.useEffect(() => {
    if (!state.isAuthenticated) {
      navigate("/login");
    }
  }, [state.isAuthenticated, navigate]);

  return (
    <>
      <main className="h-screen">
        <Header />

        <ChatContainer />
      </main>
    </>
  );
}

export default Chat;
