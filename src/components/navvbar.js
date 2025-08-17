
import React from "react";
import { Link } from "react-router-dom";

const Navvbar = ({ title }) => {
  return (
    <header className="bg-white shadow-md p-4">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo / Title */}
        <h1 className="text-2xl font-bold text-gray-800">{title}</h1>

        {/* Navigation Links */}
        <nav>
          <ul className="flex space-x-6 text-gray-700 font-medium">
            <li>
              <Link
                to="/"
                className="hover:text-gray-900 transition-colors duration-200"
              >
                Article List
              </Link>
            </li>
            <li>
              <Link
                to="/About"
                className="hover:text-gray-900 transition-colors duration-200"
              >
                About Us
              </Link>
            </li>
            <li>
              <Link
                to="/Contact"
                className="hover:text-gray-900 transition-colors duration-200"
              >
                Contact Us
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Navvbar;
