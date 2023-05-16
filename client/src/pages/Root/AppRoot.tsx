import React from 'react';
import { Link, Outlet, createBrowserRouter } from 'react-router-dom';
import Header from '../../components/Header/Header';

const AppRoot = () => {
    return (
        <>
            <div>
                <Header />
            </div>
            <Outlet />
            <div>
                <Link to={'/error'}>error</Link>
            </div>
        </>
    );
};

export default AppRoot;
