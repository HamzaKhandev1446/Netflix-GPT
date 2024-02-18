import React, { useState, useRef } from "react";
import { validateForm } from "../utils/validateForm";

const Authentication = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);
  const [errorMessage, setErrorMessage] = useState({
    email: null,
    password: null,
    fullName: null,
  });
  const email = useRef(null);
  const password = useRef(null);
  const fullName = useRef("");

  const signUpHandler = () => {
    if(!isSignInForm){
      fullName.current.value = "";
    }
    setIsSignInForm(!isSignInForm);
  };

  const submitForm = () => {
    setErrorMessage(
      validateForm(
        email?.current?.value,
        password?.current?.value,
        fullName?.current?.value
      )
    );

    if (errorMessage.email || errorMessage.password || errorMessage.fullName) {
      console.log("Error: ", errorMessage);
      return;
    } else {
      console.log("Valid Form: ", errorMessage);
      console.log("Email: ", email?.current?.value);
      console.log("Password: ", password?.current?.value);
      console.log("Full Name: ", fullName?.current?.value);
    }
  };

  return (
    <div className="w-full flex justify-center items-center">
      <div className="w-3/12 signin-form-container my-4 mx-3 bg-black bg-opacity-80">
        <div className="mx-16 my-16 text-white">
          <h1 className="text-3xl my-5">
            {isSignInForm ? "Sign In" : "Sign Up"}
          </h1>
          <form
            onSubmit={(e) => {
              e.preventDefault();
            }}
            className="flex flex-col justify-center items-center text-black"
          >
            {!isSignInForm && (
              <input
                ref={fullName}
                type="text"
                placeholder="Full Name"
                className="p-3 m-4 w-full rounded-sm"
              />
            )}

            <input
              ref={email}
              type="text"
              placeholder="Email Address"
              className="p-3 m-4 w-full rounded-sm"
            />
            <p className="text-red-700 font-bold mr-auto">
              {errorMessage?.email}
            </p>
            <input
              ref={password}
              type="password"
              placeholder="Password"
              className="p-3 m-4 w-full rounded-sm"
            />
            <p className="text-red-700 font-bold mr-auto">
              {errorMessage?.password}
            </p>
            <button
              className="w-full py-3 m-4 bg-red-600 text-white rounded-sm"
              onClick={submitForm}
            >
              {isSignInForm ? "Sign In" : "Sign Up"}
            </button>
            <p className="text-gray-600 text-md text-left mr-auto my-4">
              {!isSignInForm ? "Already register?" : "New to Netflix?"}

              <span
                className="text-white ml-2 cursor-pointer"
                onClick={signUpHandler}
              >
                {!isSignInForm ? "Sign In" : "Sign Up"}
              </span>
            </p>
            <p className="text-gray-600 text-sm text-left my-4">
              This page is protected by Google reCAPTCHA to ensure you're not a
              bot.<span> Learn more.</span>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Authentication;
