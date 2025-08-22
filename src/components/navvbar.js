
// import React, { useContext } from "react";
// import { NavLink } from "react-router-dom"; 
// import { ThemeContext } from "../togglecontext/themeContext";

// const Navvbar = ({ title }) => {

// const{toggleDarkMode,darkMode}=useContext(ThemeContext)

  
//   return (
//     <header className="bg-white shadow-md p-4">
//       <div className="container mx-auto px-6 py-4 flex justify-between items-center">
     
//         <h1 className="text-2xl font-bold text-gray-800">{title}</h1>

//         <nav>
//           <div className="flex space-x-6 text-gray-700 font-medium">
// <div className={` flex flex-col items-center justify-center transition-colors duration-300
//  ${darkMode? "bg-gray-900 text-white": "bg-white text-white"}`}
// >
 
//     <h1 className='text-3xl font-bold mb-4'>

//       {darkMode? "daark mode":"light mode"}
//     </h1>
// <button  onClick={toggleDarkMode} className='px-4 py-2 rounded-lg bg-indigo-500 text-white hover:bg-indigo-600 transition'>
//   toggle mode
// </button>
     



// </div>




//             <li>
//               <NavLink
//                 to="/"
//                 className={({ isActive }) =>
//                   isActive
//                     ? "text-blue-500 hover:text-blue-700 transition-colors duration-200"
//                     : "hover:text-gray-900 transition-colors duration-200"
//                 }
//               >
//                 Article List
//               </NavLink>
//             </li>
//             <li>
//               <NavLink
//                 to="/About"
//                 className={({ isActive }) =>
//                   isActive
//                     ? "text-blue-500 hover:text-blue-700 transition-colors duration-200"
//                     : "hover:text-gray-900 transition-colors duration-200"
//                 }
//               >
//                 About Us
//               </NavLink>
//             </li>
//             <li>
//               <NavLink
//                 to="/Contact"
//                 className={({ isActive }) =>
//                   isActive
//                     ? "text-blue-500 hover:text-blue-700 transition-colors duration-200"
//                     : "hover:text-gray-900 transition-colors duration-200"
//                 }
//               >
//                 Contact Us
//               </NavLink>
//             </li>
//             <li>
//               <NavLink
//                 to="/dashboard"
//                 className={({ isActive }) =>
//                   isActive
//                     ? "text-blue-500 hover:text-blue-700 transition-colors duration-200"
//                     : "hover:text-gray-900 transition-colors duration-200"
//                 }
//               >
//                 Dashboard
//               </NavLink>
//             </li>
//           </ul>
//         </nav>
//       </div>
//     </header>
//   );
// };

// export default Navvbar;
//////////////////////////////////////////////////////////////////
// import React, { useContext } from "react"; 
// import { NavLink } from "react-router-dom";  
// import { ThemeContext } from "../togglecontext/themeContext";  

// const Navvbar = ({ title }) => {  
//   const { toggleDarkMode, darkMode } = useContext(ThemeContext);       

//   return (     
//     <header className={`shadow-md p-4 ${darkMode ? "bg-gray-900 text-white" : "bg-white text-black"}`}>
//       <div className="container mx-auto px-6 py-4 flex justify-between items-center">              
//         {/* Title on the Left */}
//         <h1 className="text-2xl font-bold">{title}</h1>

//         {/* Right Side: Toggle Mode and Navbar Links */}
//         <div className="flex items-center space-x-6">
//           {/* Dark/Light Mode Toggle Button */}
         

