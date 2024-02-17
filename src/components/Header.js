import React from "react";

const Header = () => {
  return (
    <div className="w-full z-10 flex flex-row justify-start align-middle bg-gradient-to-b from-black">
      <div className="w-1/6 flex justify-center items-center">
        <img
          src="https://images.ctfassets.net/y2ske730sjqp/6bhPChRFLRxc17sR8jgKbe/6fa1c6e6f37acdc97ff635cf16ba6fb3/Logos-Readability-Netflix-logo.png"
          alt="Netflix Logo"
        />
      </div>
      <div className="flex flex-col justify-center align-middle ml-auto">
        <p className="text-white text-bold"> Right Header Section</p>
      </div>
    </div>
  );
};

export default Header;
