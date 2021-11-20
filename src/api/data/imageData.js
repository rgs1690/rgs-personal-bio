import axios from 'axios';
import firebaseConfig from '../apiKeys';

const baseURL = firebaseConfig.databaseURL;

const getImages = () => new Promise((resolve, reject) => {
  axios
    .get(`${baseURL}/images.json`)
    .then((response) => resolve(Object.values(response.data || {})))
    .catch((error) => reject(error));
});
const postImages = (url) => new Promise((resolve, reject) => {
  axios
    .post(`${baseURL}/images.json`, { url })
    .then(resolve)
    .catch((error) => reject(error));
});

export { getImages, postImages };
