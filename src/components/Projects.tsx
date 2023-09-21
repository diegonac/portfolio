import React from "react";
import IconTech from "./IconTech";
import projectsList from "../utils/projectsList";
import { PiComputerTower, PiProjectorScreen } from "react-icons/pi";
import { HiOutlineComputerDesktop } from "react-icons/hi2";
import "../assets/Projects.css";

const Projects: React.FC = () => {
  const redirect = (link: string) => {
    window.open(link);
  };

  return (
    <section id="section-projects" data-aos="zoom-in-right">
      <h2 className="title-section">Proyectos</h2>
      {projectsList.map((project, index) => (
        <div key={index} className="container-project">
          <div className="container-iframe">
            {project.title === "Pokedex" ? (
              <iframe
                width="320"
                height="560"
                src={project.link}
                title={`Video de ${project.title}`}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              ></iframe>
            ) : (
              <>
                <div onClick={() => redirect(project.link)}>
                  Ver el proyecto
                </div>
                <iframe
                  title={`Vista previa de ${project.title}`}
                  src={project.link}
                  allowFullScreen
                  scrolling="off"
                ></iframe>
              </>
            )}
          </div>
          <h2>{project.title}</h2>
          <p>{project.description}</p>
          <div>
            <span>Tecnologías:</span>
            {project.technologies.map((t, index) => (
              <div key={index} className="item-technology">
                <figure>{<IconTech technology={t} />}</figure>
                <p>{t}</p>
              </div>
            ))}
          </div>
          <div className="container-links">
            {project.repositories.backend && (
              <figure>
                <PiComputerTower />
                <a href={project.repositories.backend} target="_blank">
                  Backend
                </a>
              </figure>
            )}
            {project.repositories.frontend && (
              <figure>
                <HiOutlineComputerDesktop />
                <a href={project.repositories.frontend} target="_blank">
                  Frontend
                </a>
              </figure>
            )}

            {project.download ? (
              <figure>
                <PiProjectorScreen />
                <a href={project.download} target="_blank">
                  Descargar app
                </a>
              </figure>
            ) : (
              <figure>
                <PiProjectorScreen />
                <a href={project.link} target="_blank">
                  Proyecto
                </a>
              </figure>
            )}
          </div>
        </div>
      ))}
    </section>
  );
};

export default Projects;
