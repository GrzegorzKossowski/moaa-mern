import React from 'react';
import { useRecoilValue, useSetRecoilState } from 'recoil';
import { userState } from '../../recoil/userState';
import useAuhtUserLogin from '../../api/authApi/hooks/useAuhtUserLogin';
import { faker } from '@faker-js/faker';

const LoginForm = () => {
    const { email, firstName, lastName, token } = useRecoilValue(userState);
    const setNewUser = useSetRecoilState(userState);
    const { loginUser } = useAuhtUserLogin();

    const handleSubmit = async () => {
        console.log(`handle submit`);
        let fName = faker.person.firstName();
        let lName = faker.person.lastName();
        let mail = `${fName.toLowerCase()}.${lName.toLowerCase()}@${faker.internet.domainName()}`;
        let user = {
            firstName: fName,
            lastName: lName,
            email: mail,
            password: faker.internet.password(),
        };
        const newUser = await loginUser(user);
        console.log(newUser);
        setNewUser(newUser);
    };

    return (
        <>
            <h4>Recoil state</h4>
            <div>
                {firstName} {lastName} | {email}
            </div>
            <div>
                <label htmlFor='email'>email:</label>
            </div>
            <input type='email' name='email' id='email' />
            <div>
                <label htmlFor='password'>password:</label>
            </div>
            <input type='password' name='password' id='password' />
            <div style={{ marginTop: '10px' }}>
                <button
                    type='button'
                    name='button'
                    id='button'
                    onClick={handleSubmit}
                >
                    Login
                </button>
            </div>
            <div>{token}</div>
        </>
    );
};

export default LoginForm;
