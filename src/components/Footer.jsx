import "./footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <p className="footer-brand">
          © {new Date().getFullYear()} — Mariangel Pruvost 
        </p>

        <ul className="footer-links">
          <li><a href="/about">Sobre mí</a></li>
          <li><a href="/experience">Experiencia</a></li>
          <li><a href="/contact">Contacto</a></li>
        </ul>
      </div>
    </footer>
  );
}
