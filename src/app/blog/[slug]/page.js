export default async function BlogPostPage({ params }) {
  const { slug } = await params;

  return (
    <article>
      <h1>{slug.replace(/-/g, " ")}</h1>
      <p>
        Este es el contenido del post <strong>{slug}</strong>.
      </p>
    </article>
  );
}
