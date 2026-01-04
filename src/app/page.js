import Image from "next/image";
import "../styles/home.css";


export default function HomePage() {
  return (
    <main>
      {/* ================= HERO ================= */}
      <section className="hero">
        <div className="hero-content">
          <div className="hero-text">
            <h1>
              Hola, soy <span>Angie</span>
            </h1>
            <h2>Desarrolladora Full Stack</h2>
            <p>
              Desarrollo aplicaciones web modernas, enfocadas en una buena
              experiencia de usuario y soluciones escalables.
            </p>
          </div>

          <div className="hero-image">
            <div className="avatar">
            <Image
              src="/profile.jpg"
              alt="Foto de perfil"
              fill
              priority
            />
          </div>
        </div>
        </div>
      </section>

      {/* ================= SKILLS ================= */}
      <section className="skills">
        <h2 className="section-title">Skills</h2>

        <div className="skills-grid">
          <div className="skill-card">
            <h3>Frontend</h3>
            <ul>
              <li>HTML5</li>
              <li>CSS / Responsive Design</li>
              <li>JavaScript (ES6+)</li>
              <li>React</li>
              <li>Next.js</li>
              <li>Vue.js</li>
            </ul>
          </div>

          <div className="skill-card">
            <h3>Backend</h3>
            <ul>
              <li>Node.js</li>
              <li>NestJS</li>
              <li>ASP.NET</li>
              <li>APIs REST</li>
            </ul>
          </div>

          <div className="skill-card">
            <h3>Bases de Datos</h3>
            <ul>
              <li>SQL Server</li>
              <li>MySQL</li>
              <li>MongoDB</li>
            </ul>
          </div>

          <div className="skill-card">
            <h3>Herramientas</h3>
            <ul>
              <li>Git & GitHub</li>
              <li>Visual Studio Code</li>
              <li>Postman</li>
              <li>Swagger</li>
            </ul>
          </div>
        </div>
      </section>
    </main>
  );
}