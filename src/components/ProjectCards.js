import React from 'react';
import PropTypes from 'prop-types';

export default function ProjectCards({ project }) {
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
          <a
            href={project.projectAppUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary"
          >
            Deployed App
          </a>
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary"
          >
            Github
          </a>
        </div>
      </div>
    </div>
  );
}

ProjectCards.propTypes = {
  project: PropTypes.shape({
    description: PropTypes.string,
    firebaseKey: PropTypes.string,
    githubUrl: PropTypes.string,
    projectAppUrl: PropTypes.string,
    projectImage: PropTypes.string,
    projectName: PropTypes.string,
  }).isRequired,
};
