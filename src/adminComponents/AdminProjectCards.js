import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { deleteProject } from '../api/data/projectsData';

export default function AdminProjectCards({ project, setProjects }) {
  const handleClick = (method) => {
    if (method === 'delete') {
      deleteProject(project.firebaseKey).then((projectArray) => setProjects(projectArray));
    }
  };
  return (
    <div>
      <div className="card">
        <img
          src={project.projectImage}
          className="card-img-top"
          alt="projectImage"
        />
        <div className="card-body">
          <h5 className="card-title">{project.projectName}</h5>
          <p className="card-text">{project.description}</p>
          <a href={project.projectAppUrl} className="btn btn-primary">
            Deployed App
          </a>
          <a href={project.githubUrl} className="btn btn-primary">
            Github
          </a>
          <button
            type="button"
            onClick={() => handleClick('delete')}
            className="btn btn-danger"
          >
            DELETE
          </button>
          <Link
            to={`/adminEditView/${project.firebaseKey}`}
            className="btn btn-danger"
          >
            UPDATE
          </Link>
        </div>
      </div>
    </div>
  );
}

AdminProjectCards.propTypes = {
  project: PropTypes.shape({
    description: PropTypes.string,
    firebaseKey: PropTypes.string,
    githubUrl: PropTypes.string,
    projectAppUrl: PropTypes.string,
    projectImage: PropTypes.string,
    projectName: PropTypes.string,
  }).isRequired,
  setProjects: PropTypes.func.isRequired,
};
