/* eslint-disable no-unused-vars */
import { useSelector } from "react-redux";
import { selectPostIds, getPostsStatus, getPostsError } from "./postsSlice";
import PostsExcerpt from "./PostsExcerpt";

const PostsList = () => {
  const orderedPostIds = useSelector(selectPostIds);
  const postsStatus = useSelector(getPostsStatus);
  const postsError = useSelector(getPostsError);
  // console.log(posts);

  let content;
  if (postsStatus === "loading") {
    content = <div>Loading...</div>;
  } else if (postsStatus === "succeeded") {
    content = orderedPostIds.map((postId) => (
      <PostsExcerpt key={postId} postId={+postId} />
    ));
  } else if (postsStatus === "failed") {
    content = <div>{postsError}</div>;
  }

  return (
    <div>
      <h2>All Posts</h2>
      <section>{content}</section>
    </div>
  );
};

export default PostsList;
