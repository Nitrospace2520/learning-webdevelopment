/* eslint-disable react/prop-types */
import PostAuthor from "./PostAuthor";
import TimeAgo from "./TimeAgo";
import ReactionButton from "./ReactionButton";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectPostById } from "./postsSlice";
// import React from "react";

let PostsExcerpt = ({ postId }) => {
  const post = useSelector((state) => selectPostById(state, postId));

  return (
    <article
      style={{
        background: "#f5f5f5",
        border: "2px solid #500",
        padding: "20px",
        margin: "20px",
        borderRadius: "25px",
      }}
    >
      <h3>{post.title}</h3>
      <section>
        <i>
          - Written by : <PostAuthor userID={post.userId} />
        </i>
        <TimeAgo timeStamp={post.date} />
      </section>
      <p>{post.body.substring(0, 75)}...</p>
      <section>
        <ReactionButton post={post} />
        <br />
        <Link to={`/posts/${post.id}`} style={{ marginLeft: "10px" }}>
          <button>View Post</button>
        </Link>
      </section>
    </article>
  );
};

// note: React.memo is a higher order component that will prevent the component from re-rendering if the props have not changed
// PostsExcerpt = React.memo(PostsExcerpt);

export default PostsExcerpt;
