import { Link, Outlet } from 'react-router-dom';
import './App.css';
import Header from '../components/Header/Header';

function App() {
    return (
        <>
            <div>
                <Header />
            </div>
            <div>
                <Outlet />
            </div>
            <div>
                <Link to={'/error'}>error</Link>
            </div>
        </>
    );
}

export default App;
