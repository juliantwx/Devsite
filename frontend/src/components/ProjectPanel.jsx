import React, { useRef, useState } from "react";
import { Card, CardMedia, CardContent, CircularProgress } from "@mui/material";

function ProjectPanel({ project }) {
  const videoRef = useRef(null);
  const [isViewing, setIsViewing] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleMouseEnter = () => {
    if (videoRef.current) {
      setIsViewing(true);
      setIsLoading(true);
      videoRef.current
        .play()
        .then(() => {
          setIsLoading(false); // Hide spinner when video starts playing
        })
        .catch((error) => {
          console.warn("Autoplay prevented:", error);
          setIsLoading(false);
        });
    }
  };

  const handleMouseLeave = () => {
    if (videoRef.current) {
      setIsViewing(false);
      videoRef.current.pause();
    }
  };

  const handleOnClick = () => {
    // Open a new tab displaying the generic project page
    const newTab = window.open(project.pageURL, "_blank");

    // Set the project data of the newly created tab
    if (newTab) newTab.projectData = project;
  };

  return (
    <Card
      sx={{
        width: 350,
        height: 428,
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
          backgroundColor: "#1d1d1d",
        }}
      >
        <div
          style={{
            position: "relative",
            height: "100%",
            width: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          {/* Video in the background */}
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

          {isLoading && <CircularProgress style={{ position: "absolute" }} />}

          {/* Image overlay, fades out on hover */}
          <img
            src={project.thumbnailURL}
            alt={project.name}
            style={{
              position: "absolute",
              height: "100%",
              width: project.thumbnailWidth ?? "100%",
              objectFit: "cover",
              transition: "opacity 0.3s ease-in-out",
              opacity: isViewing ? 0 : 1,
            }}
          />
        </div>
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
