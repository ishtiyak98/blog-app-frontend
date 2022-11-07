import Aos from "aos";
import "aos/dist/aos.css";
import React, { useEffect } from "react";
import { AiOutlineLike } from "react-icons/ai";
import { AiOutlineShareAlt } from "react-icons/ai";
import { AiOutlineComment } from "react-icons/ai";
import { useNavigate } from "react-router-dom";

const PostCard = ({ post }) => {
  const navigate = useNavigate();
  useEffect(() => {
    Aos.init({
      duration: 400,
      offset: 30,
    });
  }, []);

  return (
    <div data-aos="zoom-out">
      <div
        className="space-y-4 cursor-pointer hover:scale-105 transition-transform ease-in-out duration-300 hover:shadow-xl p-6"
        onClick={() => {
          navigate(`/posts/${post.id}`);
        }}
      >
        <div className="flex items-center space-x-4 text-gray-600 hover:text-blue-700 hover:cursor-pointer">
          <img
            className="w-[35px] h-[35px] rounded-full ring-blue-600"
            src={post.owner.picture}
            alt=""
          />
          <div className="font-medium space-x-1 ">
            <span>{post.owner.firstName}</span>
            <span>{post.owner.lastName}</span>
          </div>
        </div>
        <div>
          <img
            className="rounded-md w-full object-cover h-[200px]"
            src={post.image}
            alt=""
          />
        </div>
        <div className="space-y-3">
          <h2 className="font-bold text-xl text-gray-800 normal-case">
            {post.text}
          </h2>
          <div className="flex justify-between text-gray-500">
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-1">
                <AiOutlineLike
                  size={"1.2em"}
                  className="hover:cursor-pointer hover:text-blue-700"
                ></AiOutlineLike>{" "}
                <span className="text-sm font-medium">{post.likes}</span>
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
            <div className="text-sm font-medium">
              {post.publishDate.slice(0, 10)}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostCard;
