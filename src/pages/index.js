"use client";
import ClipImages from "@/components/ClipImages";
import Header from "@/components/Header";
import ParticlesStars from "@/components/Particles";
import Phrase from "@/components/Phrase";
import Image from "next/image";
import { useEffect, useState } from "react";

import Page from "@/components/Page";
import UniverseCards from "@/components/UniverseCards";
import ShowFiltered from "@/components/ShowFiltered";
import Footer from "@/components/Footer";

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
      <Page>
        <div className="flex  flex-col justify-center items-center">
          <h1
            className="text-[90px] font-bold"
            style={{ fontFamily: "graziela" }}
          >
            Nartsa Gallery
          </h1>
          <p className="m-8 text-xl">
            Explora el Universo a través de los Ojos de la NASA: Imágenes que
            Inspiran y Maravillan
          </p>
        </div>
        <Image
          className="animate-pulse"
          src="/blackHole.webp"
          alt="blackhole"
          width={500}
          height={500}
        />
        <Phrase />
        <div className="">
          <ParticlesStars />
        </div>

        {/* <div id="three-container"></div> */}
        {/* <Universe /> */}

        <div className=" translate-z-0 ">
          <div className="video-container w-[1200px] mt-[150px] mx-auto absolute top-0 left-0 right-0 flex flex-row   justify-center z-[-150] ">
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

        {data ? <ClipImages data={data} /> : ""}
        <Image
          className=""
          src="/astronaut.webp"
          alt="astronaut"
          width={500}
          height={500}
        />
        <ShowFiltered />
        <UniverseCards />
        <div className=" relative left-0 right-0 top-0 ">
          <div className="video-container w-[1000px]  mt-[150px] mx-auto absolute bottom-[-284px] left-0 right-0 flex flex-row   justify-center z-[-150] ">
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

        <Footer />
      </Page>
    </>
  );
}
