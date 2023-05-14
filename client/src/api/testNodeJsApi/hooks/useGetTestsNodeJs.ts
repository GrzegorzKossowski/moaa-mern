import { useQuery } from 'react-query';
import { QueryKeys } from '../../../shared/queryKeys';
import { getTestsJPApi } from '../testNodeJsApi';

const useGetTestsNodeJs = () => {
    const {
        isLoading,
        error,
        data: response,
    } = useQuery([QueryKeys.GET_TESTS_NODEJS], getTestsJPApi, {
        onSuccess: () => {
            console.log('success');
        },
        onError: () => {
            console.log(`error`);
        },
    });
    return { isLoading, error, response };
};

export default useGetTestsNodeJs;
