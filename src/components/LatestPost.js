import React, { useEffect, useState } from "react";
import Button from "../components/Buttons/ReadMoreButton";

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
        <div className="flex justify-center items-center">
            <div className="p-6 bg-gray-900 text-white flex flex-col justify-center items-center w-150">
                <h2 className="text-3xl font-bold">Laatste blogpost</h2>
                {latestPost ? (
                    <div className="mt-4 p-4 border rounded-lg shadow">
                        <h3 className="text-2xl font-semibold">{latestPost.title}</h3>
                        <p className="text-gray-600">Auteur: {latestPost.author}</p>
                        <p className="text-white mt-2">{latestPost.content}</p>
                        <p className="text-sm text-gray-500">Datum: {latestPost.date}</p>
                        <Button />
                    </div>
                ) : (
                    <div>
                        <p className="text-gray-500 text-center">Geen blogposts gevonden</p>
                    </div>
                )}
            </div>
        </div>
    );
}

export default LatestPost;
