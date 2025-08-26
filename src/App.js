

import './App.css';

import About from './pages/about';
import Articlepage from './pages/articlepage/articlepage';
import Contact from './pages/Contact';
// import Navvbar from './components/navvbar';
import Home from './pages/home/home';
 import { Route,Routes } from "react-router-dom";
import './index.css';
import AddArticle from './pages/dashboard/addarticle';
import Dashboard from './pages/dashboard/dashboard';
import UpdateArticle from './pages/dashboard/update';
import { useContext } from 'react';
import { ThemeContext } from './togglecontext/themeContext';
import Name from './pages/mm';



function App() {
// const{toggleDarkMode,darkMode}=useContext(ThemeContext)





  return (
    <div className="">
      {/* <div className={`min-h-screen flex flex-col items-center justify-center transition-colors duration-300
      
  ${darkMode? "bg-gray-900 text-white": "bg-white text-white"}`}>
    <h1 className='text-3xl font-bold mb-4'>

      {darkMode? "daark mode":"light mode"}
    </h1>
<button  onClick={toggleDarkMode} className='px-4 py-2 rounded-lg bg-indigo-500 text-white hover:bg-indigo-600 transition'>
  toggle mode
</button>
    </div>   */}
 <Routes>
 <Route path="/" element={<Home/>}  />

<Route path='/about' element={<About/>}/>
<Route path='/Contact' element={<Contact/>}/>
<Route path='/article/:id' element={<Articlepage/>}/>

<Route path='/dashboard' element={<  Dashboard/>}/>

 <Route path="/update/:id" element={<UpdateArticle />} />
  <Route path='/mm' element={< Name />} />
 

 </Routes>
  


   </div>
  



   

  );
}

export default App;
