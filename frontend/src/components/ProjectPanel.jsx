import React, { useRef, useState, useEffect } from "react";
import { Card, CardMedia, CardContent } from "@mui/material";

function ProjectPanel({ project }) {
  const videoRef = useRef(null);
  const [isViewing, setIsViewing] = useState(false);

  useEffect(() => {
    if (isViewing && videoRef.current) {
      videoRef.current.volume = 0.15;
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
        }}
      >
        {isViewing && project.videoURL ? (
          <video
            ref={videoRef}
            src={project.videoURL}
            style={{ width: "100%", height: "100%", objectFit: "cover" }}
            loop
            muted
          />
        ) : (
          <img
            src={project.thumbnailURL}
            alt={project.name}
            style={{
              maxWidth: "150px",
              maxHeight: "150px",
              objectFit: "cover",
              display: "block",
              margin: "auto",
            }}
          />
        )}
      </CardMedia>
      <CardContent>
        <h1 className="text-lg">{project.name}</h1>
        <p className="text-xs italic">{project.type}</p>
        <p className="py-4 text-sm text-justify">
          {project.desc.length > 250
            ? `${project.desc.slice(0, 250)}...`
            : project.desc}
        </p>
        {project.tags && (
          <div className="flex flex-row gap-2 text-xs text-gray italic">
            <p>Tags:</p>
            <p>{project.tags.join(", ")}</p>
          </div>
        )}
      </CardContent>
    </Card>
  );
}

export default ProjectPanel;
