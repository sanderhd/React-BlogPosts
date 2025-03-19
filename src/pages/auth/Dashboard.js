import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Button from "../../components/Buttons/ReadMoreButton"
import DeleteButton from "../../components/Buttons/DeleteButton"

function Dashboard() {
  const [user, setUser] = useState(null);
  const [userEmail, setUserEmail] = useState('');
  const [userPosts, setUserPosts] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const email = localStorage.getItem("userEmail");
    if (!email) {
      navigate("/login");
      return;
    }
    setUserEmail(email);

    fetch("http://localhost:5000/session", {
      credentials: 'include',
    })
      .then((res) => res.json())
      .then((data) => setUser(data))
      .catch((err) => console.error("Error fetching session:", err));
  }, [navigate]);

  useEffect(() => {
    if (userEmail) {
      fetch("http://localhost:5000/posts")
        .then((res) => res.json())
        .then((data) => {
          const userPosts = data.filter((post) => post.author === userEmail);
          setUserPosts(userPosts);
        })
        .catch((error) => console.error("Error fetching posts:", error));
    }
  }, [userEmail]);

  const handleLogout = () => {
    fetch("http://localhost:5000/logout", {
      method: "POST",
      credentials: 'include',
    })
      .then((res) => res.json())
      .then(() => {
        localStorage.removeItem("userEmail");
        navigate("/login");
        alert("Logout successful!");
      })
      .catch((err) => console.error("Error logging out:", err));
  };

  const handleCreatePost = () => {
    navigate("/createpost");
  };

  return (
    <div className="bg-gray-900 text-white justify-center items-center flex flex-col">
      <div className="container mx-auto py-12">
        <div className="text-center mt-12">
          <h1 className="text-4xl font-bold mb-4">Dashboard</h1>
          <p className="text-xl mb-8">Welkom, {userEmail}!</p>
          <button
            onClick={handleCreatePost}
            className="bg-indigo-600 hover:bg-indigo-500 text-white font-semibold py-2 px-4 rounded-md shadow-md"
          >
            Post aanmaken
          </button>
          <button
            onClick={handleLogout}
            className="ml-4 bg-red-600 hover:bg-red-500 text-white font-semibold py-2 px-4 rounded-md shadow-md"
          >
            Uitloggen
          </button>
        </div>
      </div>
      <div className="container mx-auto py-12 text-center">
        <h1 className="text-3xl font-bold">Mijn posts</h1>
        <div>
          {userPosts.length === 0 ? (
            <p>No posts to show.</p>
          ) : (
            userPosts.map((post) => (
              <div key={post.id} className="mx-4">
                <h2 className="text-1xl font-semibold">{post.title}</h2>
                <a><Button postId={post.id}/></a>
                <a><DeleteButton postId={post.id} /></a>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
