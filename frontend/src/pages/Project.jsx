import React, { useEffect, useState } from "react";
import projects from "../data/projects";

function Project() {
  const [project, setProject] = useState(null);

  useEffect(() => {
    // Retrieve project data based on path name
    const pathName = window.location.pathname;
    setProject(projects.find((p) => p.pageURL === pathName));
  }, []);

  return (
    <div className="min-h-inherit py-32 flex justify-center">
      {project && (
        <div className="flex justify-center flex-col w-[75%] sm:w-[50%]">
          <div className="relative rounded-xl overflow-hidden">
            <video
              src={project.videoURL}
              style={{
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
                opacity: 1,
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
          <div></div>
        </div>
      )}
    </div>
  );
}

export default Project;
