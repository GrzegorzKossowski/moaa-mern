import { useQuery } from 'react-query';
import { getPostByIdJPApi } from '../jsonPlaceholderPostsApi';
import { QueryKeys } from '../../../shared/queryKeys';
import { JsonPlaceholderPostType } from '../../../shared/types';

const useGetPostIdJsonPlaceholder = (id: number) => {
    const {
        isLoading,
        error,
        data: post,
    } = useQuery<JsonPlaceholderPostType>(
        [QueryKeys.GET_POSTID_JSON_PLACEHOLDER, id],
        () => getPostByIdJPApi(id),
        {
            onSuccess: () => {
                console.log('success');
            },
            onError: () => {
                console.log(`error`);
            },
        }
    );
    return { isLoading, error, post };
};

export default useGetPostIdJsonPlaceholder;
