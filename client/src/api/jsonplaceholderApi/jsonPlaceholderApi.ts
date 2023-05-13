import axios from 'axios';
import { useApiMocks } from '../config';
import { jsonPlaceholderPostsApiMock } from './jsonPlaceholderApiMock';

export const getJsonPlaceholderPostsApi = () => {
    return useApiMocks
        ? jsonPlaceholderPostsApiMock()
        : axios
              .get('https://jsonplaceholder.typicode.com/posts')
              .then(response => {
                  return response.data;
              });
};
