import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import heroBG from "../../assets/hero.png";
import netflixLogo from "../../assets/netflix-logo.png";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast, Toaster } from "react-hot-toast";
import { useAuthUser } from "../../store/authUser";

// Validation Schema
const formSchema = z.object({
  username: z.string().min(3, "Username must be at least 3 characters long"),
  email: z.string().email("Invalid email address"),
  password: z
    .string()
    .min(8, "Password must be at least 8 characters long")
    .refine(
      (val) => /[A-Z]/.test(val),
      "Password must contain an uppercase letter"
    )
    .refine(
      (val) => /[a-z]/.test(val),
      "Password must contain a lowercase letter"
    )
    .refine((val) => /\d/.test(val), "Password must contain a number")
    .refine(
      (val) => /[@$!%*?&]/.test(val),
      "Password must contain a special character"
    ),
});

const RegisterPage = () => {
  const { searchParams } = new URL(document.location);
  const emailValue = searchParams.get("email") || "";
  const { signup } = useAuthUser();

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors, isValid },
  } = useForm({
    resolver: zodResolver(formSchema),
    mode: "onBlur",
    defaultValues: { email: emailValue },
  });

  // Correct form submission handler
  const onSubmit = (data) => {
    //console.log("Form Data:", data);
    signup(data);
    //toast.success("🎉 Registration successful!", { duration: 3000 });
  };

  useEffect(() => {
    setValue("email:", emailValue);
  }, [setValue, emailValue]);

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

      {/* Registration Form */}
      <div className="flex justify-center items-center mt-10 mx-3">
        <div className="w-full max-w-md p-8 space-y-6 bg-black/70 rounded-lg shadow-lg">
          <h1 className="text-3xl font-bold text-white text-center">Sign Up</h1>

          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
            {/* Username */}
            <div>
              <input
                {...register("username")}
                type="text"
                placeholder="Username"
                className="w-full p-3 bg-gray-800 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-red-600"
              />
              {errors.username && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.username.message}
                </p>
              )}
            </div>

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
              Sign Up
            </button>
          </form>

          {/* Sign-in Link */}
          <p className="text-gray-400 text-sm text-center">
            Already a member?{" "}
            <Link to="/login" className="text-red-500 hover:underline">
              Sign In
            </Link>
          </p>
        </div>
      </div>

      {/* Toast Notifications */}
      <Toaster position="top-center" />
    </div>
  );
};

export default RegisterPage;
