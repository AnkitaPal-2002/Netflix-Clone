import React, { lazy, Suspense } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomeScreen from "./pages/Home/HomeScreen";
import HomePage from "./pages/Home/HomePage";
import Footer from "./components/Footer";

const App = () => {
  return (
    <>
      <Router>
        <Suspense fallback={<div>Loading...</div>}>
          <Routes>
            <Route path="/" element={<HomePage />}></Route>
          </Routes>
        </Suspense>
        <Footer />
      </Router>
    </>
  );
};

export default App;
