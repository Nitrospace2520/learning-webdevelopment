/* eslint-disable no-unused-vars */
import "../../App.css";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updatePost } from "./postsSlice";
import { selectAllUsers, selectUserById } from "../users/usersSlice";
import { selectPostById } from "./postsSlice";
import { useParams, useNavigate } from "react-router-dom";

const EditPost = () => {
  const { postId } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const post = useSelector((state) => selectPostById(state, Number(postId)));
  const [postTitle, setPostTitle] = useState(post?.title);
  const [postAuthor, setPostAuthor] = useState(post?.userId);
  const [postContent, setPostContent] = useState(post?.body);
  // const [postCategory, setPostCategory] = useState(post?.category);
  const [addRequestStatus, setAddRequestStatus] = useState("idle");

  let users = useSelector(selectAllUsers);

  if (!post) {
    return (
      <section>
        <h2>Post not found!</h2>
      </section>
    );
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    if (
      (!postTitle || !postAuthor || !postContent) &&
      addRequestStatus !== "idle"
    )
      return;
    try {
      setAddRequestStatus("pending");
      // console.log("postAuthor: ", postAuthor);
      dispatch(
        updatePost({
          id: post.id,
          title: postTitle,
          body: postContent,
          userID: +postAuthor,
          // category: postCategory,
          // author: postAuthor,
          reactions: post.reactions,
        })
      );
      navigate(`/posts/${postId}`);
    } catch (error) {
      console.log("Failed to post : ", error);
    } finally {
      setAddRequestStatus("idle");
    }
  };
  return (
    <div style={{ backgroundColor: "lightgray", padding: "10px" }}>
      <h2 style={{ color: "blue" }}>Add a New Post</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="postTitle">Post Title:</label>
        <input
          type="text"
          id="postTitle"
          name="postTitle"
          style={{ width: "97%" }}
          value={postTitle}
          onChange={(e) => setPostTitle(e.target.value)}
        />
        <br />
        <label htmlFor="postAuthor">Author:</label>
        <select
          id="postAuthor"
          name="postAuthor"
          style={{ width: "100%" }}
          defaultValue={post?.userId}
          onChange={(e) => setPostAuthor(e.target.value)}
        >
          <option value="">Choose an author</option>
          {users &&
            users.map((user) => (
              <option key={user.id} value={user.id}>
                {user.name}
              </option>
            ))}
        </select>
        <br />
        <label htmlFor="postContent">Content:</label>
        <textarea
          id="postContent"
          name="postContent"
          style={{ width: "98%" }}
          value={postContent}
          onChange={(e) => setPostContent(e.target.value)}
        />
        <br />
        {/* <label htmlFor="postCategory">Category:</label>
        <select
          id="postCategory"
          name="postCategory"
          style={{ width: "100%" }}
          onSelect={(e) => setPostCategory(e.target.value)}
        >
          <option value={"all"}>Choose a category</option>
          <option value={"technology"}>Technology</option>
          <option value={"science"}>Science</option>
          <option value={"art"}>Art</option>
          <option value={"sports"}>Sports</option>
        </select> */}
        <br />
        <button
          type="submit"
          style={{ backgroundColor: "green", color: "white" }}
          onSubmit={handleSubmit}
        >
          Save Post
        </button>
      </form>
    </div>
  );
};

export default EditPost;
