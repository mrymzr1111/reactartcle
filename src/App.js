

import './App.css';
import ArticleDetail from './components/ArticleDetail';
import About from './pages/about';
import Articlepage from './pages/articlepage/articlepage';
import Contact from './pages/Contact';
// import Navvbar from './components/navvbar';
import Home from './pages/home/home';
 import { Route,Routes } from "react-router-dom";




function App() {

  return (
    <div className="">
 <Routes>
 <Route path="/" element={<Home/>}  />

<Route path='/about' element={<About/>}/>
<Route path='/Contact' element={<Contact/>}/>
<Route path='/article' element={<Articlepage/>}/>

{/* <Route path="/article/:id" element={<ArticleDetail />} /> */}

 </Routes>
  


 
  



    </div>

  );
}

export default App;
