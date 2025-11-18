"use client";

import React, { useState } from "react";
import Card from "../components/common/Card";
import PostModal from "../components/common/PostModal";

export default function Home() {
  const [isOpen, setIsOpen] = useState(false);
  const [posts, setPosts] = useState<{ title: string; content: string }[]>([]);

  const handleAddPost = (data: { title: string; content: string }) => {
    setPosts((prev) => [...prev, data]);
  };

  return (
    <div className="p-6 space-y-6">
      <h1 className="text-2xl font-bold">Hello</h1>

      {/* Your original card */}
      <Card title="Welcome" content="This is the home page content." />

      {/* Button to open modal */}
      <button
        onClick={() => setIsOpen(true)}
        className="px-4 py-2 bg-blue-600 text-white rounded"
      >
        Create New Post
      </button>

      {/* Modal */}
      <PostModal
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        onSubmit={handleAddPost}
      />

      {/* Display posts */}
      <div className="space-y-4">
        {posts.map((post, index) => (
          <Card key={index} title={post.title} content={post.content} />
        ))}
      </div>
    </div>
  );
}
