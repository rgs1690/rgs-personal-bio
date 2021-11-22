import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { getAllProjects } from '../api/data/projectsData';
import ProjectCards from '../components/ProjectCards';

const ProjectStyle = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: space-evenly;
  margin-top: 15em;
  img {
    width: 300px;
    margin: auto;
    margin-top: 5px;
    height: 200px;
    object-fit: cover;
    border: 1px solid black;
    border-radius: 100px;
  }
  .card {
    width: 400px;
    text-align: center;
    background-color: white;
    border: 1px solid black;
    margin-bottom: 2em;
    border-radius: 150px;
  }
  .btn {
    margin: 5px;
    background: transparent;
    border: 1px solid black;
    border-radius: 40px;
  }
`;
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
        <ProjectStyle>
          {projects.map((project) => (
            <ProjectCards key={project.firebaseKey} project={project} />
          ))}
        </ProjectStyle>
      </>
    </div>
  );
}
