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
    <div>
      <h1>Blog</h1>
      <div>
        <input type="text" name="title" value={newPost.title} onChange={handleChange} placeholder="Titel" />
        <input type="text" name="author" value={newPost.author} onChange={handleChange} placeholder="Auteur" />
        <textarea name="content" value={newPost.content} onChange={handleChange} placeholder="Inhoud"></textarea>
        <button onClick={addPost}>Voeg toe</button>
      </div>
      {posts.map((post) => (
        <div key={post.id} style={{ borderBottom: "1px solid #ccc", padding: "10px 0" }}>
          <h2>{post.title}</h2>
          <p><strong>Door:</strong> {post.author} - <em>{post.date}</em></p>
          <p>{post.content}</p>
        </div>
      ))}
    </div>
  );
}

export default Blog;
