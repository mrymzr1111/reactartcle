


// ////////////////////




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
//iiiiiiiiiiiiiiiiiiiiiiiiii

// import React, { useState } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import Navvbar from "../../components/navvbar";
// // import Footer from "../../components/footer/footer";
// import Input from "../../components/input/input";

// export default function AddArticle() {
//   const [article, setArticle] = useState({
//     title: "",
//     duration: "",
//     image: null,
//   });

//   const [open, setOpen] = useState(false);

//   const handleOnchange = (e) => {
//     const { name, value, files } = e.target;
//     setArticle((prev) => ({
//       ...prev,
//       [name]: files ? files[0] : value,
//     }));
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     console.log("Article submitted:", article);
//     setOpen(false);
//   };

//   return (
//     <div className="min-h-screen flex flex-col bg-gray-50">
   
   
   
//       <div className="pt-10 container mx-auto px-4 py-16 flex flex-col items-center">
     

//         {/* Button to open modal */}
//         <button
//           onClick={() => setOpen(true)}
//           className="px-6 py-3 bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-semibold rounded-xl shadow-lg hover:opacity-90 transition"
//         >
//           + Add New Article
//         </button>

//         {/* Modal with animation */}
//         <AnimatePresence>
//           {open && (
//             <motion.div
//               className="fixed inset-0 bg-black/40 backdrop-blur-sm flex items-center justify-center z-50"
//               initial={{ opacity: 0 }}
//               animate={{ opacity: 1 }}
//               exit={{ opacity: 0 }}
//             >
//               <motion.div
//                 initial={{ scale: 0.8, opacity: 0 }}
//                 animate={{ scale: 1, opacity: 1 }}
//                 exit={{ scale: 0.8, opacity: 0 }}
//                 transition={{ duration: 0.3 }}
//                 className="bg-white p-8 rounded-2xl shadow-2xl w-full max-w-lg relative"
//               >
//                 {/* Close Button */}
//                 <button
//                   onClick={() => setOpen(false)}
//                   className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 text-xl"
//                 >
//                   ✕
//                 </button>

//                 <h2 className="text-2xl font-bold mb-6 text-gray-800 text-center">
//                   Add New Article
//                 </h2>

//                 <form onSubmit={handleSubmit} className="space-y-5">
//                   <Input
//                     label="Article Title"
//                     name="title"
//                     placeholder="Enter article title"
//                     handleOnchange={handleOnchange}
//                   />
//                   <Input
//                     label="Duration"
//                     name="duration"
//                     placeholder="e.g., Duration: 20 minutes"
//                     handleOnchange={handleOnchange}
//                   />
//                   <Input
//                     label="Upload Image"
//                     name="image"
//                     type="file"
//                     handleOnchange={handleOnchange}
//                   />

//                   <button
//                     type="submit"
//                     className="w-full bg-gradient-to-r from-gray-800 to-gray-700 text-white py-3 rounded-xl font-semibold shadow-md hover:opacity-90 transition"
//                   >
//                     🚀 Add Article
//                   </button>



                  
//                 </form>
                
//               </motion.div>
//             </motion.div>
            
//           )}
//         </AnimatePresence>

//       </div>
      
//     </div>
//   );
// }









// import React, { useState } from "react";
// import Input from "../../components/input/input";

// export default function AddArticle() {
//   const [article, setArticle] = useState({
//     title: "",
//     duration: "",
//     image: null,
//   });

//   const handleOnchange = (e) => {
//     const { name, value, files } = e.target;
//     setArticle((prev) => ({
//       ...prev,
//       [name]: files ? files[0] : value,
//     }));
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     console.log("Article submitted:", article);
//   };

//   return (
//     <div className="min-h-screen flex flex-col bg-gray-50 pt-10 container mx-auto px-4 py-16 flex flex-col items-center">
//       <h2 className="text-2xl font-bold mb-6 text-gray-800">Add New Article</h2>

//       {/* Form without Modal */}
//       <form onSubmit={handleSubmit} className="space-y-5 w-full max-w-lg">
//         <Input
//           label="Article Title"
//           name="title"
//           placeholder="Enter article title"
//           handleOnchange={handleOnchange}
//         />
//         <Input
//           label="Duration"
//           name="duration"
//           placeholder="e.g., Duration: 20 minutes"
//           handleOnchange={handleOnchange}
//         />
//         <Input
//           label="Upload Image"
//           name="image"
//           type="file"
//           handleOnchange={handleOnchange}
//         />

//         <button
//           type="submit"
//           className="w-full bg-gradient-to-r from-gray-800 to-gray-700 text-white py-3 rounded-xl font-semibold shadow-md hover:opacity-90 transition"
//         >
//           🚀 Add Article
//         </button>
//       </form>
//     </div>
//   );
// }


/////////////////////
import React, { useState } from "react";
import Input from "../../components/input/input";

export default function AddArticle({ setOpenModal }) {
  const [article, setArticle] = useState({
    title: "",
    duration: "",
    image: null,
    content: "", // Add content field for the textarea
  });

  const handleOnchange = (e) => {
    const { name, value, files } = e.target;
    setArticle((prev) => ({
      ...prev,
      [name]: files ? files[0] : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Article submitted:", article);
  };

  const handleCloseModal = () => {
    setOpenModal(false); // Close the modal when the close button is clicked
  };

  return (
    <div className="bg-white p-10 rounded-xl shadow-lg w-full max-w-2xl space-y-6 relative">
      <button
        onClick={handleCloseModal}
        className="absolute top-4 right-4 text-3xl font-semibold text-gray-600 hover:text-indigo-600"
      >
        ×
      </button>
      {/* <h2 className=" p-0 text-2xl font-bold text-gray-800">Fill Article Details</h2> */}

      {/* Form Inside Modal */}
      <form onSubmit={handleSubmit} className="       space-y-5">
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

        {/* Textarea for Article Content */}
        <div className="space-y-2">
          <label className=" block text-sm font-medium text-gray-700">Article Content</label>
          <textarea
            name="content"
            value={article.content}
            onChange={handleOnchange}
            rows="5"
            placeholder="Enter article content..."
            className="block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 p-2"
          ></textarea>
        </div>

        <button
          type="submit"
          className="w-full bg-gradient-to-r from-indigo-600 to-indigo-500 text-white py-3 rounded-xl font-semibold shadow-md hover:opacity-90 transition-all"
        >
          🚀 Add Article
        </button>
      </form>
    </div>
  );
}
