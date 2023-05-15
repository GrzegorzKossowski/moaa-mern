import useGetTestsNodeJs from '../api/testNodeJsApi/hooks/useGetTestsNodeJs';
import { getTestsJPApi } from '../api/testNodeJsApi/testNodeJsApi';
import LoginForm from '../components/LoginForm/LoginForm';
import TestsNodeJs from '../components/TestNodeJs/TestsNodeJs';
import './App.css';
import { useEffect } from 'react';

function App() {
    return (
        <>
            {/* <TestsNodeJs /> */}
            <LoginForm />
        </>
    );
}

export default App;
