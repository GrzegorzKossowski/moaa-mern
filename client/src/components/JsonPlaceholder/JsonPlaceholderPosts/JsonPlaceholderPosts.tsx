import React from 'react';
import useGetPostsJsonPlaceholder from '../../../api/jsonplaceholderApi/hooks/useGetPostsJsonPlaceholder';
import { JsonPlaceholderPostType } from '../../../shared/types';

const JsonPlaceholderPosts = () => {
    const { data, error, isLoading } = useGetPostsJsonPlaceholder();

    if (isLoading) return <div>Loading posts...</div>;

    if (error) return <div>An error has occurred</div>;

    return (
        <div>
            <ul>
                {data.map(({ title, id }: JsonPlaceholderPostType) => (
                    <li key={id}>{title}</li>
                ))}
            </ul>
        </div>
    );
};

export default JsonPlaceholderPosts;
