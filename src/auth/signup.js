import React from "react";

function signup() {
    return (
        <div>
            <h1>Sign Up</h1>
            <div>
                <input type="text" placeholder="Username" />
                <input type="password" placeholder="Password" />
                <button>Sign Up</button>
            </div>
        </div>
    );
}

export default signup;