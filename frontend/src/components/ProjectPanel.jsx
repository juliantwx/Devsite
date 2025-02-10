import React, { useRef, useState, useEffect } from "react";
import { Card, CardMedia, CardContent } from "@mui/material";

function ProjectPanel({ project }) {
  const videoRef = useRef(null);
  const [isViewing, setIsViewing] = useState(false);

  useEffect(() => {
    if (isViewing && videoRef.current) {
      videoRef.current.play().catch((error) => {
        console.warn("Autoplay prevented:", error);
      });
    }
  }, [isViewing]);

  const handleMouseEnter = () => {
    setIsViewing(true);
  };

  const handleMouseLeave = () => {
    setIsViewing(false);
    if (videoRef.current) {
      videoRef.current.pause();
      videoRef.current.currentTime = 0;
    }
  };

  const handleOnClick = () => {
    window.open(`${project.pageURL}`, "_blank", "noopener,noreferrer");
  };

  return (
    <Card
      sx={{
        width: 350,
        borderRadius: "10px",
        boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.2)",
        transition: "transform 0.15s ease-in-out",
        "&:hover": {
          transform: "scale(1.05)",
          boxShadow: 3,
        },
        cursor: "pointer",
      }}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={handleOnClick}
    >
      <CardMedia
        sx={{
          height: 200,
          width: 350,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#1d1d1d",
        }}
      >
        {isViewing && project.videoURL ? (
          <video
            ref={videoRef}
            src={project.videoURL}
            style={{
              height: "100%",
              width: project.videoWidth ?? "100%",
              objectFit: "cover",
            }}
            loop
            muted
            preload="auto"
          />
        ) : (
          <img
            src={project.thumbnailURL}
            alt={project.name}
            style={{
              height: "100%",
              width: project.thumbnailWidth ?? "100%",
              objectFit: "cover",
            }}
          />
        )}
      </CardMedia>
      <CardContent>
        <h1 className="text-lg">{project.name}</h1>
        <p className="pb-4 text-xs italic">{project.type}</p>
        <p className="text-sm text-justify line-clamp-4">{project.desc}</p>
        {project.tags && (
          <p className="pt-4 text-xs text-gray italic line-clamp-2">
            Tags: {project.tags.join(", ")}
          </p>
        )}
      </CardContent>
    </Card>
  );
}

export default ProjectPanel;
