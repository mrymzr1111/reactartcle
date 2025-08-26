
// import React, { useContext, useState } from "react";
// import { NavLink } from "react-router-dom";
// import { ThemeContext } from "../togglecontext/themeContext";

// const Navvbar = ({ title }) => {
//   const { toggleDarkMode, darkMode } = useContext(ThemeContext);
//   const [menuOpen, setMenuOpen] = useState(false);

//   const navItems = [
//     { to: "/", label: "Article List" },
//     { to: "/About", label: "About Us" },
//     { to: "/Contact", label: "Contact Us" },
//     { to: "/dashboard", label: "Dashboard" },
//   ];

//   return (
//     <header className="shadow-md p-4 bg-white dark:bg-gray-900 transition-colors duration-300 relative">
//       <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        
//         {/* Title (left corner) */}
//         <h1
//           className={`md:text-2xl text-md font-bold absolute left-6 top-1/2 transform -translate-y-1/2 ${
//             darkMode ? "text-white" : "text-gray-900"
//           }`}
//         >
//           {title}
//         </h1>

//         {/* Hamburger button (mobile only) */}
//         <button
//           onClick={() => setMenuOpen(!menuOpen)}
//           className="flex flex-col  p-1 justify-between w-6 h-6 md:hidden focus:outline-none z-50"
//           aria-label="Toggle menu"
//           aria-controls="mobile-menu"
//           aria-expanded={menuOpen}
//         >
//           <span
//             className={`block h-0.5 bg-current transform transition duration-300 ease-in-out origin-left ${
//               menuOpen ? "rotate-45 translate-y-2" : ""
//             }`}
//           />
//           <span
//             className={`block h-0.5 bg-current transition duration-300 ease-in-out ${
//               menuOpen ? "opacity-0" : "opacity-100"
//             }`}
//           />
//           <span
//             className={`block h-0.5 bg-current transform transition duration-300 ease-in-out origin-left ${
//               menuOpen ? "-rotate-45 -translate-y-2" : ""
//             }`}
//           />
//         </button>

//         {/* Desktop nav (centered or spaced as needed) */}
//         <nav className="hidden md:flex items-center justify-center md:space-x-10 space-x-2 text-gray-900 dark:text-gray-100 font-medium">
//           {navItems.map(({ to, label }) => (
//             <NavLink
//               key={to}
//               to={to}
//               className={({ isActive }) =>
//                 isActive
//                   ? "text-indigo-600 ml-8 sm:ml-[40] dark:text-indigo-400 font-semibold"
//                   : "hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors duration-200"
//               }
//             >
//               {label}
//             </NavLink>
//           ))}
//         </nav>

//         {/* Dark Mode Toggle Button (Right side for desktop only) */}
//         <button
//           onClick={toggleDarkMode}
//           aria-label="Toggle dark mode"
//           aria-pressed={darkMode}
//           className={` items-center h-8 rounded-full w-14 transition-colors duration-300 absolute right-6 top-1/2 transform -translate-y-1/2 md:block hidden ${
//             darkMode ? "bg-gray-400" : "bg-gray-300"
//           } cursor-pointer focus:outline-none focus:ring-2 focus:ring-gray-400`}
//         >
//           <span
//             className={`inline-block w-6 h-6 transform bg-white rounded-full shadow-md transition-transform duration-300 ${
//               darkMode ? "translate-x-6" : "translate-x-1"
//             }`}
//           />
//         </button>
//       </div>

//       {/* Mobile menu drawer */}
//       <div
//         id="mobile-menu"
//         className={`fixed justify-between top-0 right-0 h-full w-56 bg-white bg-opacity-80 dark:bg-gray-900 dark:bg-opacity-80 backdrop-blur-md shadow-lg transform transition-transform duration-300 ease-in-out z-50 ${
//           menuOpen ? "translate-x-0" : "translate-x-full"
//         }`}
//       >
//         <nav className="flex flex-col p-6 space-y-6 text-gray-900 dark:text-gray-100 font-medium">
//           {navItems.map(({ to, label }) => (
//             <NavLink
//               key={to}
//               to={to}
//               onClick={() => setMenuOpen(false)}
//               className={({ isActive }) =>
//                 isActive
//                   ? "text-indigo-600 dark:text-indigo-400 font-semibold"
//                   : "hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors duration-200"
//               }
//             >
//               {label}
//             </NavLink>
//           ))}

//           {/* Dark Mode Toggle Button (within the mobile menu) */}
//           <button
//             onClick={toggleDarkMode}
//             aria-label="Toggle dark mode"
//             aria-pressed={darkMode}
//             className={`relative  inline-flex items-center h-8 rounded-full w-14 transition-colors duration-300 ${
//               darkMode ? "bg-indigo-600" : "bg-gray-300"
//             } cursor-pointer focus:outline-none focus:ring-2 focus:ring-indigo-500 mt-4 self-start`}
//           >
//             <span
//               className={`inline-block w-6 h-6 transform bg-white rounded-full shadow-md transition-transform duration-300 ${
//                 darkMode ? "translate-x-6" : "translate-x-1"
//               }`}
//             />
//           </button>
//         </nav>
//       </div>

