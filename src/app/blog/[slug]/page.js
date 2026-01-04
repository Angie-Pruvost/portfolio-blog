import "../../../app/blog/blog.css";

const blogPosts = [
  {
    slug: "mi-primer-proyecto",
    title: "Mi primer proyecto real",
    date: "Julio 2025",
    excerpt:
      "Desarrollar un proyecto real fue un antes y un después en mi camino como desarrolladora.",
    content: `
      Desarrollar un proyecto real fue un antes y un después en mi camino
      como desarrolladora. Me permitió entender la importancia de planificar,
      validar ideas y pensar siempre en el usuario final.
    `,
  },
  {
    slug: "errores-frontend",
    title: "Errores comunes en proyectos frontend",
    date: "Agosto 2025",
    excerpt:
      "Cosas que nadie te dice cuando empezás a programar interfaces reales.",
    content: `
      En frontend es muy común cometer errores que no se notan al principio,
      pero que afectan la experiencia del usuario a largo plazo.
    `,
  },
];

export default async function BlogPost({ params }) {
  const { slug } = await params;

  const currentIndex = blogPosts.findIndex(
    (post) => post.slug === slug
  );

  const post = blogPosts[currentIndex];
  const prevPost = blogPosts[currentIndex - 1];
  const nextPost = blogPosts[currentIndex + 1];

  if (!post) return null;

  return (
    <article className="page blog-post">
      {/* VOLVER */}
      <a href="/blog" className="blog-back">
        ← Volver al blog
      </a>

      {/* HEADER */}
      <header className="blog-header reveal">
        <h1>{post.title}</h1>
        <span className="blog-date">{post.date}</span>
      </header>

      {/* CONTENT */}
      <section className="blog-content reveal delay-2">
        <p>{post.content}</p>
      </section>

      {/* NAV */}
      <nav className="blog-post-nav reveal delay-2">
        {prevPost && (
          <a href={`/blog/${prevPost.slug}`} className="nav-prev">
            ← {prevPost.title}
          </a>
        )}

        {nextPost && (
          <a href={`/blog/${nextPost.slug}`} className="nav-next">
            {nextPost.title} →
          </a>
        )}
      </nav>
    </article>
  );
}
