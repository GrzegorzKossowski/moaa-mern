import { requestMockApi } from '../requestMockApi';
import { productMockData } from './productsMockData';

export const productsMockApi = {
    get: () => requestMockApi(productMockData),
    delete: () => requestMockApi(productMockData),
    post: () => requestMockApi(productMockData),
    put: () => requestMockApi(productMockData),
    patch: () => requestMockApi(productMockData),
};
