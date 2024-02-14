/* eslint-disable react-refresh/only-export-components */
import {
    Route,
    createBrowserRouter,
    createRoutesFromElements,
} from 'react-router-dom';
import RootLayout from './RootLayout';
import HomeScreen from '../screens/home-screen/HomeScreen';
import { LINKS } from './links.config';
import { Suspense, lazy } from 'react';

const CartScreen = lazy(() => import('../screens/cart-screen/CartScreen'));
const ProductsScreen = lazy(
    () => import('../screens/products-screen/ProductsScreen')
);
const FavoritesScreen = lazy(
    () => import('../screens/favorites-screen/FavoritesScreen')
);

export const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path='/' element={<RootLayout />}>
            <Route index={true} element={<HomeScreen />} />
            <Route
                path={LINKS.PRODUCTS}
                element={
                    <Suspense
                        fallback={<>Loading...</>}
                        children={<ProductsScreen />}
                    />
                }
                errorElement={<>Error...</>}
            />
            <Route
                path={LINKS.CART}
                element={
                    <Suspense
                        fallback={<>Loading...</>}
                        children={<CartScreen />}
                    />
                }
                errorElement={<>Error...</>}
            />
            <Route
                path={LINKS.FAVORITES}
                element={
                    <Suspense
                        fallback={<>Loading...</>}
                        children={<FavoritesScreen />}
                    />
                }
                errorElement={<>Error...</>}
            />
        </Route>
    )
);
