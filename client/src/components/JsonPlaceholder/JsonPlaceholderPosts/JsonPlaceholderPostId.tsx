import React from 'react';
import useGetPostsJsonPlaceholder from '../../../api/jsonplaceholderApi/hooks/useGetPostsJsonPlaceholder';
import { JsonPlaceholderPostType } from '../../../shared/types';
import useGetPostIdJsonPlaceholder from '../../../api/jsonplaceholderApi/hooks/useGetPostIdJsonPlaceholder';

interface JsonPlaceholderPostIdProps {
    id: number;
}

const JsonPlaceholderPostId = ({ id }: JsonPlaceholderPostIdProps) => {
    const { post, error, isLoading } = useGetPostIdJsonPlaceholder(id);

    if (isLoading) return <div>Loading posts...</div>;

    if (error) return <div>An error has occurred</div>;

    return (
        <>
            {post ? (
                <div>
                    <div>UserID: {post.id}</div>
                    <div>Id: {}</div>
                    <div>Title: {post.title}</div>
                    <div>Post: {post.body}</div>
                </div>
            ) : (
                <div>No data</div>
            )}
        </>
    );
};

export default JsonPlaceholderPostId;
