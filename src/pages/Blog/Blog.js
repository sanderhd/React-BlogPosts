import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

function Blog() {
  const { id } = useParams();
  const [post, setPost] = useState(null);
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState("");
  const [user, setUser] = useState(null);
  const [error, setError] = useState("");

  useEffect(() => {
    fetchPostById(parseInt(id));
    fetchComments();
    fetchUser();
  }, [id]);

  const fetchPostById = (postId) => {
    fetch("http://localhost:5000/posts")
      .then((res) => res.json())
      .then((data) => {
        const post = data.find((post) => post.id === postId);
        if (post) {
          setPost(post);
        } else {
          setError("Post not found");
        }
      })
      .catch((err) => setError(err.message));
  };

  const fetchComments = () => {
    fetch(`http://localhost:5000/comments/${id}`)
      .then((res) => res.json())
      .then((data) => {
        if (Array.isArray(data)) {
          setComments(data);
        } else {
          setComments([]);
        }
      })
      .catch((err) => setError(err.message));
  };

  const fetchUser = () => {
    fetch("http://localhost:5000/session", { credentials: "include" })
      .then((res) => res.json())
      .then((data) => setUser(data))
      .catch(() => setUser(null));
  };

  const handleCommentSubmit = (e) => {
    e.preventDefault();
    if (!newComment.trim()) return;

    const userEmail = localStorage.getItem("userEmail");

    fetch("http://localhost:5000/comments", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "include",
      body: JSON.stringify({ postId: id, content: newComment, author: userEmail }),
    })
      .then((res) => res.json())
      .then((data) => {
        setComments([...comments, data]);
        setNewComment("");
      })
      .catch((err) => setError(err.message));
  };

  return (
    <div className="bg-gray-900 min-h-screen flex flex-col items-center justify-center text-white">
      <h1 className="text-3xl font-bold mb-8">Blog Post</h1>
      <div className="bg-gray-800 p-6 rounded-lg shadow-lg w-3/4">
        <h3 className="text-2xl font-bold mb-4">Post:</h3>
        {post ? (
          <>
            <span className="block text-xl font-semibold mb-2">{post.title}</span>
            <span className="block text-lg mb-2">Author: {post.author}</span>
            <span className="block text-base mb-2">{post.content}</span>
            <span className="block text-sm text-gray-400">Date: {post.date}</span>
          </>
        ) : (
          <span className="block text-xl font-semibold mb-2">{error}</span>
        )}
      </div>
      <div className="bg-gray-800 p-6 rounded-lg shadow-lg w-3/4 mt-8 mb-8">
        <h3 className="text-2xl font-bold mb-4">Comments:</h3>
        {Array.isArray(comments) && comments.length > 0 ? (
          comments.map((comment) => (
            <div key={comment.id} className="mb-4 p-4 bg-gray-700 rounded-lg">
              <p className="text-lg">{comment.content}</p>
              <p className="text-sm text-gray-400">Author: {comment.authorName}</p>
              <p className="text-sm text-gray-400">Date: {comment.date}</p>
            </div>
          ))
        ) : (
          <p>No comments yet.</p>
        )}
        {user && (
          <form onSubmit={handleCommentSubmit} className="mt-4">
            <textarea
              value={newComment}
              onChange={(e) => setNewComment(e.target.value)}
              className="w-full p-2 rounded-lg bg-gray-700 text-white"
              placeholder="Add a comment..."
            ></textarea>
            <button
              type="submit"
              className="mt-2 px-4 py-2 bg-blue-600 rounded-lg text-white"
            >
              Submit
            </button>
          </form>
        )}
      </div>
    </div>
  );
}

export default Blog;