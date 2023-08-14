import React, { useEffect, useState } from "react";
import { motivationalPhrases } from "@/data/Phrases";
import { Caveat } from "next/font/google";

const caveat = Caveat({ subsets: ["latin"] });
const Phrase = () => {
  const [phrase, setPhrase] = useState(null);

  function getPhrase() {
    const randomPhrase = Math.floor(Math.random() * motivationalPhrases.length);
    return motivationalPhrases[randomPhrase];
  }
  useEffect(() => {
    if (!phrase) {
      setPhrase(getPhrase());
    }
  }, [phrase]);

  console.log(phrase);
  return (
    <div className="flex mt-[500px] p-8 relative justify-center">
      <div className="w-[800px]">
        <h1 className={`${caveat.className} glowText `}>
          &ldquo; {phrase?.frase}&rdquo;
        </h1>
      </div>
      <div>
        <p className="absolute bottom-0 right-[300px]">{phrase?.autor}</p>
      </div>
    </div>
  );
};

export default Phrase;
