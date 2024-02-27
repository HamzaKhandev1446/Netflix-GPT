import React from "react";

import Header from "./Header";
import Authentication from "./Authentication";
import Footer from "./Footer";
import { LOGIN_BACKGROUND } from "../utils/constants";

const Login = () => {
  return (
    <div
      className="bg-cover bg-top relative h-100"
      style={{ backgroundImage: `url(${LOGIN_BACKGROUND})` }}
    >
      <div className="h-1/5">
        <Header />
      </div>

      <div className="h-4/5">
        <Authentication />
      </div>

      <div className="h-1/5">
        <Footer />
      </div>
    </div>
  );
};

export default Login;
