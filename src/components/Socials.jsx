// next link
import Link from "next/link";

// icons
import {
  RiGithubFill,
  RiInstagramLine,
  RiLinkedinBoxFill,
  RiGoogleFill,
  RiBehanceLine,
  RiPinterestLine,
} from "react-icons/ri";

import { BiLogoGmail } from "react-icons/bi";

const socialMedia = [
  { icon: <RiGithubFill />, link: "https://github.com/Kevincarlosqa" },
  {
    icon: <RiLinkedinBoxFill />,
    link: "https://www.linkedin.com/in/kevin-quispe-aquise/",
  },
  {
    icon: <RiInstagramLine />,
    link: "https://www.instagram.com/kevincarlosqa/",
  },
  { icon: <BiLogoGmail />, link: "/contact" },
  // { icon: <RiBehanceLine />, link: "/" },
  // { icon: <RiPinterestLine />, link: "/" },
];
const Socials = () => {
  return (
    <div className="flex items-center gap-x-5 text-[23px] xl:text-[30px]">
      {socialMedia.map((social, index) => (
        <Link
          key={index}
          href={social.link}
          target={`${social.link === "/contact" ? "" : "_blank"}`}
          className="hover:text-accent hover:scale-110 transition-all duration-300"
        >
          {social.icon}
        </Link>
      ))}
    </div>
  );
};

export default Socials;
