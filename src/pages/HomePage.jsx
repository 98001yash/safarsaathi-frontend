import React from "react";

const HomePage = () => {
  return (
    <div className="bg-white text-gray-800">
      {/* Hero Section */}
      <section
        className="relative h-[90vh] flex items-center justify-center bg-cover bg-center"
        style={{
          backgroundImage: "url(https://source.unsplash.com/1600x900/?travel,adventure)",
        }}
      >
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-indigo-800 via-purple-800 to-pink-600 opacity-80" />

        {/* Text Content */}
        <div className="relative z-10 text-center px-4 max-w-3xl">
          <h1 className="text-5xl font-bold text-white mb-4 leading-tight drop-shadow-md">
            Discover Your Ideal Travel Companion
          </h1>
          <p className="text-lg text-gray-200 mb-6">
            Plan smart, connect with like-minded travelers, and explore the world together – safely and effortlessly.
          </p>
          <div className="space-x-4">
            <button className="bg-white text-indigo-700 px-6 py-3 rounded-full hover:bg-gray-100 transition font-semibold">
              Get Started
            </button>
            <button className="bg-indigo-500 text-white px-6 py-3 rounded-full hover:bg-indigo-600 transition font-semibold">
              Learn More
            </button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-6 bg-gray-100">
        <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">What We Offer</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {[
            {
              title: "Smart Matching",
              desc: "AI-powered companion recommendations based on your lifestyle and trip type.",
              icon: "🤖",
            },
            {
              title: "Trip Planning",
              desc: "Create and manage trips, set preferences, and invite your ideal match.",
              icon: "🗺️",
            },
            {
              title: "Safety & Privacy",
              desc: "Anonymous reviews, verified users, and risk tagging for safer travel.",
              icon: "🛡️",
            },
          ].map(({ title, desc, icon }) => (
            <div
              key={title}
              className="bg-white p-8 rounded-3xl shadow-lg text-center hover:shadow-2xl transition duration-300"
            >
              <div className="text-5xl mb-4">{icon}</div>
              <h3 className="text-xl font-semibold mb-2 text-indigo-700">{title}</h3>
              <p className="text-gray-600">{desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-indigo-700 via-purple-700 to-pink-600 text-white py-16 px-6 text-center">
        <h2 className="text-3xl font-bold mb-4">Join Safar Saathi Today</h2>
        <p className="mb-6 text-lg">Make your journey unforgettable with the perfect travel partner.</p>
        <button className="bg-white text-indigo-700 px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition">
          Create Your Account
        </button>
      </section>
    </div>
  );
};

export default HomePage;
