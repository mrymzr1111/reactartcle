
// import Navvbar from "../../components/navvbar";

import Navvbar from "../../components/navvbar";
import AddArticle from "./addarticle";

// export default function Table(params) {
 
    
// return(
//     <div className="">
//         <Navvbar/>
//         {/* Table */}
//         <div className="pt-10">
//       <table className="w-full border-collapse border">
//         <thead>
//           <tr className="bg-gray-200">
//             <th className="border p-2">Title</th>
//             <th className="border p-2">Duration</th>
//             <th className="border p-2">Image</th>
//             <th className="border p-2">Actions</th>
//           </tr>
//         </thead>
//         <tbody>
       
//             <tr>
//               <td className="border p-2"></td>
//               <td className="border p-2"></td>
//               <td className="border p-2">
               
              
//               </td>
//               <td className="border p-2 space-x-2">


//  <button
//                 //   onClick={() => handleDelete(index)}
//                   className="bg-green-600 text-white px-3 py-1 rounded"
//                 >
//                   Add
//                 </button>


//                 <button
//                 //   onClick={() => handleEdit(index)}
//                   className="bg-yellow-500 text-white px-3 py-1 rounded"
//                 >
//                   Edit
//                 </button>
//                 <button
//                 //   onClick={() => handleDelete(index)}
//                   className="bg-red-600 text-white px-3 py-1 rounded"
//                 >
//                   Delete
//                 </button>
//               </td>
//             </tr>
     
//         </tbody>
//       </table> 
//       </div>
//     </div>
// )






// }
// import Navvbar from "../../components/navvbar";

// export default function Table() {
//   return (
//     <div className="min-h-screen bg-gray-50">
//       <Navvbar />

//       <div className="pt-10 px-4 container mx-auto">
//         <h2 className="text-3xl font-bold mb-6 text-center text-gray-800">
//           Articles Table
//         </h2>

//         <div className="overflow-x-auto bg-white rounded-lg shadow-md">
//           <table className="min-w-full divide-y divide-gray-200">
//             <thead className="bg-gray-100">
//               <tr>
//                 <th className="px-6 py-3 text-left text-sm font-medium text-gray-700 uppercase tracking-wider">
//                   Title
//                 </th>
//                 <th className="px-6 py-3 text-left text-sm font-medium text-gray-700 uppercase tracking-wider">
//                   Duration
//                 </th>
//                 <th className="px-6 py-3 text-left text-sm font-medium text-gray-700 uppercase tracking-wider">
//                   Image
//                 </th>
//                 <th className="px-6 py-3 text-center text-sm font-medium text-gray-700 uppercase tracking-wider">
//                   Actions
//                 </th>
//               </tr>
//             </thead>

//             <tbody className="divide-y divide-gray-200">
//               <tr className="hover:bg-gray-50 transition">
//                 <td className="px-6 py-4 text-gray-800">Sample Article</td>
//                 <td className="px-6 py-4 text-gray-800">20 minutes</td>
//                 <td className="px-6 py-4">
//                   <img
//                     src="https://via.placeholder.com/60"
//                     alt="Article"
//                     className="w-16 h-16 object-cover rounded-md shadow-sm"
//                   />
//                 </td>
//                 <td className="px-6 py-4 text-center space-x-2">
//                   <button className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-md transition">
//                     Add
//                   </button>
//                   <button className="bg-yellow-500 hover:bg-yellow-600 text-white px-4 py-2 rounded-md transition">
//                     Edit
//                   </button>
//                   <button className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-md transition">
//                     Delete
//                   </button>
//                 </td>
//               </tr>

//               <tr className="hover:bg-gray-50 transition">
//                 <td className="px-6 py-4 text-gray-800">Another Article</td>
//                 <td className="px-6 py-4 text-gray-800">15 minutes</td>
//                 <td className="px-6 py-4">
//                   <img
//                     src="https://via.placeholder.com/60"
//                     alt="Article"
//                     className="w-16 h-16 object-cover rounded-md shadow-sm"
//                   />
//                 </td>
//                 <td className="px-6 py-4 text-center space-x-2">
//                   <button   onClick={() => setOpen(true)}        className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-md transition">
//                     + Add
//                   </button>
                 
         
//                   <button className="bg-yellow-500 hover:bg-yellow-600 text-white px-4 py-2 rounded-md transition">
//                     Edit
//                   </button>
//                   <button className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-md transition">
//                     Delete
//                   </button>
//                 </td>
//               </tr>
//             </tbody>
//           </table>
//         </div>
//       </div>
//     </div>
//   );
// }

//////////////////////////////////////////////////////new down

// export default function Table({ setOpenModal }) {
//   return (
//     <div className="min-h-screen bg-gray-50">
//       <div className=" flex justify-end">
//   <button   onClick={() => setOpenModal(true)}   className=" mt-4 mr-10 bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-md transition">
//     + Add Article
//   </button>
// </div>
      
      
//      <div className= "top-0 right-0 m-4 z-10"> 
    
