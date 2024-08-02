import React, { useEffect, useState } from 'react';
import axios from "axios";
import { Navigate, Link } from 'react-router-dom';

export default function Register() {
  const [headingText, setHeadingText] = useState("Register");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [redirect, setRedirect] = useState(false);

  const [isMouseOver, setIsMouseOver] = useState(false);

  function handleMouseOver() {
    setIsMouseOver(true);
  }

  function handleMouseOut() {
    setIsMouseOver(false);
  }

  useEffect(() => {
    if (redirect) {
      setRedirect(false);
    }
  }, [redirect]);

  const handleRegister = async (event) => {
    event.preventDefault();
    try {
      await axios.post('/api/register', { firstName, lastName, email, password });
      setRedirect(true);
    } catch (error) {
      console.error("Registration error:", error);
    }
  };

  if (redirect) {
    return <Navigate to="/login" />;
  }

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md p-8 space-y-8 bg-white shadow-md rounded-lg">
        <h1 className="text-4xl font-bold text-center mb-6">{headingText}</h1>
        <form className="space-y-6" onSubmit={handleRegister}>
          <div>
            <label htmlFor="firstName" className="block text-sm font-medium text-gray-700">
              First Name
            </label>
            <input
              type="text"
              id="firstName"
              value={firstName}
              onChange={(event) => setFirstName(event.target.value)}
              name="firstName"
              placeholder="First Name"
              className="w-full px-3 py-2 mt-1 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-primary focus:border-primary"
            />
          </div>
          <div>
            <label htmlFor="lastName" className="block text-sm font-medium text-gray-700">
              Last Name
            </label>
            <input
              type="text"
              id="lastName"
              value={lastName}
              onChange={(event) => setLastName(event.target.value)}
              name="lastName"
              placeholder="Last Name"
              className="w-full px-3 py-2 mt-1 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-primary focus:border-primary"
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
              Email Address
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              name="email"
              placeholder="your@email.com"
              className="w-full px-3 py-2 mt-1 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-primary focus:border-primary"
            />
          </div>
          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-700">
              Password
            </label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
              name="password"
              placeholder="Enter Password"
              className="w-full px-3 py-2 mt-1 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-primary focus:border-primary"
            />
          </div>
          <button
            type="submit"
            className={`w-full py-2 text-white font-semibold rounded-lg transition-colors duration-200 ${
              isMouseOver ? 'bg-black' : 'bg-red-500'
            }`}
            onMouseOver={handleMouseOver}
            onMouseOut={handleMouseOut}
          >
            Register
          </button>
          <div className="text-center text-gray-500">
            Already have an account?{' '}
            <Link className="underline text-primary" to="/login">
              Login now
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
}