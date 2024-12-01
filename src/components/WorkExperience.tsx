import React from "react";

import getLanguage from "../utils/language";
import { LangProps } from "../types/types";
import "../assets/css/WorkExperience.css";

const WorkExperience: React.FC<LangProps> = ({ language }) => {
  const { navBar, workExperience } = getLanguage(language);

  return (
    <section id="section-work-experience" data-aos="zoom-in-left">
      <h2 className="title-section">{navBar.workExperience}</h2>
      <div className="work-experience_container">
        {workExperience.map((item, index) => (
          <div
            className="work-experience_item_container"
            key={`${item} ${index}`}
          >
            <h3>{item.position}</h3>
            <div className="work-experience_item_title_container">
              <h3>{item.company}</h3>
              <h5>{item.startDate}</h5>
              {"-"}
              <h5>{item.endDate}</h5>
              <h6>({item.mode})</h6>
            </div>
            <p>{item.body}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default WorkExperience;
