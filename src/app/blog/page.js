import "./blog.css";
import Link from "next/link";

const blogPosts = [
  {
    slug: "mi-primer-proyecto",
    title: "Mi primer proyecto real",
    excerpt:
      "Un proyecto real cambia completamente la forma en la que aprendés a programar.",
    date: "Julio 2025",
  },
  {
    slug: "errores-frontend",
    title: "Errores comunes en proyectos frontend",
    excerpt:
      "Cosas que nadie te dice cuando empezás a programar interfaces.",
    date: "Agosto 2025",
  },
];

export default function BlogPage() {
  return (
    <section className="page blog-list">
      <header className="blog-header reveal">
        <h1>Bienvenidos a mi Blog</h1>
        <p>
          En este espacio comparto mi experiencia estudiando programación,
          rompiendo mitos y acompañando a quienes recién comienzan.
        </p>
      </header>

      <div className="blog-grid">
        {blogPosts.map((post, index) => (
          <article
            key={post.slug}
            className={`blog-card reveal delay-1${index + 1}`}
          >
            <span className="blog-card-date">{post.date}</span>
            <h2>{post.title}</h2>
            <p>{post.excerpt}</p>
            <a href={`/blog/${post.slug}`}>Leer artículo →</a>
          </article>
        ))}
      </div>
    </section>
  );
}

