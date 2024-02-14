import { useApiMocks } from '../config';
import api from '../axios/axios';
import { productsMockApi } from './productsMockApi';

export const getProductsApi = () => {
    return useApiMocks ? productsMockApi.get() : api.get('products');
};

export const getProductByIdApi = () => {
    return useApiMocks ? productsMockApi.get() : api.get('products');
};
