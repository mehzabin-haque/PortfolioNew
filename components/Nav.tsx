import React from "react";
import Link from "next/link";

const links = [
  { path: "/", name: "Home" },
  { path: "/about", name: "About" },
  { path: "/contact", name: "Contact" },
  { path: "/projects", name: "Projects" },
];

const Nav = ({ containerStyles, linkStyles, underLineStyles }: any) => {
  return (
    <nav className={`${containerStyles}`}>
      {links.map((link, index) => (
        <Link key={index} href={link.path} className={`capitalize ${linkStyles}`}>
          {link.name}
        </Link>
      ))}
    </nav>
  );
};

export default Nav;
