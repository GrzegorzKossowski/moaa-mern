import { useMutation } from 'react-query';
import { deletePostByIdJPApi } from '../jsonPlaceholderPostsApi';

const useDeletePostJsonPlaceholder = () => {
    const { isLoading, isError, isSuccess, mutate } = useMutation(
        deletePostByIdJPApi,
        {
            onSuccess: async data => {
                console.log('success deleting post');
            },
            onError: async () => {
                console.log(`Error ocurred deleting post`);
            },
        }
    );
    return { isLoading, isError, isSuccess, mutate };
};

export default useDeletePostJsonPlaceholder;
