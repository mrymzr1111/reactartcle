import React from 'react';
import styled from "./aticle.module.css";
const Article = (props) => {

    
    return (
        <div className={styled.articleWrapper} >
        <img    src={props.articless.imageUrl} alt='pic'/>
      
       <h3>{props.articless.title}   </h3>
       <p>  {props.articless.duration}    </p>
        </div>
    );
}

export default Article;
