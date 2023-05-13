import axios from 'axios';
import { useApiMocks } from '../config';
import {
    getPostsJPApiMock,
    getPostByIdJPApiMopck,
    createPostJPApiMock,
    updatePostJPApiMock,
} from './mocks/jsonPlaceholderPostsApiMock';
import { JsonPlaceholderPostType } from '../../shared/types';

export const getPostsJPApi = () => {
    return useApiMocks
        ? getPostsJPApiMock()
        : axios
              .get('https://jsonplaceholder.typicode.com/posts')
              .then(response => {
                  return response.data;
              });
};

export const getPostByIdJPApi = (id: number) => {
    return useApiMocks
        ? getPostByIdJPApiMopck(id)
        : axios
              .get(`https://jsonplaceholder.typicode.com/posts/${id}`)
              .then(response => {
                  return response.data;
              });
};

export const createPostJPApi = (newPost: JsonPlaceholderPostType) => {
    return useApiMocks
        ? createPostJPApiMock()
        : axios
              .post(`https://jsonplaceholder.typicode.com/posts`, newPost)
              .then(response => {
                  return response.data;
              });
};

export const updatePostJPApi = (newPost: JsonPlaceholderPostType) => {
    const { id } = newPost;
    return useApiMocks
        ? updatePostJPApiMock()
        : axios
              .put(`https://jsonplaceholder.typicode.com/posts/${id}`, newPost)
              .then(response => {
                  return response.data;
              });
};
