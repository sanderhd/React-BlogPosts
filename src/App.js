import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import Blog from "./pages/Blogs";
import CreatePost from "./pages/Blog/CreatePost";
import Dashboard from "./pages/auth/Dashboard";
import SignUp from "./pages/auth/signup";
import Login from "./pages/auth/login";

function App() {
  return (
    <Router>
      <nav className="bg-gray-900 p-4">
        <ul className="flex space-x-4">
          <li>
            <Link to="/" className="text-white hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
              Home
            </Link>
          </li>
          <li>
            <Link to="/blogs" className="text-white hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
              Blogs
            </Link>
          </li>
          <li>
            <Link to="/dashboard" className="text-white hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
              Dashboard
            </Link>
          </li>
          <li>
            <Link to="/signup" className="text-white hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
              Sign Up
            </Link>
          </li>
          <li>
            <Link to="/login" className="text-white hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
              Log In
            </Link>
          </li>
        </ul>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/blogs" element={<Blog />} />
        <Route path="/createpost" element={<CreatePost />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/login" element={<Login />} />

      </Routes>
    </Router>
  );
}

export default App;
