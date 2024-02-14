import { useEffect } from 'react';
import { useGetProducts } from '../../api/productsApi/useGetProducts';

import axios from '../../api/axios/axios';
import { getProductsApi } from '../../api/productsApi/productsApi';

const ProductsScreen = () => {
    const { products, isLoading, error, isError } = useGetProducts();
    const {data} = products

    console.log(data);

    // useEffect(() => {
    //     (async () => {
    //         const {data} = await getProductsApi();
    //         console.log(data);
    //     })();
    // }, []);

    return <div>ProductsScreen
        <ul>
            {data && data.map(({brand, name}) => {
                return <li>
                    {brand} | {name}
                </li>
            })}
        </ul>
    </div>;
};

export default ProductsScreen;
