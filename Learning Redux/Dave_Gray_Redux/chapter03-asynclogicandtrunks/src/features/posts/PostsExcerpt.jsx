/* eslint-disable react/prop-types */
import PostAuthor from "./PostAuthor";
import TimeAgo from "./TimeAgo";
import ReactionButton from "./ReactionButton";

const PostsExcerpt = ({ post }) => {
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
      <p>{post.body}</p>
      <section>
        <ReactionButton post={post} />
      </section>
    </article>
  );
};

export default PostsExcerpt;
