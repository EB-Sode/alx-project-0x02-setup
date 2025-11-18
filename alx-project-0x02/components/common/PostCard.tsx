import React from "react";
import { type PostProps } from "@/interfaces";

const PostCard: React.FC<PostProps> = ({ title, content, userId }) => {
  return (
    <div className="border p-4 rounded-xl shadow bg-white">
      <h3 className="text-lg font-semibold">{title}</h3>
      <p className="text-gray-700 mt-2">{content}</p>
      <p className="text-gray-500 text-sm mt-1">User ID: {userId}</p>
    </div>
  );
};

export default PostCard;
