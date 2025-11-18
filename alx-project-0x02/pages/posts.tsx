"use client";

import React, { useState } from "react";
import PostModal from "@/components/common/PostModal";
import Card from "@/components/common/Card";
import Header from "@/components/layout/Header";

export default function PostPage() {
  const [isOpen, setIsOpen] = useState(false);
  const [posts, setPosts] = useState<{ title: string; content: string }[]>([]);

  // Handle new post from the modal
  const handleAddPost = (data: { title: string; content: string }) => {
    setPosts((prev) => [...prev, data]);
  };

  return (
    <div className="p-6 space-y-6">
        <Header />
      <h1 className="text-2xl font-bold">Post Page</h1>

      {/* Button to open the modal */}
      <button
        onClick={() => setIsOpen(true)}
        className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
      >
        Create New Post
      </button>

      {/* Post Modal */}
      <PostModal
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        onSubmit={handleAddPost}
      />

      {/* Display all submitted posts */}
      <div className="space-y-4 mt-4">
        {posts.map((post, index) => (
          <Card key={index} title={post.title} content={post.content} />
        ))}
      </div>
    </div>
  );
}
