import React from "react";
import Hero from "../components/Hero";
import LatestPost from "../components/LatestPost";

function Home() {
    return (
        <div className="flex flex-col items-center">
            <Hero />    
            <div className="mt-12">
                <LatestPost />
            </div>
        </div>
    );
}

export default Home;
