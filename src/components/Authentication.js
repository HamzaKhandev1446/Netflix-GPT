import React, { useState, useRef } from "react";
import { validateForm } from "../utils/validateForm";
import { auth } from "../utils/firebase";
import {
  createUserWithEmailAndPassword,
  signInWithPopup,
  GoogleAuthProvider,
} from "firebase/auth";
import ToastMessage from "./ToastMessage";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";

const Authentication = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);
  const [errorMessage, setErrorMessage] = useState({
    email: null,
    password: null,
  });
  const [toastMessage, setToastMessage] = useState(null);
  const dispatch = useDispatch();

  const email = useRef(null);
  const password = useRef(null);

  const signUpHandler = () => {
    setIsSignInForm(!isSignInForm);
  };

  const googleSignInHandler = () => {
    const provider = new GoogleAuthProvider();

    signInWithPopup(auth, provider)
      .then((res) => {
        const { displayName, email, photoURL, uid } = res.user;
        const userInfo = {
          photoURL,
          email,
          name: displayName,
          uid,
        };
        dispatch(addUser(userInfo));
        return res;
      })
      .catch((err) => err);
  };

  const submitForm = () => {
    setErrorMessage(
      validateForm(email?.current?.value, password?.current?.value)
    );

    if (errorMessage.email || errorMessage.password) return;
    if (isSignInForm) {
      // Sign In Logic
    } else {
      // Sign Up Logic
      createUserWithEmailAndPassword(
        auth,
        email?.current?.value,
        password?.current?.value
      )
        .then((userCredential) => {
          const user = userCredential.user;
          console.log(user);
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          console.log(errorMessage, errorCode);
          setToastMessage(errorMessage);
        });
    }
  };

  return (
    <div className="w-full flex justify-center items-center">
      <div className="xl:w-4/12 lg:w-5/12 md:w-7/12 signin-form-container my-4 mx-3 bg-black bg-opacity-80">
        <div className="mx-16 my-16 text-white">
          {toastMessage && (
            <ToastMessage
              toastMessage={toastMessage}
              setToastMessage={setToastMessage}
            />
          )}

          <h1 className="text-3xl my-5">
            {isSignInForm ? "Sign In" : "Sign Up"}
          </h1>
          <form
            onSubmit={(e) => {
              e.preventDefault();
            }}
            className="flex flex-col justify-center items-center text-black"
          >
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

            <button
              type="button"
              className="text-white bg-[#4285F4] hover:bg-[#4285F4]/90 focus:ring-4 focus:ring-[#4285F4]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-[#4285F4]/55 mr-2 mb-2"
              onClick={googleSignInHandler}
            >
              <svg
                className="mr-2 -ml-1 w-4 h-4"
                aria-hidden="true"
                focusable="false"
                data-prefix="fab"
                data-icon="google"
                role="img"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 488 512"
              >
                <path
                  fill="currentColor"
                  d="M488 261.8C488 403.3 391.1 504 248 504 110.8 504 0 393.2 0 256S110.8 8 248 8c66.8 0 123 24.5 166.3 64.9l-67.5 64.9C258.5 52.6 94.3 116.6 94.3 256c0 86.5 69.1 156.6 153.7 156.6 98.2 0 135-70.4 140.8-106.9H248v-85.3h236.1c2.3 12.7 3.9 24.9 3.9 41.4z"
                ></path>
              </svg>
              Sign in with Google
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
