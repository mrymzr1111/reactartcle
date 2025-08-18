
import React from "react";
import { NavLink } from "react-router-dom"; 

const Navvbar = ({ title }) => {
  return (
    <header className="bg-white shadow-md p-4">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
     
        <h1 className="text-2xl font-bold text-gray-800">{title}</h1>

        <nav>
          <ul className="flex space-x-6 text-gray-700 font-medium">
            <li>
              <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive
                    ? "text-blue-500 hover:text-blue-700 transition-colors duration-200"
                    : "hover:text-gray-900 transition-colors duration-200"
                }
              >
                Article List
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/About"
                className={({ isActive }) =>
                  isActive
                    ? "text-blue-500 hover:text-blue-700 transition-colors duration-200"
                    : "hover:text-gray-900 transition-colors duration-200"
                }
              >
                About Us
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/Contact"
                className={({ isActive }) =>
                  isActive
                    ? "text-blue-500 hover:text-blue-700 transition-colors duration-200"
                    : "hover:text-gray-900 transition-colors duration-200"
                }
              >
                Contact Us
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/dashboard"
                className={({ isActive }) =>
                  isActive
                    ? "text-blue-500 hover:text-blue-700 transition-colors duration-200"
                    : "hover:text-gray-900 transition-colors duration-200"
                }
              >
                Dashboard
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Navvbar;
