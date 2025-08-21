// import { createContext, useState } from "react";
// // create context
// export const ThemeContext=createContext();

// //create provider component
// export const ThemeProvder=({children})=>{
// //flsee=light true=dark
// const[darkMode,setDarkMode]=useState(false);

// //function to toggle darkmode
// const toggleDarkMode=()=>{
//     setDarkMode(pre=>!pre);
// }
// //provide state & function to any components inside provider
// //renderong child component
// return(
// <ThemeContext.Provider value={{toggleDarkMode,darkMode}}>
//     {children}
// </ThemeContext.Provider>
// )
// }

import { createContext, useState } from "react";

// Create context
export const ThemeContext = createContext();

// Create provider component
export const ThemeProvider = ({ children }) => {
  // false = light mode, true = dark mode
  const [darkMode, setDarkMode] = useState(false);

  // Function to toggle dark mode
  const toggleDarkMode = () => {
    setDarkMode((prev) => !prev);
  };

  // Provide state and function to any components inside provider
  return (
    <ThemeContext.Provider value={{ toggleDarkMode, darkMode }}>
      {children}
    </ThemeContext.Provider>
  );
};