//           {/* Navbar Links */}
//           <nav>
//             <ul className="flex space-x-6 text-gray-700 font-medium">
//               <li>
//                 <NavLink
//                   to="/"
//                   className={({ isActive }) =>
//                     isActive
//                       ? "text-blue-500 hover:text-blue-700 transition-colors duration-200"
//                       : "hover:text-gray-900 transition-colors duration-200"
//                   }
//                 >
//                   Article List
//                 </NavLink>
//               </li>
//               <li>
//                 <NavLink
//                   to="/About"
//                   className={({ isActive }) =>
//                     isActive
//                       ? "text-blue-500 hover:text-blue-700 transition-colors duration-200"
//                       : "hover:text-gray-900 transition-colors duration-200"
//                   }
//                 >
//                   About Us
//                 </NavLink>
//               </li>
//               <li>
//                 <NavLink
//                   to="/Contact"
//                   className={({ isActive }) =>
//                     isActive
//                       ? "text-blue-500 hover:text-blue-700 transition-colors duration-200"
//                       : "hover:text-gray-900 transition-colors duration-200"
//                   }
//                 >
//                   Contact Us
//                 </NavLink>
//               </li>
//               <li>
//                 <NavLink
//                   to="/dashboard"
//                   className={({ isActive }) =>
//                     isActive
//                       ? "text-blue-500 hover:text-blue-700 transition-colors duration-200"
//                       : "hover:text-gray-900 transition-colors duration-200"
//                   }
//                 >
//                   Dashboard
//                 </NavLink>
//               </li>
//               {/* inja */}
//  <div className="flex flex-col items-center justify-center             p-0">
//             <h1 className="text-3xl font-bold mb-4">
//               {darkMode}
//             </h1> 
//             <button 
//               onClick={toggleDarkMode} 
//               className="px-4 py-2 rounded-lg bg-indigo-500 text-white hover:bg-indigo-600 transition"
//             >
//               Toggle Mode
//             </button>          
//           </div>




//             </ul>
//           </nav>
//         </div>
//       </div>
//     </header>
//   ); 
// };  

// export default Navvbar;
// import React, { useContext } from "react"; 
// import { NavLink } from "react-router-dom";  
// import { ThemeContext } from "../togglecontext/themeContext"; 

// const Navvbar = ({ title }) => {  
//   const { toggleDarkMode,darkMode } = useContext(ThemeContext);  

//   return (     
//     <header className="shadow-md p-4 ">
//       <div className="container mx-auto px-6 py-4 flex justify-between items-center">              
//         <h1 className="text-2xl font-bold">{title}</h1>

//         <div className="flex items-center space-x-6">
//           <nav>
//             <ul className="flex space-x-6 text-gray-700 font-medium">
//               <li>
//                 <NavLink
//                   to="/"
//                   className={({ isActive }) =>
//                     isActive
//                       ? "text-blue-500 hover:text-blue-700 transition-colors duration-200"
//                       : "hover:text-gray-900 transition-colors duration-200"
//                   }
//                 >
//                   Article List
//                 </NavLink>
//               </li>
//               <li>
//                 <NavLink
//                   to="/About"
//                   className={({ isActive }) =>
//                     isActive
//                       ? "text-blue-500 hover:text-blue-700 transition-colors duration-200"
//                       : "hover:text-gray-900 transition-colors duration-200"
//                   }
//                 >
//                   About Us
//                 </NavLink>
//               </li>
//               <li>
//                 <NavLink
//                   to="/Contact"
//                   className={({ isActive }) =>
//                     isActive
//                       ? "text-blue-500 hover:text-blue-700 transition-colors duration-200"
//                       : "hover:text-gray-900 transition-colors duration-200"
//                   }
//                 >
//                   Contact Us
//                 </NavLink>
//               </li>
//               <li>
//                 <NavLink
//                   to="/dashboard"
//                   className={({ isActive }) =>
//                     isActive
//                       ? "text-blue-500 hover:text-blue-700 transition-colors duration-200"
//                       : "hover:text-gray-900 transition-colors duration-200"
//                   }
//                 >
//                   Dashboard
//                 </NavLink>
//               </li>
//             </ul>
//           </nav>

