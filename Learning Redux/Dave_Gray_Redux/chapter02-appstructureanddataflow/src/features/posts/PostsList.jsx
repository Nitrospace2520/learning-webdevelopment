import { useSelector } from "react-redux";
import PostAuthor from "./PostAuthor";
import TimeAgo from "./TimeAgo";
import ReactionButton from "./ReactionButton";
import { selectAllPosts } from "./postsSlice";
import { useEffect, useState } from "react";

const PostsList = () => {
  const posts = useSelector(selectAllPosts);
  const [renderedPosts, setRenderedPosts] = useState(posts);

  const onSort = () => {
    setRenderedPosts(
      renderedPosts.slice().sort((a, b) => b.date.localeCompare(a.date))
    );
  };

  useEffect(() => {
    setRenderedPosts(posts);
  }, [posts]);

  return (
    <div>
      <h2>All Posts</h2>
      <section>
        <button onClick={onSort}>Sort by date</button>
      </section>
      <div>
        {posts &&
          renderedPosts.map((post) => (
            <article
              key={post.id}
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
                  - Written by : <PostAuthor userID={post.userID} />
                </i>
                <TimeAgo timeStamp={post.date} />
              </section>
              <p>{post.content || post.body}</p>
              <section>
                <ReactionButton post={post} />
              </section>
            </article>
          ))}
      </div>
    </div>
  );
};

export default PostsList;
