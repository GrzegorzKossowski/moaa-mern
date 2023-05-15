import React from 'react';
import { loginUserApi } from '../authUserApi';
import { User } from '../../../shared/types';

const useAuhtUserLogin = () => {
    const loginUser = (user: User) => {
        return loginUserApi(user);
    };
    return { loginUser };
};

export default useAuhtUserLogin;
