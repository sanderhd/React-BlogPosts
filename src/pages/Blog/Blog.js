import React from "react";
import { useParams } from "react-router-dom";

function getPostById(id) {
  fetch("http://localhost:5000/posts")
    .then((res) => res.json())
    .then((data) => {
      const post = data.find((post) => post.id === id);
      if (post) {
        document.getElementById("postTitle").innerHTML = post.title;
        document.getElementById("postAuthor").innerHTML =
          `Author: ` + post.author;
        document.getElementById("postDescription").innerHTML = post.content;
        document.getElementById("postDate").innerHTML = `Date: ` + post.date;
      } else {
        document.getElementById("postTitle").innerHTML = "Post not found";
        document.getElementById("postAuthor").innerHTML = "";
        document.getElementById("postDescription").innerHTML = "";
        document.getElementById("postDate").innerHTML = "";
      }
    });
}

function Blog() {
  const { id } = useParams();
  React.useEffect(() => {
    getPostById(parseInt(id));
  }, [id]);
  return (
    
    <div className="bg-gray-900 min-h-screen flex flex-col items-center justify-center text-white">
      <h1 className="text-3xl font-bold mb-8">Blog Post</h1>

      <div className="bg-gray-800 p-6 rounded-lg shadow-lg w-3/4">
        <h3 className="text-2xl font-bold mb-4">Post:</h3>
        <span
          id="postTitle"
          className="block text-xl font-semibold mb-2"
        ></span>
        <span id="postAuthor" className="block text-lg mb-2"></span>
        <span id="postDescription" className="block text-base mb-2"></span>
        <span id="postDate" className="block text-sm text-gray-400"></span>
      </div>
    </div>
  );
}

export default Blog;