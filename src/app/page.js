"use client";
import ClipImages from "@/components/ClipImages";
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
      <h1>NASA GALLERY</h1>
      <Image
        className="animate-pulse"
        src="/blackHole.webp"
        alt="blackhole"
        width={500}
        height={500}
      />

      <div id="three-container"></div>
      {/* <Universe /> */}
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
    </>
  );
}
