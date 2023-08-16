import React from "react";
import Link from "next/link";

const navigationLinks = [
  {
    name: "home",
    href: "/",
  },
  {
    name: "filters",
    href: "/edit",
  },
  {
    name: "unsplash",
    href: "/unsplash",
  },
  {
    name: "nasa",
    href: "/nasa",
  },
];

const Header = () => {
  return (
    <div className="navbar absolute z-10 top-0 flex px-[100px] w-full justify-between items-center h-[70px]">
      <Link href="/" style={{ fontFamily: "graziela" }} className="text-xl">
        Nartsa Gallery
      </Link>
      <ul className="flex gap-8">
        {navigationLinks.map((nav) => (
          <li
            key={nav.name}
            className="uppercase font-semibold italic hover:scale-110 transition-all duration-300"
          >
            <Link href={nav.href}>{nav.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Header;
