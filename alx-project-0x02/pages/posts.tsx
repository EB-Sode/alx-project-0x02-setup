"use client";

import React, { useEffect, useState } from "react";
import PostCard from "@/components/common/PostCard";
import { PostProps } from "@/interfaces";
import Header from "../components/layout/Header"

export default function PostsPage() {
  const [posts, setPosts] = useState<PostProps[]>([]);
  const [loading, setLoading] = useState(true);

  // Fetch posts from JSONPlaceholder
  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const res = await fetch("https://jsonplaceholder.typicode.com/posts?_limit=10");
        const data = await res.json();

        // Map JSONPlaceholder fields to our PostProps interface
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        const formattedData: PostProps[] = data.map((post: any) => ({
          userId: post.userId,
          title: post.title,
          content: post.body,
        }));

        setPosts(formattedData);
      } catch (error) {
        console.error("Failed to fetch posts:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchPosts();
  }, []);

  if (loading) return <p className="p-6">Loading posts...</p>;

  return (
    <div className="p-6 space-y-4">
      <Header />
      <h1 className="text-2xl font-bold mb-4">Posts</h1>

      {posts.map((post, index) => (
        <PostCard
          key={index}
          userId={post.userId}
          title={post.title}
          content={post.content}
        />
      ))}
    </div>
  );
}
