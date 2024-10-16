/* eslint-disable no-unused-vars */
import { useState, useEffect } from "react";
import { Container, PostCard } from "../components";
import appwriteService from "../appwrite/configure";

const Home = () => {
  // console.log(`pages >> Home.jsx`);

  const [posts, setPosts] = useState([]);
  useEffect(() => {
    appwriteService.getPosts().then((posts) => {
      if (posts) {
        setPosts(posts.documents);
      }
    });
  }, []);
  if (posts.length === 0) {
    <div className="w-full py-8 mt-4 text-center">
      <Container>
        <div className="p-2 w-full">
          <h1 className="text-2xl font-bold hover:text-gray-500">
            Login to read posts
          </h1>
        </div>
      </Container>
    </div>;
  }
  return (
    <div className="w-full py-8">
      <Container>
        <div className="flext flex-wrap">
          {posts &&
            posts.map((post) => (
              <div className="p-2 w-1/4" key={post.$id}>
                <PostCard {...post} />
              </div>
            ))}
        </div>
      </Container>
    </div>
  );
};

export default Home;
