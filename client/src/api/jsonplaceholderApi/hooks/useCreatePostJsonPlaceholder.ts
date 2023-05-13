import { useMutation } from 'react-query';
import { createPostJPApi } from '../jsonPlaceholderPostsApi';
import { JsonPlaceholderPostType } from '../../../shared/types';

const useCreatePostJsonPlaceholder = () => {
    const { isLoading, isError, isSuccess, mutate } = useMutation(
        createPostJPApi,
        {
            onSuccess: async data => {
                console.log('success creating post', data);
            },
            onError: async () => {
                console.log(`Error ocurred`);
            },
        }
    );
    return { isLoading, isError, isSuccess, mutate };
};

export default useCreatePostJsonPlaceholder;
