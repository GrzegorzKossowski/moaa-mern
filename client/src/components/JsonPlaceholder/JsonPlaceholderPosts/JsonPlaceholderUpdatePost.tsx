import React from 'react';
import useUpdatePostJsonPlaceholder from '../../../api/jsonplaceholderApi/hooks/useUpdatePostJsonPlaceholder';

const JsonPlaceholderUpdatePost = () => {
    const { isLoading, isError, isSuccess, mutate } =
        useUpdatePostJsonPlaceholder();

    const postToUpdate = {
        userId: 1,
        id: 1,
        title: 'sunt aut facere repellat provident occaecati excepturi optio reprehenderit',
        body: 'quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto',
    };

    return (
        <div>
            <h3>JsonPlaceholder Update Post</h3>

            <div>
                {isLoading ? (
                    <div>Updating post...</div>
                ) : (
                    <>
                        {isError ? <div>Error updating post</div> : null}
                        {isSuccess ? <div>Post updated</div> : null}
                        <button
                            onClick={() => {
                                mutate(postToUpdate);
                            }}
                        >
                            Update Post
                        </button>
                    </>
                )}
            </div>
            <table
                style={{
                    border: '1px solid black',
                    borderCollapse: 'collapse',
                    marginTop: '20px',
                }}
            >
                <thead>
                    <tr>
                        {Object.keys(postToUpdate).map((element, index) => (
                            <th
                                key={index}
                                style={{
                                    border: '1px solid black',
                                    borderCollapse: 'collapse',
                                    padding: '5px',
                                }}
                            >
                                {element}
                            </th>
                        ))}
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        {Object.values(postToUpdate).map((element, index) => (
                            <td
                                key={index}
                                style={{
                                    border: '1px solid black',
                                    borderCollapse: 'collapse',
                                    padding: '5px',
                                }}
                            >
                                {element}
                            </td>
                        ))}
                    </tr>
                </tbody>
            </table>
        </div>
    );
};

export default JsonPlaceholderUpdatePost;
