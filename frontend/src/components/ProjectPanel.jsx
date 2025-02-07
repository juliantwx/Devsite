import React, { useRef } from "react";
import { Card, CardMedia, CardContent } from "@mui/material";

function ProjectPanel({ project }) {
  const videoRef = useRef(null);

  const handleMouseEnter = () => {
    if (videoRef.current) {
      videoRef.current.volume = 0.3;
      videoRef.current.play();
    }
  };

  const handleMouseLeave = () => {
    if (videoRef.current) {
      videoRef.current.pause();
      videoRef.current.currentTime = 0;
    }
  };

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
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <CardMedia
        sx={{
          height: 150,
          width: 250,
        }}
      >
        <video
          ref={videoRef}
          src="/videos/GoGoldCastle.webm"
          style={{ width: "100%", height: "100%", objectFit: "cover" }}
          loop
        />
      </CardMedia>
      <CardContent>{project}</CardContent>
    </Card>
  );
}

export default ProjectPanel;
