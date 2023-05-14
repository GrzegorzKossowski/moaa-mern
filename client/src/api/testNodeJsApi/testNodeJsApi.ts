import axios from 'axios';
import { useApiMocks } from '../config';
import { getTestNodeJsApiMock } from './mocks/testNodeJsApiMock';

/**
 * Gets all tests from api
 * @returns tests
 */
export const getTestsJPApi = () => {
    return useApiMocks
        ? getTestNodeJsApiMock()
        : axios.get('http://localhost:5000/api/v1/test').then(response => {
              const data = response.data
              return data;
          });
};
