import Image from "next/image";
import "../styles/about.css";


  export default function AboutPage() {
  return (
    <section className="about-page page-transition active">

      {/* BANNER */}
      <div className="about-banner">
        <img
          src="/about-banner.jpg"
          alt="Banner"
          className="about-banner-img"
        />
        <div className="about-banner-overlay" />
        <h1 className="about-title">Sobre mí</h1>
      </div>

      {/* CONTENT */}
      <div className="about-container reveal">
        <div className="about-image">
          <img src="/sobre-mi.jpg" alt="Perfil" />
        </div>

        <div className="about-content">
          <h1>Hola, soy Mariangel</h1>
          <p className="about-highlight">
            Desarrolladora enfocada en web y aplicaciones modernas
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
      </div>
    </section>
  );
  }


