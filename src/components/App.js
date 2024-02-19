import React from "react";
import Body from "./Body";
import { Provider } from "react-redux";
import appStore from "../utils/appStore";

const App = () => {
  return (
    <Provider store={appStore}>
      <Body />
    </Provider>
  );
};

export default App;
