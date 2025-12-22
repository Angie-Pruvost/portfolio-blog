"use client";
import { useEffect } from "react";
import "./experience.css";

  const experiences = [
    {
      role: "Desarrolladora Full Stack (Proyecto académico)",
      company: "CryptoCat",
      period: "2024 – 2025",
      description:
        "Desarrollo de un sistema de gestión de criptomonedas con frontend en Vue.js y backend en ASP.NET. Integración de API externa para cotizaciones y base de datos SQL Server.",
      tech: ["Vue.js", "ASP.NET", "SQL Server", "REST API"],
    },
    {
      role: "Desarrolladora Web",
      company: "Proyecto Simil Rappi",
      period: "2025",
      description:
        "Creación de un marketplace tipo Mercado Libre utilizando HTML, CSS y JavaScript, consumiendo APIs para mostrar productos dinámicamente.",
      tech: ["HTML", "CSS", "JavaScript"],
    },
    {
      role: "Estudiante de Programación",
      company: "Formación Académica",
      period: "2023 – Actualidad",
      description:
        "Formación en desarrollo de software con enfoque en backend, bases de datos y aplicaciones web.",
      tech: ["C#", "SQL Server", "Node.js", "Git"],
    },
  ];

  export default function ExperiencePage() {
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
    <section className="experience-page">
      <h1 className="experience-title">Experiencia</h1>

      <div className="timeline">
        {experiences.map((exp, index) => (
          <div key={index} className="timeline-item reveal">
            <span className="timeline-dot" />

            <div className="timeline-content">
              <h3>{exp.role}</h3>
              <h4>{exp.company}</h4>
              <span className="timeline-period">{exp.period}</span>
              <p>{exp.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
