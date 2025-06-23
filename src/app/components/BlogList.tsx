import React from "react";

import Link from 'next/link';

type Post = {
  uid: string;
  title: string;
  author: { title: string }; // Assuming author is an object with a title property
  publish_date: string;
  cover_image?: { url: string };
  content: string;
};

type Props = {
  posts: Post[];
};

const BlogList: React.FC<Props> = ({ posts }) => (
    
  <section>
    <h2 className="text-2xl font-semibold mb-4">Featured Blog Posts</h2>
    <div className="grid md:grid-cols-2 gap-6">
      {posts.map((post, idx) => (
        <div key={idx} className="p-4 border rounded-md shadow-md bg-white">
          {post.cover_image?.url && (
            <img
              src={post.cover_image.url}
              alt="Cover"
              className="mb-4 w-full h-40 object-cover rounded"
            />
          )}
          {post.uid ? (
            <Link href={`/blog/${post.uid}`}>
              <h3 className="text-xl font-bold cursor-pointer hover:underline">{post.title}</h3>
            </Link>
          ) : (
            <h3 className="text-xl font-bold">{post.title}</h3>
          )}
          <p className="text-gray-600">
            By {post.author?.title || 'Unknown Author'} on {post.publish_date}
          </p>
          <div
            className="mt-2 text-sm text-gray-800"
            // dangerouslySetInnerHTML={{ __html: post.content. substring(0, 200) + "..." }}
          />
        </div>
      ))}
    </div>
  </section>
);

export default BlogList;