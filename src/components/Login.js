import React from "react";
import Header from "./Header";

const Login = () => {
  const imageUrl =
    "https://miro.medium.com/v2/resize:fit:1400/1*5lyavS59mazOFnb55Z6znQ.png";
  return (
    <div
      className="bg-cover bg-top relative h-screen"
      style={{ backgroundImage: `url(${imageUrl})` }}
    >
      <Header />
    </div>
  );
};

export default Login;
