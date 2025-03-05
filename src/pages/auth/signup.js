import React, { useEffect, useState } from "react";

function SignUp() {
  const [users, setUsers] = useState([]);
  const [newUser, setNewUser] = useState({ email: "", password: "" });
  const [error, setError] = useState("");

  useEffect(() => {
    fetch("http://localhost:5000/users")
      .then((res) => res.json())
      .then((data) => setUsers(data));
  }, []);

  const handleChange = (e) => {
    setNewUser({ ...newUser, [e.target.name]: e.target.value });
  };

  const addUser = (e) => {
    e.preventDefault();
    console.log("SignUp form submitted", newUser);
    fetch("http://localhost:5000/signup", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newUser),
    })
      .then((res) => {
        if (!res.ok) {
          return res.json().then((err) => { throw new Error(err.error); });
        }
        return res.json();
      })
      .then((user) => {
        setUsers([...users, user]);
        setNewUser({ email: "", password: "" });
        setError("");
        alert("Sign up successful!");
      })
      .catch((err) => setError(err.message));
  };

  return (
    <div className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8 bg-gray-900">
      <div className="sm:mx-auto sm:w-full sm:max-w-sm">
        <h2 className="mt-10 text-center text-2xl font-bold tracking-tight text-white">
          Create a account
        </h2>
      </div>

      <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
        <form className="space-y-6" action="#" method="POST">
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-white"
            >
              Email address
            </label>
            <div className="mt-2">
              <input
                type="email"
                name="email"
                id="email"
                autoComplete="email"
                value={newUser.email}
                onChange={handleChange}
                required
                className="block w-full rounded-md bg-gray-800 px-3 py-1.5 text-base text-white outline outline-1 outline-gray-700 placeholder:text-gray-400 focus:outline-2 focus:outline-offset-2 focus:outline-indigo-600 sm:text-sm"
              />
            </div>
          </div>

          <div>
            <div className="flex items-center justify-between">
              <label
                htmlFor="password"
                className="block text-sm font-medium text-white"
              >
                Password
              </label>
            </div>
            <div className="mt-2">
              <input
                type="password"
                name="password"
                id="password"
                autoComplete="current-password"
                value={newUser.password}
                onChange={handleChange}
                required
                className="block w-full rounded-md bg-gray-800 px-3 py-1.5 text-base text-white outline outline-1 outline-gray-700 placeholder:text-gray-400 focus:outline-2 focus:outline-offset-2 focus:outline-indigo-600 sm:text-sm"
              />
            </div>
          </div>

          {error && (
            <div className="text-red-500 text-sm">
              {error}
            </div>
          )}

          <div>
            <button
              type="submit"
              className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              onClick={addUser}
            >
              Sign Up
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default SignUp;