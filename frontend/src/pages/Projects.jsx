import React, { useState } from "react";
import { Grid2 } from "@mui/material";
import ProjectPanel from "../components/ProjectPanel";
import projectData from "../data/projects";

function Projects() {
  const [projects, setProjects] = useState(projectData);

  return (
    <div className="min-h-inherit pt-32 sm:pt-40 pb-24 flex justify-center">
      <Grid2
        container
        columnSpacing={10}
        rowSpacing={7}
        sx={{
          maxWidth: "1250px",
          justifyContent: "space-evenly",
        }}
      >
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
