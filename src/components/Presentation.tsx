import React, { useRef, useState } from "react";
import { LangProps } from "../types/types";
import technologiesList from "../utils/technologiesList";
import getLanguage from "../utils/language";
import "../assets/css/Presentation.css";

const Presentation: React.FC<LangProps> = ({ language }) => {
  const image = useRef<HTMLDivElement>(null);
  const [isRotate, setIsRotate] = useState<boolean>(false);
  
  const {presentation: history, presentationRol} = getLanguage(language);

  const rotateImage = () => {
    setIsRotate((prev) => !prev);
    isRotate
      ? image.current?.removeAttribute("style")
      : image.current?.setAttribute("style", "transform: rotateY(180deg);");
  };
  return (
    <section id="section-presentation" data-aos="fade-up">
      <h1 translate="no">Diego Nacimiento</h1>
      <h2 translate="no">{ presentationRol }</h2>
      <div className="container-bio-card">
        <div className="container-img-presentation">
          <div id="img-presentation" ref={image} onClick={rotateImage}></div>
        </div>
        <p id="history">{history}</p>
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
