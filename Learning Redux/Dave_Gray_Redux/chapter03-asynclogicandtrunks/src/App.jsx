import "./App.css";
import AddPost from "./features/posts/AddPost";
import PostsList from "./features/posts/PostsList";

function App() {
  return (
    <>
      <div>
        <AddPost />
        <PostsList />
      </div>
    </>
  );
}

export default App;
