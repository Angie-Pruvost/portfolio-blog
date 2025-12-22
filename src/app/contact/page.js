"use client";

import { useEffect } from "react";
import "./contact.css";

export default function ContactPage() {
  useEffect(() => {
    const elements = document.querySelectorAll(".reveal");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("active");
          }
        });
      },
      { threshold: 0.2 }
    );

    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <section className="contact-page">
      <h1 className="contact-title reveal">Contacto</h1>

      <div className="contact-container">
        {/* INFO */}
        <div className="contact-info reveal">
          <h2>Hablemos 👋</h2>
          <p>
            Si te interesa mi perfil, querés trabajar conmigo o simplemente
            charlar sobre tecnología, no dudes en contactarme.
          </p>

          <ul className="contact-links">
            <li>
              <span>Email:</span>
              <a href="mailto:tuemail@email.com">mariangelpruvost94@gmail.com</a>
            </li>
            <li>
              <span>GitHub:</span>
              <a href="https://github.com/Angie-Pruvost" target="_blank">
                github.com/Angie-Pruvost
              </a>
            </li>
            <li>
              <span>LinkedIn:</span>
              <a href="https://www.linkedin.com/in/mariangel-pruvost-866239375/" target="_blank">
                linkedin.com/in/mariangel-pruvost
              </a>
            </li>
          </ul>
        </div>

        {/* FORMULARIO */}
        <form className="contact-form reveal">
          <div className="form-group">
            <label>Nombre</label>
            <input type="text" placeholder="Tu nombre" />
          </div>

          <div className="form-group">
            <label>Email</label>
            <input type="email" placeholder="tu@email.com" />
          </div>

          <div className="form-group">
            <label>Mensaje</label>
            <textarea rows="5" placeholder="Escribí tu mensaje..." />
          </div>

          <button type="submit">Enviar mensaje</button>
        </form>
      </div>
    </section>
  );
}
