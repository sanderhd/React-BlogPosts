import React from "react";

function login() {
    return (
        <div>
            <h1>Log in</h1>
            <div>
                <input type="text" placeholder="Username" />
                <input type="password" placeholder="Password" />
                <button>Log In</button>
            </div>
        </div>
    );
}

export default login;