import useDeletePostJsonPlaceholder from '../../../api/jsonplaceholderApi/hooks/useDeletePostIdJsonPlaceholder';

const JsonPlaceholderDeletePost = () => {
    const { isLoading, isError, isSuccess, mutate } =
        useDeletePostJsonPlaceholder();

    const postToDelete = {
        userId: 2,
        id: 15,
        title: 'eveniet quod temporibus',
        body: 'reprehenderit quos placeat\nvelit minima officia dolores impedit repudiandae molestiae nam\nvoluptas recusandae quis delectus\nofficiis harum fugiat vitae',
    };

    return (
        <div>
            <h3>JsonPlaceholder DELETE Post</h3>

            <div>
                {isLoading ? (
                    <div>Deleting post...</div>
                ) : (
                    <>
                        {isError ? <div>Error deleting post</div> : null}
                        {isSuccess ? <div>Post deleted</div> : null}
                        <button
                            onClick={() => {
                                mutate(1);
                            }}
                        >
                            Delete Post
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
                        {Object.keys(postToDelete).map((element, index) => (
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
                        {Object.values(postToDelete).map((element, index) => (
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

export default JsonPlaceholderDeletePost;
