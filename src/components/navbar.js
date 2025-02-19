import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="bg-gray-900 p-4">
      <ul className="flex space-x-4">
        <li>
          <Link to="/" className="text-white hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
            Home
          </Link>
        </li>
        <li>
          <Link to="/blog" className="text-white hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
            Blog
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
  );
}

export default Navbar;