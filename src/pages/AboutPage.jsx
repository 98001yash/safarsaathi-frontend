// src/pages/AboutPage.jsx

const AboutPage = () => {
  return (
    <div className="bg-white text-gray-800 px-6 py-20">
      <div className="max-w-5xl mx-auto text-center">
        <h1 className="text-4xl font-bold mb-6 text-indigo-700">Why Safar Saathi?</h1>
        <p className="text-lg mb-12 text-gray-600">
          We are redefining the way people find travel companions. Whether you're an adventurer, a planner, or a spontaneous explorer — our platform helps you connect, plan, and travel with ease.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 text-left">
          <div className="bg-indigo-50 p-6 rounded-2xl shadow hover:shadow-md transition">
            <h3 className="text-xl font-semibold text-indigo-600 mb-2">Smart Matching</h3>
            <p className="text-gray-600">
              Our AI-powered engine understands your preferences and suggests the most compatible travel companions for your journey.
            </p>
          </div>
          <div className="bg-indigo-50 p-6 rounded-2xl shadow hover:shadow-md transition">
            <h3 className="text-xl font-semibold text-indigo-600 mb-2">Flexible Planning</h3>
            <p className="text-gray-600">
              Create, update, and manage trip plans easily. Define your trip goals, travel style, and invite potential companions.
            </p>
          </div>
          <div className="bg-indigo-50 p-6 rounded-2xl shadow hover:shadow-md transition">
            <h3 className="text-xl font-semibold text-indigo-600 mb-2">Safe & Private</h3>
            <p className="text-gray-600">
              Your safety is our priority. We provide anonymous feedback, verified users, and travel behavior-based risk scoring.
            </p>
          </div>
        </div>

        <div className="mt-16">
          <a href="/signup">
            <button className="bg-indigo-600 text-white px-8 py-3 rounded-full font-semibold hover:bg-indigo-700 transition">
              Create Your Account
            </button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
