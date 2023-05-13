import React, { useEffect } from 'react';
import './App.css';
import useJsonPlaceholderGetPosts from '../api/jsonplaceholderApi/useJsonPlaceholderGetPosts';
import { JsonPlaceholderPostType } from '../shared/types';

function App() {
    const { data, isLoading, error } = useJsonPlaceholderGetPosts();

    useEffect(() => {
        console.log(data);

        return () => {};
    }, [data]);

    if (isLoading) return <div>Loading...</div>;

    if (error) return <div>An error has occurred:</div>;

    return (
        <ul>
            {data.map(({ title, id }: JsonPlaceholderPostType) => (
                <li key={id}>{title}</li>
            ))}
        </ul>
    );
}

export default App;
