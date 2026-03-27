import "../../../app/blog/blog.css";
import Comments from "../../../components/Comments";


const blogPosts = [
  {
    slug: "mi-primer-proyecto",
    title: "Mi primer proyecto real",
    date: "Julio 2025",
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
    content: `
En frontend es muy común cometer errores que no se notan al principio,
pero que afectan la experiencia del usuario a largo plazo.
    `,
  },
];

export default async function BlogPost({ params }) {

  // 🔥 CLAVE
  const { slug } = await params;

  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) {
    return <p>Post no encontrado</p>;
  }

  return (
    <article className="page blog-post">

      <a href="/blog">← Volver al blog</a>

      <h1>{post.title}</h1>
      <span>{post.date}</span>

      <p>{post.content}</p>

      {/* 🔥 comentarios */}
      <Comments postId={slug} />

    </article>
  );
}
