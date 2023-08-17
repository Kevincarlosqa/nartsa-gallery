import Image from "next/image";
import React from "react";

const FiltersCards = () => {
  return (
    <div className="mt-[200px]">
      <div className="filter-card ">
        <div className="filter-wrapper">
          <img className="filter-cover-image" alt="img1" src="/space2.png" />
        </div>
        {/* <Image className="filter-title" alt="img2" /> */}
        <h2 className="filter-title">FILTER</h2>
        <img
          className="filter-character"
          alt="img3"
          src="/astronaut.webp"
          // width={400}
          // height={400}
        />
      </div>
    </div>
  );
};

export default FiltersCards;
