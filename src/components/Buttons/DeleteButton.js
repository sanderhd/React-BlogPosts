import React from "react";

function DeleteButton({ postId }) {
    const handleDelete = async () => {
        try {
            // Stap 1: Haal de volledige lijst met posts op
            const res = await fetch("http://localhost:5000/posts", {
                method: "GET",
                credentials: "include",
            });

            if (!res.ok) {
                throw new Error("Failed to fetch posts");
            }

            let posts = await res.json();

            // Stap 2: Filter de lijst en verwijder de post met het juiste ID
            const updatedPosts = posts.filter(post => post.id !== postId);

            // Stap 3: Stuur de nieuwe lijst terug naar de server
            const updateRes = await fetch("http://localhost:5000/posts", {
                method: "PUT", // Of "POST", afhankelijk van hoe je backend werkt
                credentials: "include",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(updatedPosts),
            });

            if (!updateRes.ok) {
                throw new Error("Failed to update posts");
            }

            alert("Post deleted successfully");
            window.location.reload();
        } catch (err) {
            console.error("Error deleting post:", err);
        }
    };

    return (
        <button
            className="cursor-pointer transition-all ml-4 bg-red-500 text-white px-6 py-2 rounded-lg border-red-600 border-b-[4px] hover:brightness-110 hover:-translate-y-[1px] hover:border-b-[6px] active:border-b-[2px] active:brightness-90 active:translate-y-[2px]"
            onClick={handleDelete}
        >
            Delete
        </button>
    );
}

export default DeleteButton;