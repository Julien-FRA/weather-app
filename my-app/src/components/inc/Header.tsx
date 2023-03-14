import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <nav className="nav-container">
      <a href="/" className="nav-item">Home</a>
      <a href="/weather" className="nav-item">Consulter</a>
      <a href="/add" className="nav-item">Ajouter</a>
    </nav>
  );
};

export default Header;
