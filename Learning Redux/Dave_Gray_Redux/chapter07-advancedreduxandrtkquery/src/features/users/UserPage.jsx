/* eslint-disable no-unused-vars */
import { useParams, Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectUserById } from "./usersSlice";
import { selectAllPosts, selectPostsByUser } from "../posts/postsSlice";

const UserPage = () => {
  const { userId } = useParams();
  const user = useSelector((state) => selectUserById(state, Number(userId)));

  // const allPostsOfUser = useSelector(selectAllPosts).filter(
  //   (post) => post.userId === Number(userId)
  // ); // note: OR BETTER
  const allPostsOfUser = useSelector((state) =>
    selectPostsByUser(state, Number(userId))
  );

  const renderedPosts = allPostsOfUser.map((post) => (
    <li key={post.id}>
      <Link to={`/posts/${post.id}`}>{post.title}</Link>
    </li>
  ));

  if (!user) {
    return (
      <section>
        <h2>User not found!</h2>
      </section>
    );
  }

  return (
    <div>
      <h2>{user.name}</h2>
      <ol>{renderedPosts}</ol>
    </div>
  );
};

export default UserPage;
