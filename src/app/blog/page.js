import "./blog.css";

export default function BlogPage() {
  return (
    <section className="blog-page">
      <header className="blog-header reveal">
        <h1>Blog</h1>
        <p>
          Ideas, aprendizajes y experiencias sobre desarrollo y tecnología.
        </p>
      </header>

      <div className="blog-grid">
        {/* CARD */}
        <article className="blog-card reveal delay-1">
          <h2>Mi primer proyecto real</h2>
          <p>
            Qué aprendí desarrollando una aplicación completa desde cero.
          </p>
          <a href="/blog/mi-primer-proyecto">Leer artículo →</a>
        </article>

        <article className="blog-card reveal delay-2">
          <h2>Errores comunes en proyectos frontend</h2>
          <p>
            Cosas que nadie te dice cuando empezás a programar interfaces.
          </p>
          <a href="/blog/errores-frontend">Leer artículo →</a>
        </article>
      </div>
    </section>
  );
}
