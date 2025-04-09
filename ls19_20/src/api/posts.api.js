import axios from 'axios';

const baseUrl = 'https://jsonplaceholder.typicode.com/posts';

export function getPosts() {
  return axios.get(baseUrl);
}

export function getPostById(id) {
  return axios.get(`${baseUrl}/${id}`);
}
