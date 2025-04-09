import axios from 'axios';

const baseUrl = 'https://jsonplaceholder.typicode.com/comments';

export function getComments() {
  return axios.get(baseUrl);
}

export function getCommentById(id) {
  return axios.get(`${baseUrl}/${id}`);
}
