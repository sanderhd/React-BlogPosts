import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Dashboard() {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    fetch("http://localhost:5000/session", {
      credentials: 'include'
    })
      .then((res) => res.json())
      .then((data) => setUser(data))
      .catch((err) => console.error("Error fetching session:", err));
  }, []);

  const handleLogout = () => {
    fetch("http://localhost:5000/logout", {
      method: "POST",
      credentials: 'include'
    })
      .then((res) => res.json())
      .then(() => {
        navigate("/login");
        alert("Logout successful!");
      })
      .catch((err) => console.error("Error logging out:", err));
  };

  const handleCreatePost = () => {
    navigate("/createpost");
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <div className="container mx-auto py-12">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Dashboard</h1>
          {user ? <p className="text-xl mb-8">Welcome, {user.email}!</p> : <p className="text-xl mb-8">Loading...</p>}
          <button
            onClick={handleCreatePost}
            className="bg-indigo-600 hover:bg-indigo-500 text-white font-semibold py-2 px-4 rounded-md shadow-md"
          >
            Create Post
          </button>
          <button
            onClick={handleLogout}
            className="ml-4 bg-red-600 hover:bg-red-500 text-white font-semibold py-2 px-4 rounded-md shadow-md"
          >
            Logout
          </button>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;