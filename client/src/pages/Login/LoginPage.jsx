import React from "react";
import { Link } from "react-router-dom";
import heroBG from "../../assets/hero.png";
import netflixLogo from "../../assets/netflix-logo.png";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast, Toaster } from "sonner";

// Validation Schema for Login
const formSchema = z.object({
  email: z.string().email("Invalid email address"),
  password: z.string().min(8, "Password must be at least 8 characters long"),
});

const LoginPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm({
    resolver: zodResolver(formSchema),
    mode: "onBlur",
  });

  // Login Submission Handler
  const onSubmit = (data) => {
    console.log("Login Data:", data);
    toast.success("🎉 Login successful!", { duration: 3000 });
  };

  return (
    <div
      className="relative flex flex-col min-h-screen bg-no-repeat"
      style={{
        backgroundImage: `linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.7)), url(${heroBG})`,
        backgroundSize: "cover",
        backgroundPosition: "center top",
        backgroundRepeat: "no-repeat",
        backgroundColor: "#000",
      }}
    >
      {/* Navbar */}
      <header className="max-w-screen-lg mx-auto flex items-center justify-between p-6 w-full">
        <img src={netflixLogo} alt="Netflix Logo" className="w-36 md:w-48" />
      </header>

      {/* Login Form */}
      <div className="flex justify-center items-center mt-10 mx-3">
        <div className="w-full max-w-md p-8 space-y-6 bg-black/70 rounded-lg shadow-lg">
          <h1 className="text-3xl font-bold text-white text-center">Sign In</h1>

          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
            {/* Email */}
            <div>
              <input
                {...register("email")}
                type="email"
                placeholder="Email Address"
                className="w-full p-3 bg-gray-800 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-red-600"
              />
              {errors.email && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.email.message}
                </p>
              )}
            </div>

            {/* Password */}
            <div>
              <input
                {...register("password")}
                type="password"
                placeholder="Password"
                className="w-full p-3 bg-gray-800 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-red-600"
              />
              {errors.password && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.password.message}
                </p>
              )}
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className={`w-full py-3 text-white font-bold rounded-md transition ${
                isValid
                  ? "bg-red-600 hover:bg-red-700"
                  : "bg-gray-600 cursor-not-allowed"
              }`}
              disabled={!isValid}
            >
              Sign In
            </button>
          </form>

          {/* Sign-up Link */}
          <p className="text-gray-400 text-sm text-center">
            New here?{" "}
            <Link to="/register" className="text-red-500 hover:underline">
              Sign Up
            </Link>
          </p>
        </div>
      </div>

      {/* Toast Notifications */}
      <Toaster position="top-right" />
    </div>
  );
};

export default LoginPage;
