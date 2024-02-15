import React from "react";

const Header = () => {
  return (
    <div className="w-full z-10 flex flex-row justify-start align-middle bg-gradient-to-b from-black">
      <div className="w-1/6 flex justify-center items-center">
        <img
          src="https://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png"
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
