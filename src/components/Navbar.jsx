"use client";

import ThemeToggle from "./toggle";
import "./NavBar.css";

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-container">

        <div className="navbar-logo">MP.dev</div>

        <ul className="navbar-links">
          <li><a href="/">Home</a></li>
          <li><a href="/about">Sobre mí</a></li>
          <li><a href="/projects">Proyectos</a></li>
          <li><a href="/experience">Experiencia</a></li>
          <li><a href="/contact">Contacto</a></li>
        </ul>

        <div className="navbar-actions">
          <ThemeToggle />
        </div>

      </div>
    </nav>
  );
}