// </div>
//       <div className="pt-10 px-4 container mx-auto">

//         <h2 className="text-3xl font-bold mb-6 text-center text-gray-800">
//           Articles Table
//         </h2>

//         <div className="overflow-x-auto bg-white rounded-lg shadow-md">
//           <table className="min-w-full divide-y divide-gray-200">
//             <thead className="bg-gray-100">
//               <tr>
//                 <th className="px-6 py-3 text-left text-sm font-medium text-gray-700 uppercase tracking-wider">
//                   Title
//                 </th>
//                 <th className="px-6 py-3 text-left text-sm font-medium text-gray-700 uppercase tracking-wider">
//                   Duration
//                 </th>
//                 <th className="px-6 py-3 text-left text-sm font-medium text-gray-700 uppercase tracking-wider">
//                   Image
//                 </th>
//                 <th className="px-6 py-3 text-center text-sm font-medium text-gray-700 uppercase tracking-wider">
//                   Actions
//                 </th>
//               </tr>
//             </thead>

//             <tbody className="divide-y divide-gray-200">
//               <tr className="hover:bg-gray-50 transition">
//                 <td className="px-6 py-4 text-gray-800">Sample Article</td>
//                 <td className="px-6 py-4 text-gray-800">20 minutes</td>
//                 <td className="px-6 py-4">
//                   <img
//                     src="https://via.placeholder.com/60"
//                     alt="Article"
//                     className="w-16 h-16 object-cover rounded-md shadow-sm"
//                   />
//                 </td>
//                 <td className="px-6 py-4 text-center space-x-2">
//                   {/* <button className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-md transition">
//                     Add
//                   </button> */}
//                   <button className="bg-yellow-500 hover:bg-yellow-600 text-white px-4 py-2 rounded-md transition">
//                     Edit
//                   </button>
//                   <button className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-md transition">
//                     Delete
//                   </button>
//                 </td>
//               </tr>

//               <tr className="hover:bg-gray-50 transition">
//                 <td className="px-6 py-4 text-gray-800">Another Article</td>
//                 <td className="px-6 py-4 text-gray-800">15 minutes</td>
//                 <td className="px-6 py-4">
//                   <img
//                     src="https://via.placeholder.com/60"
//                     alt="Article"
//                     className="w-16 h-16 object-cover rounded-md shadow-sm"
//                   />
//                 </td>
//                 <td className="px-6 py-4 text-center space-x-2">
//                   {/* <button
//                     onClick={() => setOpenModal(true)} 
//                     className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-md transition"
//                   >
//                      Add
//                   </button> */}
//                   <button className="bg-yellow-500 hover:bg-yellow-600 text-white px-4 py-2 rounded-md transition">
//                     Edit
//                   </button>
//                   <button className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-md transition">
//                     Delete
//                   </button>
//                 </td>
//               </tr>
//             </tbody>
//           </table>
//         </div>
//       </div>
//     </div>
//   );
// }



import React from "react";

export default function Table({ setOpenModal }) {
  return (
    <div className="min-h-screen bg-yellow-3">
      <div className="flex justify-end">
        <button
          onClick={() => setOpenModal(true)}
          className="mt-4 mr-10 bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-md transition"
        >
          + Add Article
        </button>
      </div>

      <div className="pt-10 px-4 container mx-auto">
        <h2 className="text-3xl font-bold mb-6 text-center text-gray-800">
          Articles Table
        </h2>

        <div className="overflow-x-auto bg-white rounded-lg shadow-md">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-100">
              <tr>
                <th className="px-6 py-3 text-left text-sm font-medium text-gray-700 uppercase tracking-wider">
                  Title
                </th>
                <th className="px-6 py-3 text-left text-sm font-medium text-gray-700 uppercase tracking-wider">
                  Duration
                </th>
                <th className="px-6 py-3 text-left text-sm font-medium text-gray-700 uppercase tracking-wider">
                  Image
                </th>
                <th className="px-6 py-3 text-center text-sm font-medium text-gray-700 uppercase tracking-wider">
                  Actions
                </th>
              </tr>
            </thead>

            <tbody className="divide-y divide-gray-200">
              {/* Sample Article */}
              <tr className="hover:bg-gray-50 transition">
                <td className="px-6 py-4 text-gray-800">Sample Article</td>
                <td className="px-6 py-4 text-gray-800">20 minutes</td>
                <td className="px-6 py-4">
                  <img
                    src="https://via.placeholder.com/60"
                    alt="Article"
                    className="w-16 h-16 object-cover rounded-md shadow-sm"
                  />
                </td>
                <td className="px-6 py-4 text-center space-x-2">
                  <button className="bg-yellow-500 hover:bg-yellow-600 text-white px-4 py-2 rounded-md transition">
                    Edit
                  </button>
                  <button className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-md transition">
                    Delete
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
