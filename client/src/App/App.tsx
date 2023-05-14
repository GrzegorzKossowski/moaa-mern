import './App.css';
import JsonPlaceholderPosts from '../components/JsonPlaceholder/JsonPlaceholderPosts/JsonPlaceholderPosts';
import JsonPlaceholderPostId from '../components/JsonPlaceholder/JsonPlaceholderPosts/JsonPlaceholderPostId';
import JsonPlaceholderCreatePost from '../components/JsonPlaceholder/JsonPlaceholderPosts/JsonPlaceholderCreatePost';
import JsonPlaceholderUpdatePost from '../components/JsonPlaceholder/JsonPlaceholderPosts/JsonPlaceholderUpdatePost';
import JsonPlaceholderDeletePost from '../components/JsonPlaceholder/JsonPlaceholderPosts/JsonPlaceholderDeletePost';

function App() {
    return (
        <>
            {/* <JsonPlaceholderPostId id={1}/> */}
            {/* <JsonPlaceholderCreatePost /> */}
            {/* <JsonPlaceholderUpdatePost /> */}
            <JsonPlaceholderDeletePost/>
        </>
    );
}

export default App;
