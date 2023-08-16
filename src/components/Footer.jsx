import React from "react";
import Socials from "./Socials";
const Footer = () => {
  return (
    <div className="footer mt-auto w-[100%]  bg-black/80 h-[150px] flex items-center justify-center">
      <h1 className="text-[30px] font-bold" style={{ fontFamily: "graziela" }}>
        Nartsa Gallery
      </h1>
      <Socials />
      <div className="font-semibold text-xl ">
        <p className="text-white">
          Made with 🤍 by{" "}
          <span style={{ fontFamily: "graziela" }} className="text-[27px]">
            Kevincarlosqa
          </span>
        </p>
      </div>
    </div>
  );
};

export default Footer;
