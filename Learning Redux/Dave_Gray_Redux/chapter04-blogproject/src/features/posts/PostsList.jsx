/* eslint-disable no-unused-vars */
import { useSelector } from "react-redux";
import {
  selectAllPosts,
  getPostsStatus,
  getPostsError,
  fetchPosts,
} from "./postsSlice";
import { useEffect } from "react";
import PostsExcerpt from "./PostsExcerpt";

const PostsList = () => {
  const postsStatus = useSelector(getPostsStatus);
  const postsError = useSelector(getPostsError);
  const posts = useSelector(selectAllPosts);
  // console.log(posts);

  let content;
  if (postsStatus === "loading") {
    content = <div>Loading...</div>;
  } else if (postsStatus === "succeeded") {
    const sortedPosts = posts
      .slice()
      .sort((a, b) => b.date.localeCompare(a.date));

    content = sortedPosts.map((post) => (
      <PostsExcerpt key={post.id} post={post} />
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
