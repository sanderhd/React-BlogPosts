import React, { useEffect, useState } from "react";

function Blog() {
  const [posts, setPosts] = useState([]);
  const [newPost, setNewPost] = useState({ title: "", author: "", content: "" });

  useEffect(() => {
    fetch("http://localhost:5000/posts")
      .then((res) => res.json())
      .then((data) => setPosts(data));
  }, []);

  const handleChange = (e) => {
    setNewPost({ ...newPost, [e.target.name]: e.target.value });
  };

  const addPost = (e) => {
    e.preventDefault();
    fetch("http://localhost:5000/posts", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newPost),
    })
      .then((res) => res.json())
      .then((post) => setPosts([...posts, post]));

    setNewPost({ title: "", author: "", content: "" });
  };

  return (
    <div className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8 bg-gray-900">
      <div className="sm:mx-auto sm:w-full sm:max-w-lg">
        <h2 className="mt-10 text-center text-2xl font-bold tracking-tight text-white">
          Blog Posts
        </h2>
      </div>

      <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-lg">
        <form className="space-y-6" onSubmit={addPost}>
          <div>
            <label htmlFor="title" className="block text-sm font-medium text-white">
              Title
            </label>
            <div className="mt-2">
              <input
                type="text"
                name="title"
                id="title"
                value={newPost.title}
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
                value={newPost.author}
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
                value={newPost.content}
                onChange={handleChange}
                required
                className="block w-full rounded-md bg-gray-800 px-3 py-1.5 text-base text-white outline outline-1 outline-gray-700 placeholder:text-gray-400 focus:outline-2 focus:outline-offset-2 focus:outline-indigo-600 sm:text-sm"
              ></textarea>
            </div>
          </div>

          <div>
            <button
              type="submit"
              className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Add Post
            </button>
          </div>
        </form>
      </div>

      <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-lg">
        {posts.map((post) => (
          <div key={post.id} className="border-b pb-4 mb-4">
            <h2 className="text-2xl font-semibold text-white">{post.title}</h2>
            <p className="text-gray-400">
              <strong>By:</strong> {post.author} - <em>{post.date}</em>
            </p>
            <p className="text-white">{post.content}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Blog;
