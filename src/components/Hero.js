import React from "react";
import { Link } from "react-router-dom";

function Hero() {
    return (
        <header className="relative w-full bg-gray-900 flex items-center justify-center text-white mt-8">
            <div className="relative z-10 text-center max-w-3xl px-4">
                <h1 className="text-5xl md:text-6xl font-extrabold text-white mt-32"> {/* Added mt-16 */}
                    Sander's <span className="text-blue-600">Blog Post Site</span>
                </h1>
                <p className="mt-4 text-lg md:text-xl text-gray-300">
                    Ontdek de nieuwste en meest interessante blogposts. Deel jouw eigen verhalen en lees die van anderen!
                </p>
                <div className="mt-6 flex justify-center space-x-4">
                    <Link
                        to="/blogs"
                        className="px-6 py-3 bg-gradient-to-r from-blue-400 to-blue-700 hover:from-blue-500 hover:to-blue-800 transition rounded-lg text-white text-lg font-semibold"
                    >
                        Bekijk Blogs
                    </Link>
                    <Link
                        to="/signup"
                        className="px-6 py-3 bg-gray-600 transition rounded-lg text-white text-lg font-semibold"
                    >
                        Registreer
                    </Link>
                </div>
            </div>
        </header>
    );
}

export default Hero;
