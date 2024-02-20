import React from "react";
import { Provider } from "react-redux";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Login from "./Login";
import Browse from "./Browse";


import appStore from "../utils/appStore";

import Authenticator from "./Authenticator";

const App = () => {
  const appRouter = createBrowserRouter([
    {
      path: "/",
      element:
       <Login />,
    },
    {
      path: "/browse",
      element: <Browse />,
    },
  ]);
  return (
    <Provider store={appStore}>
      <Authenticator>
      <RouterProvider router={appRouter}> </RouterProvider>;
      </Authenticator>
    </Provider>
  );
};

export default App;
