import React from "react";
import { Card, CardMedia, CardContent } from "@mui/material";

function ProjectPanel({ project }) {
  return (
    <Card
      sx={{
        maxWidth: 350,
        transition: "transform 0.15s ease-in-out",
        "&:hover": {
          transform: "scale(1.05)",
          boxShadow: 3,
        },
      }}
    >
      <CardMedia
        sx={{ height: 150, width: 250 }}
        image="/images/SiteIconBlack.png"
      />
      <CardContent>{project}</CardContent>
    </Card>
  );
}

export default ProjectPanel;
