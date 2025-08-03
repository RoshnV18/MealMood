import React, { useState } from "react";
import { useNavigate } from "react-router";

const Login = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
    setError("");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { email, password } = formData;

    if (!email || !password) {
      setError("Please fill in all fields.");
      return;
    }

    if (
      (email === "roshan@gmail.com" && password === "123456") ||
      ("kunal@gmail.com" && password === "123456")
    ) {
      navigate("/");
    } else {
      setError("Invalid credentials.");
    }
  };

  return (
    <div className="w-full min-h-screen bg-[#f6f6f6] p-4 text-white">
      <div className="flex flex-col justify-center max-w-screen-lg mx-auto h-full">
        <div className="text-center pb-8">
          <h2 className="text-4xl sm:text-5xl font-bold inline border-b-4 border-gray-500 text-black">
            Login
          </h2>
          <p className="text-sm sm:text-base mt-8 text-black">
            Please enter your credentials to log in.
          </p>
        </div>

        <div className="flex justify-center items-center">
          <form
            onSubmit={handleSubmit}
            className="flex flex-col w-full md:w-1/2"
          >
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter your email"
              className="p-3 bg-transparent border border-gray-400 rounded-md text-black placeholder-gray-600 focus:outline-none focus:ring-2 focus:ring-cyan-500"
            />
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="Enter your password"
              className="my-4 p-3 bg-transparent border border-gray-400 rounded-md text-black placeholder-gray-600 focus:outline-none focus:ring-2 focus:ring-cyan-500"
            />

            {error && (
              <p className="text-red-500 text-sm mb-2 font-semibold">{error}</p>
            )}

            <button
              type="submit"
              className="text-white bg-gradient-to-r from-cyan-500 to-blue-500 px-8 py-3 mt-4 mx-auto rounded-md font-semibold transition-transform transform hover:scale-105 duration-300"
            >
              Log In
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
