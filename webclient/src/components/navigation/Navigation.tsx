import { NavLink } from 'react-router-dom';

const Navigation = () => {
    return (
        <header className='border-b-slate-500 border-b-2 py-2 px-4'>
            <nav className='flex'>
                <ul className='flex gap-4'>
                    <li>
                        <NavLink to={'/'}>Brand</NavLink>
                    </li>
                    <li>
                        <NavLink to={'products'}>Products</NavLink>
                    </li>
                    {/* <li>
                        <NavLink to={'/'}>Hot Deals</NavLink>
                    </li> */}
                    <li>
                        <NavLink to={'cart'}>Cart</NavLink>
                    </li>
                    <li>
                        <button>Theme</button>
                    </li>
                    <li>
                        <NavLink to={'favorites'}>Favs</NavLink>
                    </li>
                </ul>
                <button className='ml-auto'>Profile</button>
            </nav>
        </header>
    );
};

export default Navigation;
