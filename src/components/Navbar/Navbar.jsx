import React, { useState } from "react";
import Link from "./Link";
import { Menu, X } from "lucide-react";

const navigationData = [
  { id: 1, name: "Home", path: "/" },
  { id: 2, name: "About", path: "/about" },
  { id: 3, name: "Contact", path: "/contact" },
  { id: 4, name: "Blog", path: "/blog" },
  { id: 5, name: "Services", path: "/services" },
];

const links = navigationData.map((route) => (
  <Link key={route.id} route={route}></Link>
));

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="flex justify-between">
      <span
        className="flex gap-1.5 ml-4"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
      >
        <p className="my-2">
          {isMenuOpen ? (
            <X className="md:hidden" />
          ) : (
            <Menu className="md:hidden" />
          )}
        </p>
        <ul
          className={`md:hidden absolute duration-1000 ${isMenuOpen ? "top-10" : "-top-40"} bg-cyan-900`}
        >
          {links}
        </ul>
        <h3 className="ml-4 text-2xl">My Navbar</h3>
      </span>
      <ul className="md:flex gap-2 hidden">{links}</ul>
      <button className="button">Login</button>
    </nav>
  );
};

export default Navbar;
