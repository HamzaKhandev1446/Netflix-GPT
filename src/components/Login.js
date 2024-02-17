import React from "react";

import Header from "./Header";
import Authentication from "./Authentication";
import Footer from "./Footer";

const Login = () => {
  const imageUrl =
    "https://miro.medium.com/v2/resize:fit:1400/1*5lyavS59mazOFnb55Z6znQ.png";
  return (
    <div
      className="bg-cover bg-top relative h-100"
      style={{ backgroundImage: `url(${imageUrl})` }}
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
