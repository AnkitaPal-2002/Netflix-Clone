import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import netflixLogo from "../../assets/netflix-logo.png";
import heroBG from "../../assets/hero.png";
import { ChevronRight } from "lucide-react";

const AuthScreen = () => {
  const [email, setEmail] = useState("");
  const navigate = useNavigate();

  const handleFormSubmit = (e) => {
    e.preventDefault();
    navigate("/signup?email=" + email);
  };

  return (
    <div
      className="relative h-screen bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: `linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.7)), url(${heroBG})`, // Dark overlay
      }}
    >
      {/* Navbar */}
      <header className="max-w-screen-lg mx-auto flex items-center justify-between p-6">
        <img src={netflixLogo} alt="Netflix Logo" className="w-36 md:w-48" />
        <Link
          to={"/login"}
          className="text-white bg-red-600 px-4 py-2 rounded-md font-semibold"
        >
          Sign In
        </Link>
      </header>

      {/* Hero Section */}
      <div className="flex flex-col items-center justify-center text-center text-white h-[80%] px-4">
        <h1 className="text-3xl md:text-5xl font-extrabold max-w-2xl leading-tight">
          Unlimited movies, TV shows, and more.
        </h1>
        <p className="text-lg md:text-xl mt-4">
          Watch anywhere. Cancel anytime.
        </p>
        <p className="mt-4 text-lg">
          Ready to watch? Enter your email to create or restart your membership.
        </p>

        {/* Email Form */}
        <form
          className="mt-6 flex flex-col md:flex-row gap-4 w-full max-w-lg"
          onSubmit={handleFormSubmit}
        >
          <input
            type="email"
            placeholder="Email address"
            className="p-3 rounded bg-black/80 border border-gray-500 text-white flex-1 focus:outline-none"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <button className="bg-red-600 text-xl px-6 py-3 rounded flex items-center justify-center font-semibold hover:bg-red-700 transition">
            Get Started <ChevronRight className="size-8 ml-2" />
          </button>
        </form>
      </div>
    </div>
  );
};

export default AuthScreen;
