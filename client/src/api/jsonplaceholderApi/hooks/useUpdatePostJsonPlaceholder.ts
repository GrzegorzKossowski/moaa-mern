import { useMutation } from 'react-query';
import { updatePostJPApi } from '../jsonPlaceholderPostsApi';

const useUpdatePostJsonPlaceholder = () => {
    const { isLoading, isError, isSuccess, mutate } = useMutation(
        updatePostJPApi,
        {
            onSuccess: async data => {
                console.log('success updating post', data);
            },
            onError: async () => {
                console.log(`Error ocurred updating post`);
            },
        }
    );
    return { isLoading, isError, isSuccess, mutate };
};

export default useUpdatePostJsonPlaceholder;
