import React from 'react';
import useGetTestsNodeJs from '../../api/testNodeJsApi/hooks/useGetTestsNodeJs';

const TestsNodeJs = () => {
    const { response, error, isLoading } = useGetTestsNodeJs();

    if (isLoading) return <div>Loading posts...</div>;

    if (error) return <div>An error has occurred</div>;

    console.log(response.data);

    return <div>tests</div>;
};

export default TestsNodeJs;
