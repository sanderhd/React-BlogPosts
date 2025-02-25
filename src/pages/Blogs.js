import React, { useEffect, useState } from "react";
import Button from "../components/Buttons/ReadMoreButton"

function Blogs() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/posts")
      .then((res) => res.json())
      .then((data) => {
        console.log("Fetched posts:", data); // Debugging log
        setPosts(data);
      })
      .catch((error) => console.error("Error fetching posts:", error)); // Error handling
  }, []);

  return (
    <div className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8 bg-gray-900">
      <div className="sm:mx-auto sm:w-full sm:max-w-lg">
        <h2 className="mt-10 text-center text-2xl font-bold tracking-tight text-white">
          Blog Posts
        </h2>
      </div>

      <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-lg">
        {posts.length === 0 ? ( // Check if there are no posts
          <p className="text-center text-white">No posts available.</p>
        ) : (
          posts.map((post) => (
            <div key={post.id} className="border-b pb-4 mb-4">
              <h2 className="text-2xl font-semibold text-white">{post.title}</h2>
              <p className="text-gray-400">
                <strong>By:</strong> {post.author} - <em>{post.date}</em>
              </p>
              <p className="text-white">{post.content}</p>
              <Button />
            </div>
          ))
        )}
      </div>
    </div>
  );
}

export default Blogs;
