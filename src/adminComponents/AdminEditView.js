import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getSingleProject } from '../api/data/projectsData';
import ProjectForm from './ProjectForm';

export default function AdminEditView() {
  const [editItem, setEditItem] = useState({});
  const { key } = useParams();
  useEffect(() => {
    let isMounted = true;
    if (isMounted) {
      getSingleProject(key).then(setEditItem);
    }
    return () => {
      isMounted = false;
    };
  }, []);
  return (
    <div>
      <ProjectForm project={editItem} />
    </div>
  );
}
