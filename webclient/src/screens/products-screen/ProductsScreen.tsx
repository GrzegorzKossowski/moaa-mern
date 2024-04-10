import { useEffect } from 'react';
import { useGetProducts } from '../../api/productsApi/useGetProducts';
import { getProductsApi } from '../../api/productsApi/productsApi';
import axios from '../../api/axios/axios';

const ProductsScreen = () => {
    const { products, isLoading, isError } = useGetProducts();

    // useEffect(() => {
    //     (async () => {
    //         const { data } = await getProductsApi();
    //         console.log(data);
    //     })();
    // }, []);

    if (isError) return <>Error...</>;
    if (isLoading) return <>Loading...</>;

    return (
        <>
            {products &&
                products.data.map(props => {
                    return <>Element</>;
                })}
        </>
    );
};

export default ProductsScreen;
