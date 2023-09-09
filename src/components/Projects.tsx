import React from "react";
import IconTech from "./IconTech";
import projectsList from "../utils/projectsList";
import "../assets/Projects.css";

const Projects: React.FC = () => {
  const redirect = (link: string) => {
    window.open(link);
  };

  return (
    <section className="section-projects">
      {projectsList.map((project, index) => (
        <div key={index} className="container-project">
          <h2>{project.title}</h2>
          <div className="container-iframe">
            <div onClick={() => redirect(project.link)}>Ver el proyecto</div>
            <iframe
              title={`Vista previa de ${project.title}`}
              src={project.link}
              allowFullScreen
              scrolling="off"
            ></iframe>
          </div>
          <p>{project.description}</p>
          <ul>
            <h4>Tecnologías:</h4>
            {project.technologies.map((t, index) => (
              <div key={index} className="item-technology">
                <figure>{<IconTech technology={t} />}</figure>
                <li>{t}</li>
              </div>
            ))}
          </ul>
          <a href={project.link} target="_blank">
            Ver proyecto
          </a>
        </div>
      ))}
    </section>
  );
};

export default Projects;
