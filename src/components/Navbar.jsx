"use client";
import { useState } from "react";
import Toggle from "./toggle";
import "./NavBar.css";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <nav className="navbar">
        <div className="navbar-container">

          <div className="navbar-logo">MP.dev</div>

          {/* LINKS DESKTOP */}
          <ul className="navbar-links">
            <li><a href="/">Home</a></li>
            <li><a href="/about">Sobre mí</a></li>
            <li><a href="/projects">Proyectos</a></li>
            <li><a href="/experience">Experiencia</a></li>
            <li><a href="/contact">Contacto</a></li>
            <li><a href="/blog">Blog</a></li>
          </ul>

          <div className="navbar-actions">
            <Toggle />

            <button
              className="hamburger"
              onClick={() => setOpen(true)}
              aria-label="Abrir menú"
            >
              ☰
            </button>
          </div>

        </div>
      </nav>

      {/* OVERLAY */}
      {open && <div className="sidebar-overlay" onClick={() => setOpen(false)} />}

      {/* SIDEBAR */}
      <aside className={`sidebar ${open ? "open" : ""}`}>
        <button
          className="sidebar-close"
          onClick={() => setOpen(false)}
          aria-label="Cerrar menú"
        >
          ✕
        </button>

        <ul className="sidebar-links">
          <li><a href="/" onClick={() => setOpen(false)}>Home</a></li>
          <li><a href="/about" onClick={() => setOpen(false)}>Sobre mí</a></li>
          <li><a href="/projects" onClick={() => setOpen(false)}>Proyectos</a></li>
          <li><a href="/experience" onClick={() => setOpen(false)}>Experiencia</a></li>
          <li><a href="/contact" onClick={() => setOpen(false)}>Contacto</a></li>
          <li><a href="/blog" onClick={() => setOpen(false)}>Blog</a></li>
        </ul>

        <div className="sidebar-toggle">
          <Toggle />
        </div>
      </aside>
    </>
  );
}
