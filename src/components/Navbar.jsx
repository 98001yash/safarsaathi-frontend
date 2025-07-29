// src/components/Navbar.jsx
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-white shadow-md px-6 py-4 flex justify-between items-center">
      <h1 className="text-2xl font-bold text-blue-600">Safar Saathi</h1>
      <ul className="flex space-x-6 text-gray-700 font-medium">
        <li><Link to="/" className="hover:text-blue-600">Home</Link></li>
        <li><Link to="/trips" className="hover:text-blue-600">Trips</Link></li>
        <li><Link to="/companions" className="hover:text-blue-600">Companions</Link></li>
        <li><Link to="/chatbot" className="hover:text-blue-600">Travel Bot</Link></li>
        <li><Link to="/login" className="hover:text-blue-600">Login</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;
