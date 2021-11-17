import React, { useState, useEffect } from 'react';
import { getAllProjects } from '../api/data/projectsData';
import AdminProjectCards from './AdminProjectCards';

export default function EditProjectView() {
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
          <AdminProjectCards
            key={project.firebaseKey}
            project={project}
            setProjects={setProjects}
          />
        ))}
      </>
    </div>
  );
}
