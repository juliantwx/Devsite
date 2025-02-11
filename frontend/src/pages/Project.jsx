import React, { useEffect, useState } from "react";

function Project() {
  const [projectData, setProjectData] = useState(null);

  useEffect(() => {
    // Retrieve project data from opening tab
    const data = window.opener?.projectData;
    if (data) setProjectData(data);
  }, []);

  return (
    <div className="min-h-inherit pt-32 sm:pt-40 pb-24 flex justify-center">
      {projectData && projectData.name}
      {projectData && projectData.desc}
    </div>
  );
}

export default Project;
