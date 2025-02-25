import React, { useEffect } from "react";
import Hero from "../components/Hero";

function getLatestPost() {
    fetch("http://localhost:5000/posts")
        .then((res) => res.json())
        .then((data) => {
            const latestPost = data[data.length - 1];
            document.getElementById("latestTitle").innerHTML = latestPost.title;
            document.getElementById("latestAuthor").innerHTML = `Autheur: ` + latestPost.author;
            document.getElementById("latestDescription").innerHTML = latestPost.content;
            document.getElementById("latestPostDate").innerHTML = `Datum: ` + latestPost.date;
        }); 
}

function Home() {
    useEffect(() => {
        getLatestPost();
    }, []);

    return (
        // <div className="bg-gray-900 min-h-screen flex flex-col items-center justify-center text-white">
        //     <h1 className="text-3xl font-bold mb-8">
        //         Welkom op Sander's Blog Posts Site, uhh ja crazy!
        //     </h1>
            
        //     <div className="bg-gray-800 p-6 rounded-lg shadow-lg w-3/4">
        //         <h3 className="text-2xl font-bold mb-4">Laatste Post:</h3>
        //         <span id="latestTitle" className="block text-xl font-semibold mb-2"></span>
        //         <span id="latestAuthor" className="block text-lg mb-2"></span>
        //         <span id="latestDescription" className="block text-base mb-2"></span>
        //         <span id="latestPostDate" className="block text-sm text-gray-400"></span>
        //     </div>
        // </div>
        <div>
            <Hero />
        </div>
    );
}

export default Home;
