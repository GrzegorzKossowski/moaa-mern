import axios from 'axios';
import { useApiMocks } from '../config';
import { authUserApiMock } from './mocks/authUserApiMock';
import { User } from '../../shared/types';

export const loginUserApi = (user: User) => {
    return useApiMocks
        ? authUserApiMock()
        : axios
              .post(`http://localhost:5000/api/v1/users/login`, { ...user })
              .then(response => {
                  return response.data;
              });
};
