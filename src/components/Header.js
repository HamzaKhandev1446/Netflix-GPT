import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../utils/firebase";
import { addUser, removeUser } from "../store/userSlice";
import { HEADER_LOGO, PROFILE_AVATAR_LOGO } from "../utils/constants";

import { signOut } from "firebase/auth";

const Header = () => {
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { displayName, email, photoURL, uid } = user;
        const userInfo = {
          photoURL,
          email,
          name: displayName,
          uid,
        };
        dispatch(addUser(userInfo));
        navigate("/browse");
      } else {
        dispatch(removeUser());
        navigate("/");
      }
    });
    return () => unsubscribe();
  }, []);

  const logoutHandler = () => {
    signOut(auth)
      .then(() => {})
      .catch((error) => {});
  };
  return (
    <div className="w-full z-10 flex flex-row justify-start align-middle bg-gradient-to-b from-black">
      <div className="w-1/6 flex justify-center items-center">
        <img src={HEADER_LOGO} alt="Netflix Logo" />
      </div>
      {user && (
        <div className="flex flex-row justify-center items-center align-middle ml-auto">
          <div className="pr-4 flex flex-row justify-center">
            {user?.photoURL ? (
              <img
                src={user.photoURL}
                alt="User Profile"
                className="h-12 w-12 rounded-full mr-3"
              />
            ) : (
              <img
                src={PROFILE_AVATAR_LOGO}
                alt="User Profile"
                className="h-12 w-12 rounded-full mr-3"
              />
            )}
            <button
              className="h-12 w-24 bg-red-700 hover:bg-red-500 text-white font-bold py-2 px-4 rounded-lg"
              onClick={logoutHandler}
            >
              Logout
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Header;
