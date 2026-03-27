"use client";

import Link from "next/link";
import "./blog.css";

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

      <header className="blog-header">
        <h1>Blog</h1>
      </header>

      <div className="blog-grid">
        {blogPosts.map((post) => (
          <article key={post.slug} className="blog-card">
            <span>{post.date}</span>
            <h2>{post.title}</h2>
            <p>{post.excerpt}</p>

            {/* 🔥 IMPORTANTE */}
            <Link href={`/blog/${post.slug}`}>
              Leer artículo →
            </Link>

          </article>
        ))}
      </div>

    </section>
  );
}