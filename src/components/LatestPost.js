import React, { useEffect, useState } from "react";

function LatestPost() {
    const [latestPost, setLatestPost] = useState(null);

    useEffect(() => {
        fetch("http://localhost:5000/posts")
            .then((res) => res.json())
            .then((data) => {
                const latest = data[data.length - 1];
                setLatestPost(latest);
            })
            .catch((error) => console.error("Error fetching posts:", error));
    }, []);

    return (
        <div>
            <div className="p-6">
                <h2 className="text-3xl font-bold">Laatste blogpost</h2>
                {latestPost ? (
                    <div className="mt-4 p-4 border rounded-lg shadow">
                        <h3 className="text-2xl font-semibold">{latestPost.title}</h3>
                        <p className="text-gray-600">Auteur: {latestPost.author}</p>
                        <p className="text-gray-800 mt-2">{latestPost.content}</p>
                        <p className="text-sm text-gray-500">Datum: {latestPost.date}</p>
                    </div>
                ) : (
                    <p className="text-gray-500">Laden...</p>
                )}
            </div>
        </div>
    );
}

export default LatestPost;
