"use client";

import { useEffect, useState } from "react";
import "./contact.css";

export default function ContactPage() {

  const [form, setForm] = useState({
    name: "",
    email: "",
    content: ""
  });

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

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

  // 🔹 Manejo de inputs
  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    });
  };

  // 🔹 Envío del formulario
  const handleSubmit = async (e) => {
    e.preventDefault();

    // ✅ Validación (MEJORA)
    if (!form.name || !form.email || !form.content) {
      alert("Completá todos los campos");
      return;
    }

    setLoading(true);

    try {
      const res = await fetch("/api/messages", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(form)
      });

      if (!res.ok) throw new Error("Error al enviar");

      setSuccess(true);
      setForm({ name: "", email: "", content: "" });

    } catch (error) {
      console.error(error);
      alert("Hubo un error al enviar el mensaje");
    } finally {
      setLoading(false);
    }
  };

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
              <a href="mailto:tuemail@email.com">
                mariangelpruvost94@gmail.com
              </a>
            </li>
            <li>
              <span>GitHub: </span>
              <a href="https://github.com/Angie-Pruvost" target="_blank">
                github.com/Angie-Pruvost
              </a>
            </li>
            <li>
              <span>LinkedIn: </span>
              <a href="https://www.linkedin.com/in/mariangel-pruvost-866239375/" target="_blank">
                linkedin.com/in/mariangel-pruvost
              </a>
            </li>
          </ul>
        </div>

        {/* FORMULARIO */}
        <form onSubmit={handleSubmit} className="contact-form reveal">

          <div className="form-group">
            <label>Nombre</label>
            <input
              type="text"
              name="name"
              placeholder="Tu nombre"
              value={form.name}
              onChange={handleChange}
            />
          </div>

          <div className="form-group">
            <label>Email</label>
            <input
              type="email"
              name="email"
              placeholder="tu@email.com"
              value={form.email}
              onChange={handleChange}
            />
          </div>

          <div className="form-group">
            <label>Mensaje</label>
            <textarea
              rows="5"
              name="content"
              placeholder="Escribí tu mensaje..."
              value={form.content}
              onChange={handleChange}
            />
          </div>

          <button type="submit" disabled={loading}>
            {loading ? "Enviando..." : "Enviar mensaje"}
          </button>

          {/* ✅ Feedback visual */}
          {success && (
            <p className="success">
              Mensaje enviado correctamente!!
              Gracias por contactarme, te responderé lo antes posible.
            </p>
          )}

        </form>
      </div>
    </section>
  );
}

// se logra manejar el estado de react, conectar con back end, validar datos, manejar el loading + feedback