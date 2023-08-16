"use client";
import Image from "next/image";
import React, { useEffect, useRef } from "react";
import { useTransform, useScroll, motion } from "framer-motion";
import Lenis from "@studio-freight/lenis";
import useDimension from "@/useDimension";
const images = ["/space1.jpg", "/space2.png"];

const ShowFiltered = () => {
  const container = useRef(null);
  const { height } = useDimension();
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start end", "end start"],
  });

  useEffect(() => {
    const lenis = new Lenis();
    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
  }, []);

  const y = useTransform(scrollYProgress, [0, 1], [0, height * 2]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, height * 3.3]);
  const y3 = useTransform(scrollYProgress, [0, 1], [0, height * 1.25]);
  const y4 = useTransform(scrollYProgress, [0, 1], [0, height * 3.3]);
  return (
    <div className="main ">
      <div ref={container} className="gallery">
        <Column images={[images[0], images[1], images[0]]} y={y} />
        <Column images={[images[1], images[1], images[0]]} y={y2} />
        <Column images={[images[0], images[1], images[1]]} y={y3} />
        <Column images={[images[0], images[0], images[1]]} y={y4} />
      </div>
    </div>
  );
};

export default ShowFiltered;

const Column = ({ images, y = 0 }) => {
  return (
    <motion.div style={{ y }} className="column">
      {images.map((src, index) => (
        <div key={index} className="imageContainer">
          <Image src={src} fill alt="image" />
        </div>
      ))}
    </motion.div>
  );
};
