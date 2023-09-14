import React from "react";
//import ProjectList from "./ProjectList";

function ProjectItem({ name, about, technologies }) {
  const techList = technologies.map((techComp) => (
   <span key={techComp}>{techComp}</span>
  ));
  return (
    <div className="project-item">
      <h3>{name}</h3>
      <p>{about}</p>
      <div className="technologies">{techList}</div>
    </div>
  );
}

export default ProjectItem;
