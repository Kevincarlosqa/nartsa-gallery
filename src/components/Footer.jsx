import React from "react";
import Socials from "./Socials";
const Footer = () => {
  function toBegin() {
    window.scrollTo({
      top: 0,
      behavior: "smooth", // Para un desplazamiento suave
    });
  }
  return (
    <div className="footer mt-auto w-[100%]  bg-black/80 h-[150px] flex items-center justify-center">
      <h1
        onClick={() => toBegin()}
        className="text-[30px] font-bold cursor-pointer"
        style={{ fontFamily: "graziela" }}
      >
        Nartsa Gallery
      </h1>
      <div className="font-semibold text-xl flex flex-col items-center gap-7">
        <Socials />
        <p className="text-white">
          Made with 🤍 by{"   "}
          <span style={{ fontFamily: "graziela" }} className="pl-3 text-[27px]">
            Kevincarlosqa
          </span>
        </p>
      </div>
    </div>
  );
};

export default Footer;
