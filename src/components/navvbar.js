
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
import React, { useContext } from "react"; 
import { NavLink } from "react-router-dom";  
import { ThemeContext } from "../togglecontext/themeContext"; 

const Navvbar = ({ title }) => {  
  const { toggleDarkMode,darkMode } = useContext(ThemeContext);  

  return (     
    <header className="shadow-md p-4 ">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">              
        <h1 className="text-2xl font-bold">{title}</h1>

        <div className="flex items-center space-x-6">
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

          {/* Dark Mode Toggle Button */}
          {/* <button 
            onClick={toggleDarkMode}  // Calls the toggle function
            className="px-4 py-2 rounded-lg bg-indigo-500 text-white hover:bg-indigo-600 transition"
          >
            <i className="fa-light fa-toggle-off text-3xl bold "></i>
          </button> */}
<button
  onClick={toggleDarkMode}
  aria-label="Toggle dark mode"
  aria-pressed={darkMode}
  className={`relative inline-flex items-center h-8 rounded-full w-14 transition-colors duration-300 ${
    darkMode ? "bg-indigo-600" : "bg-gray-300"
  }`}
>
  <span
    className={`inline-block w-6 h-6 transform bg-white rounded-full shadow-md transition-transform duration-300 ${
      darkMode ? "translate-x-6" : "translate-x-1"
    }`}
  />
</button>










          
        </div>
      </div>
    </header>
  ); 
};  

export default Navvbar;
