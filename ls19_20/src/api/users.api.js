import axios from 'axios';

const baseUrl = 'https://jsonplaceholder.typicode.com/users';

export function getUsers() {
  return axios.get(baseUrl);
}

export function getUserById(id) {
  return axios.get(`${baseUrl}/${id}`);
}
