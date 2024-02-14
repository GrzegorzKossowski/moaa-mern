import { useQuery } from 'react-query';
import { getProductsApi } from './productsApi';

export const useGetProducts = () => {
    const {
        isLoading,
        isError,
        error,
        data: products,
    } = useQuery('products', getProductsApi, {
        select: data => data,
        onSuccess: () => {
            console.log('success');
        },
        onError: () => {
            console.log('error');
        },
    });

    return { isLoading, isError, error, products };
};
