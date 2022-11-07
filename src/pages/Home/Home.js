import React, { useEffect, useState } from "react";
import Navbar from "../../components/Navbar/Navbar";
import PostCard from "../../components/PostCard/PostCard";

const Home = () => {
  const [posts, setPosts] = useState({});
  const [itemNumber, setItemNumber] = useState(10);
  useEffect(() => {
    fetch(`https://dummyapi.io/data/v1/post?limit=${itemNumber}`, {
      headers: {
        "app-id": process.env.REACT_APP_apiKey,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        setPosts(data);
      });
  }, [itemNumber]);

  console.log(itemNumber);
  return (
    <div>
      <Navbar></Navbar>
      <div className="px-6 py-5 lg:px-16 lg:py-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
        {posts?.data?.map((post) => (
          <PostCard key={post.id} post={post}></PostCard>
        ))}
      </div>
      {posts && (
        <div
          className="bg-blue-500 w-fit mx-auto px-4 py-2 rounded text-white mb-10 hover:bg-blue-800 hover:cursor-pointer"
          onClick={() => setItemNumber(itemNumber + 10)}
        >
          Show More Post
        </div>
      )}
    </div>
  );
};

export default Home;
