import React, { useState } from "react";
import { Grid2 } from "@mui/material";
import ProjectPanel from "../components/ProjectPanel";
import projectData from "../data/projects";

function Projects() {
  const [projects, setProjects] = useState(projectData);

  return (
    <div className="min-h-inherit px-20 pt-32 sm:pt-40 pb-24 flex flex-col sm:flex-row justify-center gap-3">
      <Grid2 container spacing={3.5}>
        {projects.map((project, index) => (
          <Grid2 item key={index}>
            <ProjectPanel project={project} />
          </Grid2>
        ))}
      </Grid2>
    </div>
  );
}

export default Projects;
