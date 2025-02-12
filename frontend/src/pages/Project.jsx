import React, { useEffect, useState } from "react";
import projects from "../data/projects";

function Project() {
  const [projectData, setProjectData] = useState(null);

  useEffect(() => {
    // Retrieve project data based on path name
    const pathName = window.location.pathname;
    const project = projects.find((p) => p.pageURL === pathName);

    if (project) setProjectData(project);
  }, []);

  return (
    <div className="min-h-inherit pt-32 sm:pt-40 pb-24 flex justify-center">
      {projectData && projectData.name}
      {projectData && projectData.desc}
    </div>
  );
}

export default Project;
