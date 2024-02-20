import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../utils/firebase";
import { addUser, removeUser } from "../utils/userSlice";

const Authenticator = (props) => {
  const dispatch = useDispatch();
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        const { displayName, email, photoURL, uid } = user;
        const userInfo = {
          photoURL,
          email,
          name: displayName,
          uid,
        };
        dispatch(addUser(userInfo));
      } else {
        dispatch(removeUser());
      }
    });
  }, []);
  return props.children;
};

export default Authenticator;
