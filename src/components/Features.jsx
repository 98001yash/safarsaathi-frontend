const features = [
  {
    title: "Plan Trips Easily",
    description: "Create and manage your travel plans seamlessly with personalized options.",
    icon: "🧳",
  },
  {
    title: "Find Travel Companions",
    description: "Get matched with like-minded travelers based on your preferences.",
    icon: "🧍‍♀️🧍‍♂️",
  },
  {
    title: "In-App Chat",
    description: "Chat and coordinate with your travel buddies securely within the app.",
    icon: "💬",
  },
  {
    title: "Safety First",
    description: "Get peace of mind with verified companions, risk tagging, and safety preferences.",
    icon: "🛡️",
  },
  {
    title: "Virtual Travel Buddy Bot",
    description: "Ask questions and get instant travel help from our intelligent assistant.",
    icon: "🤖",
  },
];

const Features = () => {
  return (
    <section className="py-20 bg-gray-100">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <h2 className="text-4xl font-bold mb-12 text-gray-800">Why Use Safar Saathi?</h2>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, idx) => (
            <div key={idx} className="bg-white shadow-md rounded-xl p-6 hover:shadow-lg transition">
              <div className="text-4xl mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
