import React, { useState } from "react";

const Authentication = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);

  const signUpHandler = () => {
    setIsSignInForm(!isSignInForm);
  };
  return (
    <div className="w-full flex justify-center items-center">
      <div class="w-3/12 signin-form-container my-4 mx-3 bg-black bg-opacity-80">
        <div class="mx-16 my-16 text-white">
          <h1 class="text-3xl my-5">{isSignInForm ? "Sign In" : "Sign Up"}</h1>
          <form class="flex flex-col justify-center items-center text-black">
            {!isSignInForm && (
              <input
                type="text"
                placeholder="Full Name"
                class="p-3 m-4 w-full rounded-sm"
              />
            )}

            <input
              type="text"
              placeholder="Email Address"
              class="p-3 m-4 w-full rounded-sm"
            />
            <input
              type="password"
              placeholder="Password"
              class="p-3 m-4 w-full rounded-sm"
            />
            <button class="w-full py-3 m-4 bg-red-600 text-white rounded-sm">
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
