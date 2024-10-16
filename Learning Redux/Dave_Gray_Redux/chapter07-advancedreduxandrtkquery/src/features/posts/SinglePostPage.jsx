/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { useSelector, useDispatch } from "react-redux";
import PostAuthor from "./PostAuthor";
import TimeAgo from "./TimeAgo";
import ReactionButton from "./ReactionButton";
import { selectPostById, deletePost } from "./postsSlice";
import { useParams, useNavigate } from "react-router-dom";

const SinglePostPage = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { postId } = useParams();
  const post = useSelector((state) => selectPostById(state, Number(postId)));

  const handleEdit = (event) => {
    event.preventDefault();
    navigate(`/edit-post/${postId}`);
  };
  const handleDelete = (event) => {
    event.preventDefault();
    dispatch(deletePost({ id: Number(postId) }));
    navigate("/posts");
  };

  if (!post)
    return (
      <section>
        <h2>Post not found!</h2>
      </section>
    );

  return (
    <article
      style={{
        background: "#f5f5f5",
        border: "2px solid #500",
        padding: "20px",
        margin: "20px",
        flex: "1",
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
        <br />
        <section>
          <button onClick={handleEdit}>Edit</button>
          <button onClick={handleDelete}>Delete</button>
        </section>
      </section>
    </article>
  );
};

export default SinglePostPage;
