import React, { lazy, Suspense } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomeScreen from "./pages/Home/HomeScreen";
import HomePage from "./pages/Home/HomePage";
import Footer from "./components/Footer";
import RegisterPage from "./pages/Register/RegisterPage";
import LoginPage from "./pages/Login/LoginPage";
import { Toaster } from "sonner";

const App = () => {
  return (
    <>
      <Router>
        <Suspense fallback={<div>Loading...</div>}>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/register" element={<RegisterPage />} />
            <Route path="/login" element={<LoginPage />} />
          </Routes>
        </Suspense>
        <Toaster />
        <Footer />
      </Router>
    </>
  );
};

export default App;
