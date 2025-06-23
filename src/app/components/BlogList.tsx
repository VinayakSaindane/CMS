import React from "react";

type Post = {
  title: string;
  author: string;
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
          <h3 className="text-xl font-bold">{post.title}</h3>
          <p className="text-gray-600">
            By {post.author} on {post.publish_date}
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