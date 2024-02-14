import { Outlet } from 'react-router-dom';
import Navigation from '../components/navigation/Navigation';

type Props = {};

const RootLayout = (props: Props) => {
    return (
        <main className='flex flex-col min-h-screen'>
            <Navigation />
            <div className='flex-1'>
                <Outlet />
            </div>
            <footer className=''>footer</footer>
        </main>
    );
};

export default RootLayout;
