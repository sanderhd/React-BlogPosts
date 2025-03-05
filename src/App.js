import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar"; 
import Footer from "./components/footer";
import Home from "./pages/Home";
import Blogs from "./pages/Blogs";
import Blog from "./pages/Blog/Blog";
import CreatePost from "./pages/CreatePost";
import Dashboard from "./pages/auth/Dashboard";
import SignUp from "./pages/auth/signup";
import Login from "./pages/auth/login";

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Navbar /> {/* Nieuwe navbar-component */}

        <div className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/blogs" element={<Blogs />} />
            <Route path="/blog/:id" element={<Blog />} />
            <Route path="/createpost" element={<CreatePost />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/login" element={<Login />} />
          </Routes>
        </div>

        <Footer />
      </div>
    </Router>
  );
}

export default App;
