import {projects} from "../../../data/projectData";


export default async function ProjectDetailPage({ params }) {
  const { slug } = await params;

  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    return <h1 style={{ padding: "4rem" }}>Proyecto no encontrado</h1>;
  }

  return (
    <section style={{ padding: "4rem", color: "white" }}>
      <h1>{project.title}</h1>

      <p style={{ marginTop: "1rem", maxWidth: "700px" }}>
        {project.longDescription}
      </p>

      <h3 style={{ marginTop: "2rem" }}>Tecnologías</h3>
      <ul>
        {project.stack.map((tech) => (
          <li key={tech}>{tech}</li>
        ))}
      </ul>

      <div style={{ marginTop: "2rem" }}>
        {project.github && (
          <a href={project.github} target="_blank">
            GitHub
          </a>
        )}
        {project.demo && (
          <a href={project.demo} target="_blank">
            Demo
          </a>
        )}
      </div>
    </section>
  );
}
