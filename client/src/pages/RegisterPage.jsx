import React from "react";
import heroBG from "../assets/hero.png";
import netflixLogo from "../assets/netflix-logo.png";

const RegisterPage = () => {
  return (
    <div
      className="relative flex flex-col min-h-screen bg-no-repeat"
      style={{
        backgroundImage: `linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.7)), url(${heroBG})`,
        backgroundSize: "contain", // Prevents zooming
        backgroundPosition: "center top", // Ensures full visibility
        backgroundRepeat: "no-repeat",
        backgroundColor: "#000", // Fills any empty space
      }}
    >
      {/* Navbar */}
      <header className="max-w-screen-lg mx-auto flex items-center justify-between p-6 w-full">
        {/* Logo aligned to the left */}
        <img src={netflixLogo} alt="Netflix Logo" className="w-36 md:w-48" />
      </header>
    </div>
  );
};

export default RegisterPage;
