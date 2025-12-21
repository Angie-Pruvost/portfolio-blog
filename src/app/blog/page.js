import Link from "next/link";

const posts = [
  {
    slug: "mi-primer-proyecto",
    title: "Mi primer proyecto como desarrolladora",
    excerpt: "Cómo fue crear mi primer sistema completo."
  },
  {
    slug: "aprendiendo-react",
    title: "Aprendiendo React desde cero",
    excerpt: "Errores comunes y aprendizajes reales."
  }
];


export default function BlogPage() {
  return (
    <section>
      <h1>Blog</h1>
      <p>Artículos sobre desarrollo, estudio y experiencias</p>

      <ul>
        {posts.map(post => (
          <li key={post.slug}>
            <h3>{post.title}</h3>
            <p>{post.excerpt}</p>
            <Link href={`/blog/${post.slug}`}>
              Leer más →
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
}