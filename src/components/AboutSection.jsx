import Image from "next/image";
import "../styles/about.css";

export default function AboutSection() {
  return (
     <section className="about-section">
      {/* BANNER */}
      <div className="about-banner">
        <Image
          src="/about-banner.jpg"
          alt="Banner sobre mí"
          fill
          priority
          className="about-banner-img"
        />
        <div className="about-banner-overlay" />
        
      </div>

{/* CONTENIDO */}
      <div className="about-content">
        <h2>Sobre mí</h2>
      <br />
        <p className="about-highlight">
          Desarrolladora de software enfocada en aplicaciones web modernas.
        </p>

        <p>
          Me especializo en el desarrollo de aplicaciones utilizando tecnologías
          como <strong>React</strong>, <strong>Next.js</strong> y
          <strong> ASP.NET</strong>. Disfruto crear interfaces limpias,
          funcionales y con buena experiencia de usuario.
        </p>

        <p>
          Actualmente me encuentro cursando el ultimo año de la carrera de Tecnicatura Universitaria en programación
          en la Universidad Tecnologica Nacional (UTN). He adquirido conocimientos sólidos en programación, desarrollo web y bases de datos.
          Como anteriormente mensionaba, las tecnologias que más utilizo son React, Next.js y ASP.NET, pero también tengo experiencia con Vue.js y SQL Server, entre otras.
          Estoy abierta a aprender nuevas tecnologías y metodologías de desarrollo para seguir creciendo profesionalmente.
        </p>
      </div>
    </section>
  );
}
