import React, { useEffect, useState, useRef } from "react";
import projects from "../data/projects";
import { CircularProgress } from "@mui/material";

function Project() {
  const videoRef = useRef(null);
  const [project, setProject] = useState(null);
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

  useEffect(() => {
    // Retrieve project data based on path name
    const pathName = window.location.pathname;
    setProject(projects.find((p) => p.pageURL === pathName));
  }, []);

  return (
    <div className="min-h-inherit py-36 flex justify-center">
      {project && (
        <div className="flex justify-center flex-col w-[75%] sm:w-[50%]">
          <div
            className="relative w-full aspect-[16/9] flex justify-center items-center bg-black shadow-[8px_8px_10px_rgba(0,0,0,0.3)] rounded-xl overflow-hidden"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <video
              ref={videoRef}
              src={project.videoURL}
              style={{
                position: "absolute",
                height: "100%",
                width: project.videoWidth ?? "100%",
                objectFit: "cover",
              }}
              autoPlay
              loop
              muted
              playsInline
              preload="auto"
            />

            {isLoading && (
              <CircularProgress
                style={{
                  position: "absolute",
                  minWidth: "25px",
                  minHeight: "25px",
                  width: "80px",
                  height: "80px",
                }}
              />
            )}

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
          <div className="my-7">
            <h1 className="text-5xl">{project.name}</h1>
            <p className="mx-1 italic opacity-[0.7]">{project.type}</p>
            <p className="mx-1 italic opacity-[0.7]">
              {project.tags.join(", ")}
            </p>
          </div>
          <p className="text-lg text-justify">{project.desc}</p>
          {/* <div className="my-7">
            <p className="text-3xl">Contributions</p>
            <p className=""></p>
          </div> */}
        </div>
      )}
    </div>
  );
}

export default Project;
