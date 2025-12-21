import Link from "next/link";
import "../components/ProjectCard.css";

export default function ProjectCard({
  title,
  description,
  tech = [],
  image,
  slug,
  github,
  demo,
}) {
  return (
    <article className="project-card">
      {image && (
        <div className="project-image">
          <img src={image} alt={title} />
        </div>
      )}

      <div className="project-content">
        <h3>{title}</h3>
        <p>{description}</p>

        <div className="tech-list">
          {Array.isArray(tech) &&
            tech.map((item, index) => (
              <span key={index} className="tech-badge">
                {item}
              </span>
            ))}
        </div>

        <div className="project-links">
          <Link href={`/projects/${slug}`}>Ver más</Link>

          {github && (
            <a href={github} target="_blank" rel="noopener noreferrer">
              GitHub
            </a>
          )}

          {demo && (
            <a href={demo} target="_blank" rel="noopener noreferrer">
              Demo
            </a>
          )}
        </div>
      </div>
    </article>
  );
}
