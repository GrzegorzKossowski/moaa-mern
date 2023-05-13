import { useQuery } from 'react-query';
import { getPostsJPApi } from '../jsonPlaceholderPostsApi';
import { QueryKeys } from '../../../shared/queryKeys';

const useGetPostsJsonPlaceholder = () => {
    const { isLoading, error, data } = useQuery(
        QueryKeys.GET_POSTS_JSON_PLACEHOLDER,
        getPostsJPApi,
        {
            onSuccess: () => {
                console.log('success');
            },
            onError: () => {
                console.log(`error`);
            },
        }
    );
    return { isLoading, error, data };
};

export default useGetPostsJsonPlaceholder;
