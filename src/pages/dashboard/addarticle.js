// import React, { useState } from 'react';


// import Navvbar from '../../components/navvbar';
// import Footer from '../../components/footer/footer';
// import Input from '../../components/input/input';

// export default function AddArticle() {
//   const [article, setArticle] = useState({
//     article:"" ,duration:""
//   });

// const handleOnchange = async (e) => {
//  setArticle((pre)=>({
//     ...pre,
//      [e.target.title]:e.target.duration

//  })
   
//  )
// //    e.preventDefault();


// // switch (e.target.name) {
// //     case "title":
// //       setArticle( (pre)=>(
// //                 {
// //       ...pre,      
// // article:e.target.value
// //         }
// //       )

// //       )  
// //         break;
// // case "duration":
// // setArticle(
// // (pre)=>({
// //   ...pre, duration:e.target.value} 
// // )
// // )

// // break
// //     default:
// //         break;
// // }


// }



//   return (
//     <div className="  min-h-screen flex flex-col bg-gray-50">
//       <Navvbar/>

//       <div className=" pt-10 container mx-auto px-4 py-16 flex flex-col items-center">
//         <h2 className=" pt-4  text-3xl font-bold mb-6">Add New Article</h2>

//         <Input  handleOnchange={handleOnchange}  title="title" />
// <Input  handleOnchange={handleOnchange} duration="duration"  />
// <Input  handleOnchange={handleOnchange}   />
//           {/* <Input handleOnchange={change} name="duration"  /> */}
//       </div>

//       {/* <Footer /> */}
//     </div>
//   );
// }
// pages/admin/AddArticle.js
import React, { useState } from "react";
import Navvbar from "../../components/navvbar";
import Footer from "../../components/footer/footer";
import Input from "../../components/input/input";
// import Input from "../../components/input/Input";

export default function AddArticle() {
  const [article, setArticle] = useState({
    title: "",
    duration: "",
    image: null,
  });

  const handleOnchange = (e) => {
    const { name, value, files } = e.target;
    setArticle((prev) => ({
      ...prev,
      [name]: files ? files[0] : value, // handle file upload separately
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Article submitted:", article);
    
  };

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Navvbar />

      <div className="pt-10 container mx-auto px-4 py-16 flex flex-col items-center">
        <h2 className="text-3xl font-bold mb-6">Add New Article</h2>

        <form
          onSubmit={handleSubmit}
          className="bg-white p-6 rounded-lg shadow-md space-y-4 w-full max-w-lg"
        >
          <Input
            label="Article Title"
            name="title"
            placeholder="Enter article title"
            handleOnchange={handleOnchange}
          />
          <Input
            label="Duration"
            name="duration"
            placeholder="e.g., Duration: 20 minutes"
            handleOnchange={handleOnchange}
          />
          <Input
            label="Upload Image"
            name="image"
            type="file"
            handleOnchange={handleOnchange}
          />

          <button
            type="submit"
            className="w-full bg-gray-800 text-white py-2 rounded hover:bg-gray-700 transition"
          >
            Add Article
          </button>
        </form>
      </div>

    </div>
  );
}
