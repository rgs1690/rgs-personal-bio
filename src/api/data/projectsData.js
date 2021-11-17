import axios from 'axios';
import firebaseConfig from '../apiKeys';

const baseURL = firebaseConfig.databaseURL;
const getAllProjects = () => new Promise((resolve, reject) => {
  axios
    .get(`${baseURL}/projects.json`)
    .then((response) => resolve(Object.values(response.data)))
    .catch(reject);
});
const createProject = (obj) => new Promise((resolve, reject) => {
  axios.post(`${baseURL}/projects.json`, obj).then((response) => {
    const firebaseKey = response.data.name;
    axios
      .patch(`${baseURL}/projects/${firebaseKey}.json`, { firebaseKey })
      .then(() => {
        getAllProjects().then(resolve);
      })
      .catch(reject);
  });
});
const deleteProject = (firebaseKey) => new Promise((resolve, reject) => {
  axios
    .delete(`${baseURL}/projects/${firebaseKey}.json`)
    .then(() => getAllProjects().then(resolve))
    .catch(reject);
});
const getSingleProject = (firebaseKey) => new Promise((resolve, reject) => {
  axios
    .get(`${baseURL}/projects/${firebaseKey}.json`)
    .then((response) => resolve(response.data))
    .catch(reject);
});

const updateProject = (projectObj) => new Promise((resolve, reject) => {
  axios
    .patch(`${baseURL}/projects/${projectObj.firebaseKey}.json`, projectObj)
    .then(() => getAllProjects().then(resolve))
    .catch(reject);
});
export {
  getAllProjects,
  createProject,
  deleteProject,
  updateProject,
  getSingleProject,
};
