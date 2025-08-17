

import './App.css';

import About from './pages/about';
import Articlepage from './pages/articlepage/articlepage';
import Contact from './pages/Contact';
// import Navvbar from './components/navvbar';
import Home from './pages/home/home';
 import { Route,Routes } from "react-router-dom";
import './index.css';
import AddArticle from './pages/dashboard/addarticle';


function App() {

  return (
    <div className="">
 <Routes>
 <Route path="/" element={<Home/>}  />

<Route path='/about' element={<About/>}/>
<Route path='/Contact' element={<Contact/>}/>
<Route path='/article/:id' element={<Articlepage/>}/>

<Route path='/addarticle' element={< AddArticle/>}/>



 </Routes>
  


 
  



    </div>

  );
}

export default App;
