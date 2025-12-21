//uso el componente ProjectCard
import ProjectCard from "../../components/ProjectCard";
import "../projects/projects.css";

export default function ProjectsPage() {
  const projects = [
    {
      title: "CryptoCat",
      slug: "crypto-cat",
      description: "Sistema de gestión de criptomonedas.",
      tech: ["Vue", "ASP.NET", "SQL Server","C#","javaScript","CSS", "HTML"],
      image: "/projects/cryptocat.png",
      github: "https://github.com/Angie-Pruvost/proyectoProgIII-CryptoCat.git",
    },
    {
      title: "Pedidos SanFran",
      slug: "gameplay",
      description: "Marketplace estilo Rappi.",
      tech: ["HTML", "CSS", "JavaScript","TypeScript","NestJS", "vue"],
      image: "/projects/marketplace.png",
      github: "https://github.com/Bunkiss/pedidosSanFran.git",
    },
  ];

  return (
    <section className="projects-page">
      <h1>Proyectos</h1>
<br></br>
      <div className="projects-grid">
        {projects.map((project, index) => (
          <ProjectCard key={index} {...project} />
        ))}
      </div>
    </section>
  );
}