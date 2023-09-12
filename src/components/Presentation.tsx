import React, { useRef, useState } from "react";
import technologiesList from "../utils/technologiesList";
import "../assets/Presentation.css";

const Presentation: React.FC = () => {
  const image = useRef<HTMLDivElement>(null);
  const [isRotate, setIsRotate] = useState(false);

  const rotateImage = () => {
    setIsRotate((prev) => !prev);
    isRotate
      ? image.current?.removeAttribute("style")
      : image.current?.setAttribute("style", "transform: rotateY(180deg);");
  };
  return (
    <section className="section-presentation">
      <h1>Diego Nacimiento</h1>
      <h2>Full stack developer</h2>
      <div className="container-bio-card">
        <div className="container-img-presentation">
          <div id="img-presentation" ref={image} onClick={rotateImage}></div>
        </div>
        <p id="history">
          Soy un programador Jr en busca de su primer trabajo. Programo y
          aprendo todos los días, siempre busco mejorar como persona y como
          profesional. Conocí el mundo IT en abril del 2022, y en poco más de un
          año he aprendido las herramientas suficientes para ser full stack. Me
          encanta crear y solucionar todo lo que imagine
        </p>
      </div>
      <div className="container-tech-list">
        {technologiesList.map((tech, index) => (
          <figure key={index}>
            <div
              style={{
                backgroundImage: `url("${tech.icon}")`,
                height: "50px",
                width: "50px",
                backgroundSize: "contain",
                backgroundRepeat: "no-repeat",
              }}
            ></div>

            <p>{tech.name}</p>
          </figure>
        ))}
      </div>
    </section>
  );
};

export default Presentation;
