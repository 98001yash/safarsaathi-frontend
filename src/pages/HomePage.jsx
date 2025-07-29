import React from "react";
import { useNavigate } from "react-router-dom";

// src/pages/HomePage.jsx
const HomePage = () => {
   const navigate = useNavigate();
  return (
    <div className="bg-white text-gray-900">
      {/* Hero Section */}
 <section
  className="relative h-[100vh] flex items-center justify-center bg-cover bg-center"
  style={{
    backgroundImage:
      "url('https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1600&q=80')",
  }}
>
  {/* Darker but soft overlay for contrast */}
  <div className="absolute inset-0 bg-black/50" />

  {/* Glass effect container with improved spacing and size */}
  <div className="relative z-10 backdrop-blur-xl bg-white/10 rounded-2xl p-12 text-center shadow-2xl max-w-3xl">
    <h1 className="text-6xl font-extrabold text-white drop-shadow-xl mb-6">
      Discover Your Ideal Travel Companion
    </h1>
    <p className="text-2xl text-gray-100 mb-8 leading-relaxed">
      Connect, plan, and explore together — safely and meaningfully.
    </p>
   <div className="flex justify-center gap-6 flex-wrap">
      <button
        onClick={() => navigate("/signup")}
        className="text-lg bg-white text-indigo-700 px-8 py-4 rounded-full font-bold hover:bg-gray-100 transition"
      >
        Get Started
      </button>
      <button
        onClick={() => navigate("/about")}
        className="text-lg bg-indigo-600 text-white px-8 py-4 rounded-full font-bold hover:bg-indigo-700 transition"
      >
        Learn More
      </button>
    </div>
  </div>
</section>



      {/* Stats / Trust Section */}
      <section className="py-16 px-6 bg-gray-100 text-center">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-8">Trusted by Travelers Worldwide</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-indigo-700 font-semibold text-lg">
            <div>
              <span className="text-3xl font-bold block">15k+</span>
              Active Users
            </div>
            <div>
              <span className="text-3xl font-bold block">5k+</span>
              Successful Trips
            </div>
            <div>
              <span className="text-3xl font-bold block">98%</span>
              Match Accuracy
            </div>
            <div>
              <span className="text-3xl font-bold block">24/7</span>
              Support
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-6 bg-white text-center">
        <h2 className="text-4xl font-bold mb-12">Why Choose Safar Saathi?</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-6xl mx-auto">
          {[
            {
              title: "Smart Matching",
              desc: "AI-powered companion recommendations tailored to your vibe.",
              icon: "🤝",
            },
            {
              title: "Effortless Planning",
              desc: "Create trips, invite companions, and sync preferences easily.",
              icon: "🗺️",
            },
            {
              title: "Safe & Verified",
              desc: "Trusted reviews, verified profiles, and risk tagging built-in.",
              icon: "🔒",
            },
          ].map(({ title, desc, icon }) => (
            <div
              key={title}
              className="bg-indigo-50 hover:bg-indigo-100 transition p-8 rounded-3xl shadow-lg"
            >
              <div className="text-5xl mb-4">{icon}</div>
              <h3 className="text-xl font-semibold mb-2">{title}</h3>
              <p className="text-gray-600">{desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white py-16 text-center px-6">
        <h2 className="text-3xl font-bold mb-4">Your Journey Starts Here</h2>
        <p className="mb-6 text-lg">
          Join a trusted community of travelers & connect with companions around the world.
        </p>
        <button className="bg-white text-indigo-700 px-8 py-3 rounded-full font-bold hover:bg-gray-100 transition">
          Sign Up Now
        </button>
      </section>
    </div>
  );
};

export default HomePage;
