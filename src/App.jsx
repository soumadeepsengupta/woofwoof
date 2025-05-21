import React from "react";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import Footer from "./components/Footer";

const App = () => {
  return (
    <div className="bg-[#2D0100] text-yellow-200 min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <Header />
      </main>
      <Footer />
    </div>
  );
};

export default App;