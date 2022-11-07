import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Navbar from "../../components/Navbar/Navbar";

const Post = () => {
  const { id } = useParams();
  const [postDetails, setPostDetails] = useState({});

  useEffect(() => {
    fetch(`https://dummyapi.io/data/v1/post/${id}`, {
      headers: {
        "app-id": "63689aa65eba72c2683e54a3",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        setPostDetails(data);
      });
  }, [id]);

  console.log(postDetails);
  return (
    <>
      <Navbar></Navbar>
      Single Post: {id}
    </>
  );
};

export default Post;
