import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { useHistory } from 'react-router-dom';
import { createProject } from '../api/data/projectsData';

const initialState = {
  projectName: '',
  projectImage: '',
  projectAppUrl: '',
  description: '',
  githubUrl: '',
};
export default function ProjectForm({ project = {} }) {
  const [formInput, setFormInput] = useState(initialState);
  const history = useHistory();
  useEffect(() => {
    if (project.firebaseKey) {
      setFormInput({
        projectName: project.projectName,
        projectImage: project.projectImage,
        projectAppUrl: project.AppUrl,
        description: project.description,
        githubUrl: project.githubUrl,
      });
    }
  }, [project]);

  const handleChange = (e) => {
    setFormInput((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };
  const resetForm = () => {
    setFormInput(initialState);
  };
  const handleClick = (e) => {
    e.preventDefault();
    if (project.firebaseKey) {
      // update promise.then=>
      history.push('/projects');
    } else {
      createProject({ ...formInput }).then(() => {
        resetForm();
        history.push('/projects');
      });
    }
  };
  return (
    <div>
      <form onSubmit={handleClick}>
        <div className="form-group">
          <label htmlFor="projectName">Project Name</label>
          <input
            type="text"
            name="projectName"
            className="form-control"
            id="projectName"
            placeholder="Project Name"
            value={formInput.projectName || ''}
            onChange={(e) => handleChange(e)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="projectImage">Project Screenshot</label>
          <input
            type="text"
            name="projectImage"
            className="form-control"
            id="projectImage"
            placeholder="Project Image"
            value={formInput.projectImage || ''}
            onChange={(e) => handleChange(e)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="projectAppUrl">Project App Url</label>
          <input
            type="text"
            name="projectAppUrl"
            className="form-control"
            id="projectAppUrl"
            placeholder="Project App Url"
            value={formInput.projectAppUrl || ''}
            onChange={(e) => handleChange(e)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="description">Project Description</label>
          <input
            type="text"
            name="description"
            className="form-control"
            id="projectDescription"
            placeholder="Project Description"
            value={formInput.description || ''}
            onChange={(e) => handleChange(e)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="githubUrl">Github Url</label>
          <input
            type="text"
            name="githubUrl"
            className="form-control"
            id="githubUrl"
            placeholder="Github Url"
            value={formInput.githubUrl || ''}
            onChange={(e) => handleChange(e)}
          />
        </div>

        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
}

ProjectForm.propTypes = {
  project: PropTypes.shape({}).isRequired,
};
