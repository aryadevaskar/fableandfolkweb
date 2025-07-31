"use client"
import { useState } from "react";
import Menu from "../Menu/menu"; // adjust the path
import "./nav.css"; // your styles for this component
import { Link } from "react-router-dom";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <>
      <nav className="navbar">
        <Link to="/" className="navbar-logo">
          F&<span className="logo-f-gold">f</span>
        </Link>
        <button className="navbar-menu-button" onClick={toggleMenu}>
          Menu
        </button>
      </nav>
      <hr className="navbar-divider" />
      <Menu isOpen={isMenuOpen} onClose={toggleMenu} />
    </>
  );
}
