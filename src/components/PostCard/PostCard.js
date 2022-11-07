import React from "react";
import { AiOutlineLike } from "react-icons/ai";
import { AiOutlineShareAlt } from "react-icons/ai";
import { AiOutlineComment } from "react-icons/ai";

const PostCard = ({ post }) => {
  return (
    <div className="space-y-4">
      <div className="flex items-center space-x-4">
        <img
          className="w-[35px] h-[35px] rounded-full ring-blue-600"
          src={post.owner.picture}
          alt=""
        />
        <div className="font-medium space-x-1 text-gray-800">
          <span>{post.owner.firstName}</span>
          <span>{post.owner.lastName}</span>
        </div>
      </div>
      <div>
        <img className="rounded-md h-[200px]" src={post.image} alt="" />
      </div>
      <div className="space-y-3">
        <h2 className="font-bold text-2xl text-gray-800">Adult Labrador Retriever</h2>
        <div className="flex justify-between text-gray-500">
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-1">
              <AiOutlineLike size={"1.2em"} className="hover:cursor-pointer hover:text-blue-700"></AiOutlineLike>{" "}
              <span className="text-sm font-medium">{post.likes}</span>
            </div>
            <AiOutlineComment size={"1.2em"} className="hover:cursor-pointer hover:text-blue-700"></AiOutlineComment>
            <AiOutlineShareAlt size={"1.2em"} className="hover:cursor-pointer hover:text-blue-700"></AiOutlineShareAlt>
          </div>
          <div className="text-sm font-medium">{post.publishDate.slice(0,10)}</div>
        </div>
      </div>
    </div>
  );
};

export default PostCard;
