import "../../../app/blog/blog.css";

export default function BlogPost() {
  return (
    <article className="blog-post">
      <header className="blog-post-header reveal">
        <h1>Mi primer proyecto real</h1>
        <span className="blog-date">Julio 2025</span>
      </header>

      <section className="blog-content reveal delay-1">
        <p>
          Desarrollar un proyecto real fue un antes y un después en mi camino
          como desarrolladora...
        </p>

        <h2>Lo que aprendí</h2>

        <p>
          Entendí la importancia de planificar, validar y pensar en el usuario.
        </p>
      </section>
    </article>
  );
}
