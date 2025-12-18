import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../App.css";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();

  const handleScroll = (id, path) => {
    navigate(path);
    setOpen(false);

    setTimeout(() => {
      const section = document.getElementById(id);
      if (section) {
        section.scrollIntoView({ behavior: "smooth" });
      }
    }, 100);
  };

  return (
    <>
      <nav className="navbar">
        <img
          src="/solia-Logo.svg"
          alt="Logo"
          className="logo"
          onClick={() => handleScroll("home", "/")}
        />

        <ul className="desktop-menu">
          <li onClick={() => handleScroll("home", "/")}>HOME</li>
          <li onClick={() => handleScroll("about", "/about")}>ABOUT</li>
          <li onClick={() => handleScroll("how-it-works", "/how-it-works")}>
            HOW IT WORKS
          </li>
          <li onClick={() => handleScroll("faq", "/faq")}>FAQ</li>
        </ul>

        <div
          className={`hamburger ${open ? "open" : ""}`}
          onClick={() => setOpen(!open)}
        >
          <div className="bar"></div>
          <div className="bar"></div>
          <div className="bar"></div>
        </div>
      </nav>

      <div className={`mobile-menu ${open ? "show" : ""}`} >
        
        <ul>
          <li onClick={() => handleScroll("home", "/")}>HOME</li>
          <li onClick={() => handleScroll("about", "/about")}>ABOUT</li>
          <li onClick={() => handleScroll("how-it-works", "/how-it-works")}>
            HOW IT WORKS
          </li>
          <li onClick={() => handleScroll("faq", "/faq")}>FAQ</li>
        </ul>
      </div>
    </>
  );
};

export default Navbar;
