/* eslint-disable @typescript-eslint/no-explicit-any */
import React from "react";
import PostCard from "@/components/common/PostCard";
import { PostProps } from "@/interfaces";
import Header from "@/components/layout/Header"

interface PostsPageProps {
  posts: PostProps[];
}

export default function PostsPage({ posts }: PostsPageProps) {
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

// Fetch posts at build time
export async function getStaticProps() {
  try {
    const res = await fetch("https://jsonplaceholder.typicode.com/posts?_limit=10");
    const data = await res.json();

    const posts: PostProps[] = data.map((post: any) => ({
      userId: post.userId,
      title: post.title,
      content: post.body,
    }));

    return {
      props: {
        posts,
      },
      revalidate: 60, // optional: ISR, rebuild page every 60 seconds
    };
  } catch (error) {
    console.error("Failed to fetch posts:", error);
    return {
      props: {
        posts: [],
      },
    };
  }
}
