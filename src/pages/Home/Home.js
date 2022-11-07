import React, { useEffect, useState } from "react";
import Navbar from "../../components/Navbar/Navbar";
import PostCard from "../../components/PostCard/PostCard";

const Home = () => {
  const [posts, setPosts] = useState({});
  useEffect(() => {
    fetch("https://dummyapi.io/data/v1/post?limit=10", {
      headers: {
        "app-id": "63689aa65eba72c2683e54a3",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        setPosts(data);
      });
  }, []);
  console.log(posts);
  return (
    <div>
      <Navbar></Navbar>
      {/* <PostCard></PostCard> */}
      <div className="px-20 py-10 grid lg:grid-cols-4 gap-16">
        {posts?.data?.map((post) => (
          <PostCard key={post.id} post={post}></PostCard>
        ))}
      </div>
    </div>
  );
};

export default Home;
