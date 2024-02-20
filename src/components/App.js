import React, { useEffect, useState } from "react";
import Body from "./Body";
import { Provider } from "react-redux";
import appStore from "../utils/appStore";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../utils/firebase";

const App = () => {
  const [userInfo, setUserInfo] = useState(null);
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
        setUserInfo(userInfo);

        // ...
      } else {
        setUserInfo(null);
      }
    });
  }, []);

  return (
    <Provider store={appStore}>
      <Body userInfo={userInfo} />;
    </Provider>
  );
};

export default App;
