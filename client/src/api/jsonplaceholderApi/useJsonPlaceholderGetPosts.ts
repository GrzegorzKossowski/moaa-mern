import React from 'react';
import { useQuery } from 'react-query';
import { getJsonPlaceholderPostsApi } from './jsonPlaceholderApi';

const useJsonPlaceholderGetPosts = () => {
    const { isLoading, error, data } = useQuery(
        'someKey',
        getJsonPlaceholderPostsApi,
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

export default useJsonPlaceholderGetPosts;