//       {/* Backdrop overlay */}
//       {menuOpen && (
//         <div
//           onClick={() => setMenuOpen(false)}
//           className="fixed inset-0 bg-black bg-opacity-30 backdrop-blur-sm z-40"
//         />
//       )}
//     </header>
//   );
// };

// export default Navvbar;
import React, { useContext, useState } from "react";
import { NavLink } from "react-router-dom";
import { ThemeContext } from "../togglecontext/themeContext";

const Navvbar = ({ title }) => {
  const { toggleDarkMode, darkMode } = useContext(ThemeContext);
  const [menuOpen, setMenuOpen] = useState(false);

  const navItems = [
    { to: "/", label: "Article List" },
    { to: "/About", label: "About Us" },
    { to: "/Contact", label: "Contact Us" },
    { to: "/dashboard", label: "Dashboard" },
  ];

  return (
    <header className="shadow-md p-4 bg-white dark:bg-gray-900 transition-colors duration-300 relative">
      {/* Hamburger button (now top left) */}
      <button
        onClick={() => setMenuOpen(!menuOpen)}
        className="flex flex-col p-1 justify-between w-6 h-6 absolute left-6 top-1 md:hidden focus:outline-none z-50"
        aria-label="Toggle menu"
        aria-controls="mobile-menu"
        aria-expanded={menuOpen}
      >
        <span
          className={`block h-0.5 bg-current transform transition duration-300 ease-in-out origin-left ${
            menuOpen ? "rotate-45 translate-y-2" : ""
          }`}
        />
        <span
          className={`block h-0.5 bg-current transition duration-300 ease-in-out ${
            menuOpen ? "opacity-0" : "opacity-100"
          }`}
        />
        <span
          className={`block h-0.5 bg-current transform transition duration-300 ease-in-out origin-left ${
            menuOpen ? "-rotate-45 -translate-y-2" : ""
          }`}
        />
      </button>

      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        {/* Title (left corner) */}
        <h1
          className={`md:text-2xl  pr-9  text-lg  font-bold absolute left-16 top-1/2 transform -translate-y-1/2 ${
            darkMode ? "text-white" : "text-gray-900"
          }`}
        >
          {title}
        </h1>

        {/* Desktop nav (centered or spaced as needed) */}
        <nav className="hidden pl-10 md:flex items-center justify-center md:space-x-10 space-x-3 text-gray-900 dark:text-white font-medium">
          {navItems.map(({ to, label }) => (
            <NavLink
              key={to}
              to={to}
              className={({ isActive }) =>
                isActive
                  ? "text-indigo-600 ml-8 sm:ml-[40] dark:text-indigo-400 font-semibold"
                  : "hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors duration-200"
              }
            >
              {label}
            </NavLink>
          ))}
        </nav>

        {/* Dark Mode Toggle Button (Right side for desktop only) */}
        <button
          onClick={toggleDarkMode}
          aria-label="Toggle dark mode"
          aria-pressed={darkMode}
          className={`items-center h-8 rounded-full w-14 transition-colors duration-300 absolute right-6 top-1/2 transform -translate-y-1/2 md:block hidden ${
            darkMode ? "bg-gray-400" : "bg-gray-300"
          } cursor-pointer focus:outline-none focus:ring-2 focus:ring-gray-400`}
        >
          <span
            className={`inline-block w-6 h-6 transform bg-white rounded-full shadow-md transition-transform duration-300 ${
              darkMode ? "translate-x-6" : "translate-x-1"
            }`}
          />
        </button>
      </div>

      {/* Mobile menu drawer */}
      <div
        id="mobile-menu"
        className={`fixed justify-between top-0 right-0 h-full w-56 bg-white bg-opacity-80 dark:bg-gray-900 dark:bg-opacity-80 backdrop-blur-md shadow-lg transform transition-transform duration-300 ease-in-out z-50 ${
          menuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <nav className="flex flex-col p-6 space-y-6 text-gray-900 dark:text-gray-100 font-medium">
          {navItems.map(({ to, label }) => (
            <NavLink
              key={to}
              to={to}
              onClick={() => setMenuOpen(false)}
              className={({ isActive }) =>
                isActive
                  ? "text-indigo-600 dark:text-indigo-400 font-semibold"
                  : "hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors duration-200"
              }
            >
              {label}
            </NavLink>
          ))}

          {/* Dark Mode Toggle Button (within the mobile menu) */}
          <button
            onClick={toggleDarkMode}
            aria-label="Toggle dark mode"
            aria-pressed={darkMode}
            className={`relative inline-flex items-center h-8 rounded-full w-14 transition-colors duration-300 ${
              darkMode ? "bg-indigo-600" : "bg-gray-300"
            } cursor-pointer focus:outline-none focus:ring-2 focus:ring-indigo-500 mt-4 self-start`}
          >
            <span
              className={`inline-block w-6 h-6 transform bg-white rounded-full shadow-md transition-transform duration-300 ${
                darkMode ? "translate-x-6" : "translate-x-1"
              }`}
            />
          </button>
        </nav>
      </div>

      {/* Backdrop overlay */}
      {menuOpen && (
        <div
          onClick={() => setMenuOpen(false)}
          className="fixed inset-0 bg-black bg-opacity-30 backdrop-blur-sm z-40"
        />
      )}
    </header>
  );
};

export default Navvbar;
