import React, { useEffect, useState } from "react";
import Hero from "../components/Hero";
import LatestPost from "../components/LatestPost";

function Home() {
    return (
        <div>
            <Hero />
            <LatestPost />
        </div>
    );
}

export default Home;
