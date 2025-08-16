import React, { useEffect, useState } from 'react';
import Navvbar from '../../components/navvbar';
import styled from "./home.module.css";
import Article from '../../components/articles/article';
import axios from 'axios';
import Footer from '../../components/footer/footer';


const Home = () => {
 
    // const articless=[
    //     {id:1, imageUrl:'https://plus.unsplash.com/premium_photo-1683887034072-ce1d1c3bb2a2?q=80&w=1469&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',title:"عنوان اول",duration:"مدت زمان  ۲۰ دقیقه"},
    //     {id:2, imageUrl:'https://plus.unsplash.com/premium_photo-1682787494765-44d02d12f5be?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',title:"عنوان دوم ",duration:"مدت زمان  ۲۰ دقیقه"},
    //     {id:3, imageUrl:'https://plus.unsplash.com/premium_photo-1681494162721-9fd9f120a9e2?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',title:" عنوان سوم ",duration:"مدت زمان  ۲۰ دقیقه"},
    //     {id:4, imageUrl:"https://media.istockphoto.com/id/2148332363/photo/learning-about-the-heart.webp?b=1&s=612x612&w=0&k=20&c=0uV9Gf11w1MnzQcTd9hRfKK7upwhbwFixVRP1dea10Y=",title:" عنوان چهارم",duration:"مدت زمان  ۲۰ دقیقه"},
    //     {id:5, imageUrl:'https://images.unsplash.com/photo-1656087816641-df8d718021e7?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',title:" عنوان پنجم",duration:"مدت زمان  ۲۰ دقیقه"},
    //     {id:6, imageUrl:'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTJ8fGVkdWNhdGlvbnxlbnwwfHwwfHx8MA%3D%3D',title:"عنوان ششم ",duration:"مدت زمان  ۲۰ دقیقه"},
    //     {id:7, imageUrl:'https://images.unsplash.com/photo-1584697964358-3e14ca57658b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTF8fGVkdWNhdGlvbnxlbnwwfHwwfHx8MA%3D%3D',title:"عنوان هفتم",duration:"مدت زمان  ۲۰ دقیقه"},
    //     {id:8, imageUrl:'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTV8fGVkdWNhdGlvbnxlbnwwfHwwfHx8MA%3D%3D',title:" عنوان هشتم",duration:"مدت زمان  ۲۰ دقیقه"},
    //  ]

const [articless, setArticless] = useState([]);
// console.log(articless);


    useEffect(() => {
    //api call
axios.get("http://localhost:8000/articless").then((result)=>{
console.log(result.data.data);
setArticless(result.data.data)

})
.catch((error)=>{
    console.log(error);
    
})
        
    }, []);
    return (
        <div className={styled.homeWapper} >
            <Navvbar title="Maryam Blog"/>
         <div className='container'>
           <h2 > 
       New Article
           </h2>
       
     <div className={styled.articles}>
     {
        articless.map((articless)=>(
            <Article key={articless.id} articless={articless}/>
        ))
     }  
   
   
     
     </div>
     
         </div>
         <Footer/>
        </div>
      
    );
 
}
// http://localhost:8000/article
export default Home;



// pages/home/home.js
