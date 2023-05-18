import {
    Route,
    createBrowserRouter,
    createRoutesFromElements,
} from 'react-router-dom';
import App from './App';
import AppRootErrorPage from '../pages/Root/AppRootErrorPage';

export const router = createBrowserRouter(
    createRoutesFromElements(
        <Route
            path='/'
            element={<App />}
            errorElement={<AppRootErrorPage />}
        ></Route>
    )
);
