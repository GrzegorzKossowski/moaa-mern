import { request } from '../../requestMock';

export const authUserApiMock = () => {
    return request({
        success: true,
        message: 'User authenticated, token created.',
        email: 'john@doe.com',
        password: 'john123',
        token: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImpvaG5AZG9lLmNvbSIsImlhdCI6MTY4NDE0MDM1NCwiZXhwIjoxNjg0MjI2NzU0fQ.IhuvCBnZvotzI-k26Sg9JLp2FJtTEzoB49oYUwuElZk',
        data: [],
    });
};
