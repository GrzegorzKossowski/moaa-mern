import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <>
            <h4>Header</h4>
            <Link to={'about'}>About</Link> | <Link to={'login'}>login</Link>
        </>
    );
};

export default Header;
