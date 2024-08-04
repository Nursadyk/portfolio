import React from "react";
import scss from "./Project.module.scss";
const Project = () => {
  return (
    <section id="project" className={scss.project}>
      <div className="container">
        <div className={scss.content}>
          <h1>Project</h1>
        </div>
      </div>
    </section>
  );
};

export default Project;
