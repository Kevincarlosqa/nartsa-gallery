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
    <div className="absolute z-10 top-0">
      <h1>nARTsa Gallery</h1>
      <ul>
        {navigationLinks.map((nav) => (
          <li key={nav.name} className="cursor-pointer">
            <Link href={nav.href}>{nav.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Header;
