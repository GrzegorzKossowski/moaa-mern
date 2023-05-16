import React from 'react';
import App from './App';
import { QueryClient, QueryClientProvider } from 'react-query';
import { RecoilRoot } from 'recoil';
import { Link, Outlet, RouterProvider, createBrowserRouter } from 'react-router-dom';
import AppRootErrorPage from '../pages/Root/AppRootErrorPage';

const queryClient = new QueryClient();

const router = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        errorElement: <AppRootErrorPage />,
        children: [
            {
                path: 'about',
                element: <>about</>,
            },
            {
                path: 'login',
                element: (
                    <>
                        <Link to={'new'}>new</Link> |{' '}
                        <Link to={'old'}>old</Link>
                        <div>
                            <Outlet />
                        </div>
                    </>
                ),
                children: [
                    { path: 'new', element: <>New</> },
                    { path: 'old', element: <>Old</> },
                ],
            },
        ],
    },
]);


const AppWrapper = () => {
    return (
        <RecoilRoot>
            <QueryClientProvider client={queryClient}>
                <RouterProvider router={router} />
            </QueryClientProvider>
        </RecoilRoot>
    );
};

export default AppWrapper;
