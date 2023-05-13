import './App.css';
import JsonPlaceholderPosts from '../components/JsonPlaceholder/JsonPlaceholderPosts/JsonPlaceholderPosts';
import JsonPlaceholderPostId from '../components/JsonPlaceholder/JsonPlaceholderPosts/JsonPlaceholderPostId';
import JsonPlaceholderCreatePost from '../components/JsonPlaceholder/JsonPlaceholderPosts/JsonPlaceholderCreatePost';
import JsonPlaceholderUpdatePost from '../components/JsonPlaceholder/JsonPlaceholderPosts/JsonPlaceholderUpdatePost';

function App() {
    return (
        <>
            {/* <JsonPlaceholderPostId id={1}/> */}
            {/* <JsonPlaceholderCreatePost /> */}
            <JsonPlaceholderUpdatePost />
        </>
    );
}

export default App;
