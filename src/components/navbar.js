import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="fixed top-0 w-full bg-black/30 backdrop-blur-lg text-white p-4 shadow-lg z-50 bg-gray-800">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <div className="text-xl font-bold">
          <Link to="/">Sander</Link>
        </div>
        <ul className="flex space-x-4">
          <li>
            <Link to="/" className="hover:text-blue-400 transition">
              Home
            </Link>
          </li>
          <li>
            <Link to="/blogs" className="hover:text-blue-400 transition">
              Blogs
            </Link>
          </li>
          <li>
            <Link to="/dashboard" className="hover:text-blue-400 transition">
              Dashboard
            </Link>
          </li>
          <li>
            <Link to="/signup" className="hover:text-blue-400 transition">
              Sign Up
            </Link>
          </li>
          <li>
            <Link to="/login" className="hover:text-blue-400 transition">
              Log In
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
