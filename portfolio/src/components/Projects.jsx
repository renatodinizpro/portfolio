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

          {/* Link para o código */}
          <a href={project.github} target="_blank" rel="noreferrer">
            Código no GitHub
          </a>

          <br />

          {/* Link para o projeto online */}
          <a href={project.demo} target="_blank" rel="noreferrer">
            Ver projeto online
          </a>
        </div>
      ))}
    </section>
  );
}

export default Projects;
