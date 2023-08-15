import React from "react";
import Link from "next/link";

const Header = () => {
  return (
    <div className="absolute z-10 top-0">
      <h1>nARTsa Gallery</h1>

      <ul>
        <li className="cursor-pointer">
          <Link href="/">HOME</Link>
        </li>
        <li className="cursor-pointer">
          <Link href="/edit">EDIT</Link>
        </li>
      </ul>
    </div>
  );
};

export default Header;
