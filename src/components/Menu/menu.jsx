"use client"
import { Link,useNavigate, useLocation } from "react-router-dom";
import { useEffect } from "react";
import './menu.css';

const Menu = ({ isOpen, onClose }) => {
  const navigate = useNavigate();
  const location = useLocation();

  const menuClassName = `menu-overlay ${isOpen ? 'menu-overlay--open' : ''}`;

  const handleScrollNavigation = (e,sectionId) => {
    e.preventDefault();
    onClose();
    if (location.pathname !== "/") {
      // Go to home page first, then scroll after it's rendered
      navigate(`/#${sectionId}`);
    } else {
      // Already on home page
      const section = document.getElementById(sectionId);
      if (section) section.scrollIntoView({ behavior: 'smooth' });
    }
    onClose();
  };

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }

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
          <li>
  <a href="/#aboutus" onClick={(e) => handleScrollNavigation(e, "aboutus")}>About</a>
</li>
<li>
  <a href="/#ourworks" onClick={(e) => handleScrollNavigation(e, "ourworks")}>Work</a>
</li>
<li>
  <a href="/#ourcontact" onClick={(e) => handleScrollNavigation(e, "ourcontact")}>Contact</a>
</li>


        </ul>
      </nav>

      <Link to="/" className="menu-logo">
        F&<span className="logo-f-gold">f</span>
      </Link>
    </div>
  );
};

export default Menu;