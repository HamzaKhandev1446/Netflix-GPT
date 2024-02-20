import React from "react";
import { useEffect } from "react";
import { useDispatch } from "react-redux";

import Login from "./Login";
import Browse from "./Browse";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { addUser } from "../utils/userSlice";

const Body = (props) => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(addUser(props?.userInfo));
  }, [props?.userInfo]);
  const appRouter = createBrowserRouter([
    {
      path: "/",
      element: <Login />,
    },
    {
      path: "/browse",
      element: <Browse />,
    },
  ]);
  return <RouterProvider router={appRouter}></RouterProvider>;
};

export default Body;
