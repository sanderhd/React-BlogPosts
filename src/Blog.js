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

  const addPost = () => {
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
    <div className="container mx-auto p-4">
      <h1 className="text-4xl font-bold mb-4">Blog</h1>
      <div className="mb-6">
        <input
          type="text"
          name="title"
          value={newPost.title}
          onChange={handleChange}
          placeholder="Titel"
          className="border p-2 mb-2 w-full"
        />
        <input
          type="text"
          name="author"
          value={newPost.author}
          onChange={handleChange}
          placeholder="Auteur"
          className="border p-2 mb-2 w-full"
        />
        <textarea
          name="content"
          value={newPost.content}
          onChange={handleChange}
          placeholder="Inhoud"
          className="border p-2 mb-2 w-full"
        ></textarea>
        <button onClick={addPost} className="bg-blue-500 text-white p-2 rounded">
          Voeg toe
        </button>
      </div>
      {posts.map((post) => (
        <div key={post.id} className="border-b pb-4 mb-4">
          <h2 className="text-2xl font-semibold">{post.title}</h2>
          <p className="text-gray-600">
            <strong>Door:</strong> {post.author} - <em>{post.date}</em>
          </p>
          <p>{post.content}</p>
        </div>
      ))}
    </div>
  );
}

export default Blog;
