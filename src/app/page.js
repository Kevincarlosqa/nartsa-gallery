"use client";
import ClipImages from "@/components/ClipImages";
import Header from "@/components/Header";
import Phrase from "@/components/Phrase";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function Home() {
  const [data, setData] = useState(null);
  const date = new Date();

  useEffect(() => {
    fetch(
      "https://api.nasa.gov/planetary/apod?api_key=BRaIILYhdYvbrMf2lHpMY2VpQRE7gdYYB3yvf2Z1&count=3"
    )
      .then((res) => res.json())
      .then((resolve) => {
        console.log(resolve);
        setData(resolve);
      })
      .catch(console.log);
  }, []);
  console.log(data);
  console.log(date);
  return (
    <>
      <Header />
      <Image
        className="animate-pulse"
        src="/blackHole.webp"
        alt="blackhole"
        width={500}
        height={500}
      />
      <Phrase />

      <div id="three-container"></div>
      {/* <Universe /> */}

      <div className=" ">
        <div className="video-container w-[1000px] mt-10 mx-auto absolute top-0 left-0 right-0 flex flex-row   justify-center  ">
          <video
            id="mi-video"
            className="w-full h-full  rotate-180  mix-blend-difference"
            preload="false"
            playsInline
            loop
            muted
            // @ts-ignore
            autoPlay="autoplay"
            src="/q-c3d7becf.webm"
          ></video>
        </div>
      </div>

      {data
        ? data.map((dato) => (
            <>
              <h1>{dato.title}</h1>
              <Image
                src={dato.hdurl}
                alt={dato.title}
                key={dato.title}
                width={500}
                height={500}
              />
              <ClipImages data={data} />
            </>
          ))
        : ""}
      <Image
        className=""
        src="/astronaut.webp"
        alt="astronaut"
        width={500}
        height={500}
      />
    </>
  );
}
