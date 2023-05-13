import React from 'react';
import useCreatePostJsonPlaceholder from '../../../api/jsonplaceholderApi/hooks/useCreatePostJsonPlaceholder';

const JsonPlaceholderCreatePost = () => {
    const { isLoading, isError, isSuccess, mutate } =
        useCreatePostJsonPlaceholder();

    return (
        <div>
            <h3>JsonPlaceholderCreatePost</h3>
            <div>
                {isLoading ? (
                    <div>Adding post...</div>
                ) : (
                    <>
                        {isError ? <div>Error creating post</div> : null}
                        {isSuccess ? <div>Post added</div> : null}
                        <button
                            onClick={() => {
                                mutate({
                                    userId: 1,
                                    id: 1,
                                    title: 'sunt aut facere repellat provident occaecati excepturi optio reprehenderit',
                                    body: 'quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto',
                                });
                            }}
                        >
                            Create Post
                        </button>
                    </>
                )}
            </div>
        </div>
    );
};

export default JsonPlaceholderCreatePost;
