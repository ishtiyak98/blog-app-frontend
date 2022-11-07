import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Navbar from "../../components/Navbar/Navbar";
import { AiOutlineLike } from "react-icons/ai";
import { AiOutlineShareAlt } from "react-icons/ai";
import { AiOutlineComment } from "react-icons/ai";

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
      <div className="px-6 py-5 lg:px-20 lg:py-10 space-y-8">
        <div className="flex items-center justify-between text-gray-600">
          <div className="flex flex-wrap items-center space-x-4">
            <img
              className="w-[35px] h-[35px] rounded-full ring-blue-600"
              src={postDetails?.owner?.picture}
              alt=""
            />
            <div className="font-medium space-x-1 hover:text-blue-700 hover:cursor-pointer">
              <span>{postDetails?.owner?.firstName}</span>
              <span>{postDetails?.owner?.lastName}</span>
            </div>
          </div>
          <div className="text-sm font-medium">
            Publish Date: {postDetails?.publishDate?.slice(0, 10)}
          </div>
        </div>
        <div>
          <img
            className="rounded-md w-full object-cover h-[460px]"
            src={postDetails?.image}
            alt=""
          />
        </div>

        <div className="space-y-4">
          <div className="flex flex-wrap justify-between items-center">
            <h2 className="font-bold text-4xl text-gray-800 normal-case mb-4">
              {postDetails?.text}
            </h2>
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-1">
                <AiOutlineLike
                  size={"1.2em"}
                  className="hover:cursor-pointer hover:text-blue-700"
                ></AiOutlineLike>{" "}
                <span className="text-sm font-medium">
                  {postDetails?.likes}
                </span>
              </div>
              <AiOutlineComment
                size={"1.2em"}
                className="hover:cursor-pointer hover:text-blue-700"
              ></AiOutlineComment>
              <AiOutlineShareAlt
                size={"1.2em"}
                className="hover:cursor-pointer hover:text-blue-700"
              ></AiOutlineShareAlt>
            </div>
          </div>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Assumenda
            inventore animi molestiae fuga adipisci. Perferendis voluptas vitae
            suscipit iusto earum. Blanditiis sint iusto sapiente sed corporis,
            amet quaerat ullam esse perspiciatis neque? Dignissimos quasi
            expedita ipsa quaerat consequatur officiis repellendus? Quaerat
            aspernatur dolores deserunt, quae cupiditate molestias odit fugiat
            minus temporibus voluptatum suscipit veniam voluptate aliquam harum
            beatae optio dolorem quibusdam amet ut quisquam, velit voluptas!
            Nesciunt sequi, assumenda vitae earum voluptatibus, molestias
            magnam, ad quod esse commodi perspiciatis amet cumque vero unde
            magni expedita tempora cum distinctio iure similique repellat at?
            Repudiandae recusandae perspiciatis assumenda cupiditate possimus
            cumque esse!
          </p>
        </div>
      </div>
    </>
  );
};

export default Post;
