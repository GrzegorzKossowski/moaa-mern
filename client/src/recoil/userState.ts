import { atom } from 'recoil';
import { RecoilKeys } from '../shared/recoilKeys';

export const userState = atom({
    key: RecoilKeys.CURRENT_USER,
    default: {
        email: 'john@doe.com',
        firstName: 'John',
        lastName: 'Doe',
        token: 'no token',
    },
});
