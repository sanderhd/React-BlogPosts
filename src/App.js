import React, { useState } from 'react';

function NewPostButton({ onNewPost }) {
  function handleClick() {
    const title = prompt('Enter the title of your new post:');
    const content = prompt('Enter the content of your new post:');
    onNewPost(title, content);
  }
  return (
    <button onClick={handleClick}>
      Create a new Post
    </button>
  );
}

export default function MyApp() {
  const [post, setPost] = useState({ title: '', content: '' });

  function handleNewPost(title, content) {
    setPost({ title, content });
  }

  return (
    <div>
      <h1 className="head">Sander's Blog Post</h1>
      <h2 className="head">{post.title}</h2>
      <h3 className="head">{post.content}</h3>
      <NewPostButton onNewPost={handleNewPost} />
    </div>
  );
}