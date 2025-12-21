import Link from "next/link";
import "./NavBar.css";

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-logo">Mariangel.dev</div>

        <ul className="navbar-links">
          <li><Link href="/">Inicio</Link></li>
          <li><Link href="/about">Sobre mí</Link></li>
          <li><Link href="/projects">Proyectos</Link></li>
          <li><Link href="/experience">Experiencia</Link></li>
          <li><Link href="/blog">Blog</Link></li>
          <li><Link href="/contact">Contacto</Link></li>
        </ul>
      </div>
    </nav>
  );
}
