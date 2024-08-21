import React from 'react';
import styled from "./navbar.module.css";
import {  Link} from "react-router-dom";
const Navvbar = (props) => {
    // console.log(props);
    
    // const title= "مریم بلاگ"
    return (
   <div className={styled.headerWrapper}>
    <div className='container'>
  <div className={styled.header}>
           <h3>{props.title} </h3>
            <ul >
             <li><Link to={"/"}>  لیست مقالات </Link> </li>
    <li><Link to={"/About"}> درباره ی ما </Link></li>
               <li>ارتباط با ما</li>

               

            </ul>
        </div>
      </div>
   </div>
    );
}

export default Navvbar;
