import "../../App.css";
import { useDispatch, useSelector } from "react-redux";
import { addNewPost } from "./postsSlice";
import { selectAllUsers } from "../users/usersSlice";

const AddPost = () => {
  const dispatch = useDispatch();
  let users = useSelector(selectAllUsers);

  const handleSubmit = (event) => {
    event.preventDefault();
    const postTitle = event.target.postTitle;
    const postAuthor = event.target.postAuthor;
    const postContent = event.target.postContent;
    const postCategory = event.target.postCategory;
    if (!postTitle.value || !postContent.value) return;
    // console.log(postTitle.value, postAuthor.value, postContent.value);
    dispatch(
      addNewPost({
        title: postTitle.value,
        author: postAuthor.value.split(",")[1],
        content: postContent.value,
        userID: +postAuthor.value.split(",")[0],
        category:
          postCategory.value === "Choose a category"
            ? "uncategorized"
            : postCategory.value,
      })
    );
    postTitle.value = "";
    postAuthor.value = "";
    postContent.value = "";
    postCategory.value = "";
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
        />
        <br />
        <label htmlFor="postAuthor">Author:</label>
        <select id="postAuthor" name="postAuthor" style={{ width: "100%" }}>
          <option value="">Choose an author</option>
          {users &&
            users.map((user) => (
              <option key={user.id} value={user.id + "," + user.name}>
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
        />
        <br />
        <label htmlFor="postCategory">Category:</label>
        <select id="postCategory" name="postCategory" style={{ width: "100%" }}>
          <option value="all">Choose a category</option>
          <option value="technology">Technology</option>
          <option value="science">Science</option>
          <option value="art">Art</option>
          <option value="sports">Sports</option>
        </select>
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

export default AddPost;
