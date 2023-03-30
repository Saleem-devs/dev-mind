import React from "react";
import { useState } from "react";
import { ChatState } from "../ChatContext";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faGoogle } from "@fortawesome/free-brands-svg-icons";
import { auth, googleProvider } from "../Config/firebase";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signInWithPopup,
} from "firebase/auth";
import { useNavigate } from "react-router-dom";

function Form({ register }) {
  const { theme, state, dispatch } = ChatState();
  const [signInEmail, setSignInEmail] = useState("");
  const [signInPasword, setSignInPassword] = useState("");
  const [signUpEmail, setSignUpEmail] = useState("");
  const [signUpPassword, setSignUpPassword] = useState("");
  const [signUpErr, setSignUpErr] = useState("");
  const [signInErr, setSignInErr] = useState("");
  const [googleSignInErr, setGoogleSignInErr] = useState("");

  const navigate = useNavigate();

  const signIn = async (e) => {
    e.preventDefault();
    try {
      await signInWithEmailAndPassword(auth, signInEmail, signInPasword);
      navigate("/chat");
      // The signed-in user info.
      const user = auth?.currentUser;
      dispatch({ type: "LOGIN", payload: user });
      dispatch({
        type: "openModal",
        payload: `Authenticated as ${user.email}`,
      });
      console.log(user);
    } catch (error) {
      console.error(error);
      setSignInErr(error.message);
    }
  };
  const signInWithGoogle = async (e) => {
    e.preventDefault();
    try {
      await signInWithPopup(auth, googleProvider);
      navigate("/chat");
      // The signed-in user info.
      const user = auth?.currentUser;
      dispatch({ type: "LOGIN", payload: user });
      dispatch({
        type: "openModal",
        payload: `Authenticated as ${user.email}`,
      });
      console.log(user);
    } catch (error) {
      console.error(error);
      setGoogleSignInErr(error.message);
    }
  };
  const signUp = async (e) => {
    e.preventDefault();
    try {
      await createUserWithEmailAndPassword(auth, signUpEmail, signUpPassword);
      navigate("/chat");
    } catch (error) {
      console.error(error.message);
      setSignUpErr(error.message);
    }
  };

  return (
    <>
      <form
        className={`${
          theme === "dark"
            ? "text-darkerBgColor bg-white"
            : "text-white bg-darkerBgColor"
        } w-full border border-solid py-7 px-4 md:max-w-lg`}
      >
        <div className="text-center w-full mb-3">
          {signUpErr && <p className="text-red-500 text-lg ">{signUpErr}</p>}
          {signInErr && <p className="text-red-500 text-lg ">{signInErr}</p>}
          {googleSignInErr && (
            <p className="text-red-500 text-lg ">{googleSignInErr}</p>
          )}
        </div>

        <h1 className={`font-extrabold text-2xl mb-8`}>
          {register ? "Sign Up" : "Log In"}
        </h1>
        <label htmlFor="email" className="block mb-2">
          Email
        </label>
        <input
          type="email"
          className={`py-2 px-4 mb-4 rounded-md outline-none w-full ${
            theme === "dark"
              ? "bg-darkerBgColor text-white"
              : "bg-white text-darkerBgColor"
          }`}
          onChange={
            register
              ? (e) => setSignUpEmail(e.target.value)
              : (e) => setSignInEmail(e.target.value)
          }
        />

        <label htmlFor="email" className="block mb-2">
          Password
        </label>
        <input
          type="password"
          className={`py-2 px-4 rounded-md outline-none w-full ${
            theme === "dark"
              ? "bg-darkerBgColor text-white"
              : "bg-white text-darkerBgColor"
          }`}
          onChange={
            register
              ? (e) => setSignUpPassword(e.target.value)
              : (e) => setSignInPassword(e.target.value)
          }
        />
        <button
          type="submit"
          className="bg-textBlue mt-3 text-white rounded-md w-full py-2 px-4"
          onClick={register ? signUp : signIn}
        >
          {register ? "Sign Up" : "Log In"}
        </button>

        <div className="my-5 w-full flex items-center">
          <hr
            className={`w-full h-0.5 ${
              theme === "dark" ? "bg-darkerBgColor" : "bg-white"
            }`}
          />
          <span
            className={`p-1 border border-solid ${
              theme === "dark" ? "border-darkerBgColor" : "border-white"
            }`}
          >
            OR
          </span>
          <hr
            className={`w-full h-0.5 ${
              theme === "dark" ? "bg-darkerBgColor" : "bg-white"
            }`}
          />
        </div>

        <button
          className="flex items-center justify-center gap-2 bg-textBlue mt-3 text-white rounded-md w-full py-2 px-4"
          onClick={signInWithGoogle}
        >
          <FontAwesomeIcon icon={faGoogle} className=" text-darkerBgColor" />
          <span className="text-center">Sign in with Google</span>
        </button>
        <button className="flex items-center justify-center gap-2 bg-textBlue mt-2 text-white rounded-md w-full py-2 px-4">
          <FontAwesomeIcon icon={faGithub} className=" text-darkerBgColor" />
          <span>Sign in with GitHub</span>
        </button>

        <p className="text-lg text-center mt-5">
          {register ? (
            <span>
              Already have an account?{" "}
              <Link className="text-textBlue" to="/login">
                Sign in
              </Link>
            </span>
          ) : (
            <span>
              Don't have an account?{" "}
              <Link className="text-textBlue" to="/signup">
                Register{" "}
              </Link>
            </span>
          )}
        </p>
      </form>
    </>
  );
}

export default Form;
