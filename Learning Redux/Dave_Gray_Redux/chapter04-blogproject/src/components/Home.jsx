import { AddPost, PostsList } from "../features/posts";

const Home = () => {
  return (
    <div>
      <h2 style={{ color: "blue" }}>Welcome to the Blog Project</h2>
      <AddPost />
      <PostsList />
    </div>
  );
};

export default Home;
