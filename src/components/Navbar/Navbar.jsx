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
      <span className="flex gap-1.5 ml-4">
        <p>
          {isMenuOpen ? (
            <X className="md:hidden"/>
          ) : (
            <Menu
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            />
          )}
        </p>
        <ul className="md:hidden">{links}</ul>
        <h3>My Navbar</h3>
      </span>
      <ul className="md:flex gap-2 hidden">
        {links}
      </ul>
      <button className="button">Login</button>
    </nav>
  );
};

export default Navbar;
