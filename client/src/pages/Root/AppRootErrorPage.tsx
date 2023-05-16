import React from 'react';
import { Link, useRouteError } from 'react-router-dom';

const AppRootErrorPage = () => {
    const error: any = useRouteError();
    console.error(error);

    return (
        <>
            <div id='error-page' style={{textAlign: 'center'}}>
                <h1>Oops!</h1>
                <p>Sorry, an unexpected error has occurred.</p>
                <p>
                    <i>{error.statusText || error.message}</i>
                </p>
                <Link to={'/'}>Home page</Link>
            </div>
        </>
    );
};

export default AppRootErrorPage;
