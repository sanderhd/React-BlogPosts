import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./Home";
import Blog from "./Blog";
import SignUp from "./auth/signup";
import Login from "./auth/login";

function App() {
  return (
    <Router>
      <nav className="bg-white-300 p-4">
        <ul className="flex space-x-4">
          <li>
            <Link to="/" className="text-black hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
              Home
            </Link>
          </li>
          <li>
            <Link to="/blog" className="text-black hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
              Blog
            </Link>
          </li>
          <li>
            <Link to="/signup" className="text-black hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
              Sign Up
            </Link>
          </li>
          <li>
            <Link to="/login" className="text-black hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
              Log In
            </Link>
          </li>
        </ul>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </Router>
  );
}

export default App;
