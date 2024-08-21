

import './App.css';
import About from './pages/about';
// import Navvbar from './components/navvbar';
import Home from './pages/home/home';
 import { Route,Routes } from "react-router-dom";




function App() {

  return (
    <div className="">
 <Routes>
 <Route path="/" element={<Home/>}  />
<Route path='/about' element={<About/>}/>




 </Routes>
  


 
  



    </div>

  );
}

export default App;
