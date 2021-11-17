import React, { useState, useEffect } from 'react';
import { getAllProjects } from '../api/data/projectsData';
import ProjectCards from '../components/ProjectCards';

export default function ProjectView() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    let isMounted = true;
    getAllProjects().then((projectArray) => {
      if (isMounted) setProjects(projectArray);
    });
    return () => {
      isMounted = false;
    };
  }, []);
  return (
    <div>
      <>
        {projects.map((project) => (
          <ProjectCards key={project.firebaseKey} project={project} />
        ))}
      </>
    </div>
  );
}
