import axios from 'axios';
import { useApiMocks } from '../config';
import { getCommentsByPostIdJPApiMock } from './mocks/jsonPlaceholderCommentsApiMock';

export const getCommentsByPostIdJPApi = (id: number) => {
    return useApiMocks
        ? getCommentsByPostIdJPApiMock(id)
        : axios.get(`https://jsonplaceholder.typicode.com/comments`, {
              params: {
                  postId: id,
              },
          });
};
