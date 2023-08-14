import React from "react";

const ClipImages = ({ data }) => {
  console.log(data, "images");
  return (
    <div className="container relative w-[800px] h-[500px] bg-[#222]">
      {/* <h1>IMages</h1> */}
      <div
        className="clip absolute top-0 left-0 w-[100%] h-[100%] transition-all duration-500 bg-cover clip1"
        style={{
          backgroundImage: `url("${data[0].hdurl}")`,
        }}
      >
        <div className="content">
          <h1>{data[0].title}</h1>
          <p>{data[0].explanation}</p>
        </div>
      </div>
      <div
        className="clip absolute top-0 left-0 w-[100%] h-[100%] transition-all duration-500 bg-green-300 bg-cover clip2
        "
        style={{
          backgroundImage: `url("${data[1].hdurl}")`,
        }}
      >
        <div className="content">
          <h1>{data[1].title}</h1>
          <p>{data[1].explanation}</p>
        </div>
      </div>
      <div
        className=" clip absolute top-0 left-0 w-[100%] h-[100%] transition-all duration-500 bg-red-300 bg-cover
      clip3"
        style={{
          backgroundImage: `url("${data[2].hdurl}")`,
        }}
      >
        <div className="content">
          <h1>{data[2].title}</h1>
          <p>{data[2].explanation}</p>
        </div>
      </div>
    </div>
  );
};

export default ClipImages;
