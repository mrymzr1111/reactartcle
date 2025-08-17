// import React from 'react';
// import styled from "./aticle.module.css";
// const Article = (props) => {

    
//     return (
//         <div className={styled.articleWrapper} >
//         <img    src={props.articless.imageUrl} alt='pic'/>
      
//        <h3>{props.articless.title}   </h3>
//        <p>  {props.articless.duration}    </p>
//         </div>
//     );
// }

// export default Article;
import React from 'react';

const Article = ({ articless }) => {
  return (
    <div className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300">
      <img 
        src={articless.imageUrl} 
        alt={articless.title} 
        className="w-full h-48 object-cover"
      />
      <div className="p-4">
        <h3 className="text-lg md:text-xl font-semibold text-gray-800 mb-2">
          {articless.title}
        </h3>
        <p className="text-gray-500 text-sm">{articless.duration}</p>
      </div>
    </div>
  );
}

export default Article;
