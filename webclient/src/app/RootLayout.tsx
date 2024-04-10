import { Outlet } from 'react-router-dom';
import Navigation from '../components/navigation/Navigation';

const RootLayout = () => {
    return (
        <main>
            <Navigation />
            <Outlet />
        </main>
    );
};

export default RootLayout;
