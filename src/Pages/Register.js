import React from "react";
import Footer from "../Components/Footer";
import Form from "../Components/Form";
import Header from "../Components/Header";
import { ChatState } from "../ChatContext";

function Register() {
  const { theme } = ChatState();
  return (
    <>
      <Header />
      <main
        className={` min-h-screen flex items-center justify-center ${
          theme === "dark" ? "bg-darkerBgColor" : "bg-white"
        }`}
      >
        <div className="page_container flex items-center justify-center">
          <Form register />
        </div>
      </main>
      <Footer />
    </>
  );
}

export default Register;
