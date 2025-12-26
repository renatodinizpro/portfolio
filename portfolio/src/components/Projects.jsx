import projects from "../data/projects";

function Projects() {
  return (
    <section>
      <h2>Projetos</h2>

      {projects.map((project) => (
        <div key={project.id}>
          <h3>{project.title}</h3>
          <p>{project.description}</p>

          <p>
            <strong>Tecnologias:</strong> {project.technologies.join(", ")}
          </p>

          <a hre={project.github} target="_blank">
            Código no GitHub
          </a>
        </div>
      ))}
    </section>
  );
}

export default Projects;
