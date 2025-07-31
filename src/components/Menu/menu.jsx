"use client"
import { Link } from "react-router-dom";
import { useEffect } from "react";
import './Menu.css';

const Menu = ({ isOpen, onClose }) => {
  const menuClassName = `menu-overlay ${isOpen ? 'menu-overlay--open' : ''}`;

   useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }

    // Cleanup when component unmounts
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isOpen]);

  return (
    <div className={menuClassName}> 
      <button className="menu-close-button" onClick={onClose}>
        Close
      </button>

      <nav className="menu-navigation">
        <ul>
          <li><a href="/" onClick={onClose}>Home</a></li>
          <li><a href="#aboutus" onClick={onClose}>About</a></li>
          <li><a href="#ourworks" onClick={onClose}>Work</a></li>
          <li><a href="#ourcontact"onClick={onClose}>Contact</a></li>
        </ul>
      </nav>

      <Link to="/" className="menu-logo">
        F&<span className="logo-f-gold">f</span>
      </Link>
    </div>
  );
};

export default Menu;