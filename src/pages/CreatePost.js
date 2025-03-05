import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function CreatePost() {
  const [post, setPost] = useState({ title: "", author: "", content: "" });
  const navigate = useNavigate();

  const handleChange = (e) => {
    setPost({ ...post, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch("http://localhost:5000/posts", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(post),
    })
      .then((res) => res.json())
      .then(() => {
        navigate("/dashboard");
        alert("Post created successfully!");
      })
      .catch((err) => console.error("Error creating post:", err));
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <div className="container mx-auto py-12">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Create Post</h1>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="title" className="block text-sm font-medium text-white">
                Title
              </label>
              <div className="mt-2">
                <input
                  type="text"
                  name="title"
                  id="title"
                  value={post.title}
                  onChange={handleChange}
                  required
                  className="block w-full rounded-md bg-gray-800 px-3 py-1.5 text-base text-white outline outline-1 outline-gray-700 placeholder:text-gray-400 focus:outline-2 focus:outline-offset-2 focus:outline-indigo-600 sm:text-sm"
                />
              </div>
            </div>
            <div>
              <label htmlFor="author" className="block text-sm font-medium text-white">
                Author
              </label>
              <div className="mt-2">
                <input
                  type="text"
                  name="author"
                  id="author"
                  value={post.author}
                  onChange={handleChange}
                  required
                  className="block w-full rounded-md bg-gray-800 px-3 py-1.5 text-base text-white outline outline-1 outline-gray-700 placeholder:text-gray-400 focus:outline-2 focus:outline-offset-2 focus:outline-indigo-600 sm:text-sm"
                />
              </div>
            </div>
            <div>
              <label htmlFor="content" className="block text-sm font-medium text-white">
                Content
              </label>
              <div className="mt-2">
                <textarea
                  name="content"
                  id="content"
                  value={post.content}
                  onChange={handleChange}
                  required
                  className="block w-full rounded-md bg-gray-800 px-3 py-1.5 text-base text-white outline outline-1 outline-gray-700 placeholder:text-gray-400 focus:outline-2 focus:outline-offset-2 focus:outline-indigo-600 sm:text-sm"
                />
              </div>
            </div>
            <div>
              <button
                type="submit"
                className="bg-indigo-600 hover:bg-indigo-500 text-white font-semibold py-2 px-4 rounded-md shadow-md"
              >
                Create Post
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default CreatePost;
