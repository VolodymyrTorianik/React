import axios from "axios";

const BASE_URL = "https://jsonplaceholder.typicode.com";


export const getUsers = () => axios.get(`${BASE_URL}/users`);
export const getUserById = (id) => axios.get(`${BASE_URL}/users/${id}`);


export const getPosts = () => axios.get(`${BASE_URL}/posts`);
export const getPostById = (id) => axios.get(`${BASE_URL}/posts/${id}`);


export const getComments = () => axios.get(`${BASE_URL}/comments`);
export const getCommentById = (id) => axios.get(`${BASE_URL}/comments/${id}`);