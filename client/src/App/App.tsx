import { Link, Outlet } from 'react-router-dom';
import './App.css';
import Header from '../components/Header/Header';

import styled from 'styled-components'

function App() {
    return (
        <AppStyled>
            <Header />
            <Outlet />
        </AppStyled>
    );
}

const AppStyled = styled.div``

export default App;