//           {/* Dark Mode Toggle Button */}
//           {/* <button 
//             onClick={toggleDarkMode}  // Calls the toggle function
//             className="px-4 py-2 rounded-lg bg-indigo-500 text-white hover:bg-indigo-600 transition"
//           >
//             <i className="fa-light fa-toggle-off text-3xl bold "></i>
//           </button> */}
// <button
//   onClick={toggleDarkMode}
//   aria-label="Toggle dark mode"
//   aria-pressed={darkMode}
//   className={`relative inline-flex items-center h-8 rounded-full w-14 transition-colors duration-300 ${
//     darkMode ? "bg-indigo-600" : "bg-gray-300"
//   }`}
// >
//   <span
//     className={`inline-block w-6 h-6 transform bg-white rounded-full shadow-md transition-transform duration-300 ${
//       darkMode ? "translate-x-6" : "translate-x-1"
//     }`}
//   />
// </button>










          
//         </div>
//       </div>
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

  return (     
    <header className={`shadow-md p-4 bg-white dark:bg-gray-900 transition-colors duration-300`}>
      <div className="container mx-auto px-6 py-4 flex justify-between items-center relative">
        
        {/* Title */}
        <h1 className={`text-2xl font-bold ${darkMode ? "text-white" : "text-gray-900"}`}>{title}</h1>

        {/* Hamburger button (mobile only) */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden flex flex-col justify-between w-6 h-6 focus:outline-none z-40"
          aria-label="Toggle menu"
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

        {/* Desktop menu (hidden on mobile) */}
        <nav className="hidden md:flex md:items-center md:space-x-6 text-gray-900 dark:text-gray-100 font-medium">
          {[
            { to: "/", label: "Article List" },
            { to: "/About", label: "About Us" },
            { to: "/Contact", label: "Contact Us" },
            { to: "/dashboard", label: "Dashboard" },
          ].map(({ to, label }) => (
            <NavLink
              key={to}
              to={to}
              className={({ isActive }) =>
                isActive
                  ? "text-indigo-600 dark:text-indigo-400 font-semibold"
                  : "hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors duration-200"
              }
            >
              {label}
            </NavLink>
          ))}

          {/* Dark Mode Toggle Button */}
          <button
            onClick={toggleDarkMode}
            aria-label="Toggle dark mode"
            aria-pressed={darkMode}
            className={`relative inline-flex items-center h-8 rounded-full w-14 transition-colors duration-300 ${
              darkMode ? "bg-indigo-600" : "bg-gray-300"
            } cursor-pointer focus:outline-none focus:ring-2 focus:ring-indigo-500 ml-6`}
          >
            <span
              className={`inline-block w-6 h-6 transform bg-white rounded-full shadow-md transition-transform duration-300 ${
                darkMode ? "translate-x-6" : "translate-x-1"
              }`}
            />
          </button>
        </nav>

        {/* Mobile menu drawer with blur and transparency */}
        <div
          className={`fixed top-0 right-0 h-full w-64 bg-white bg-opacity-70 dark:bg-gray-900 dark:bg-opacity-70 backdrop-blur-md shadow-lg transform transition-transform duration-300 ease-in-out z-40
          ${menuOpen ? "translate-x-0" : "translate-x-full"}`}
        >
          <nav className="flex flex-col p-6 space-y-6 text-gray-900 dark:text-gray-100 font-medium">
            {[
              { to: "/", label: "Article List" },
              { to: "/About", label: "About Us" },
              { to: "/Contact", label: "Contact Us" },
              { to: "/dashboard", label: "Dashboard" },
            ].map(({ to, label }) => (
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

            {/* Dark Mode Toggle Button */}
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

        {/* Backdrop overlay when menu open with blur */}
        {menuOpen && (
          <div
            onClick={() => setMenuOpen(false)}
            className="fixed inset-0 bg-black bg-opacity-30 backdrop-blur-sm z-30"
          />
        )}
      </div>
    </header>
  ); 
};  

export default Navvbar;
