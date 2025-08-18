// import React, { useState } from "react";
// // import AddArticle from "./AddArticle";  // Update with the correct path
// import Table from "../dashboard/Table";

// import AddArticle from "../dashboard/addarticle";
// import Navvbar from "../../components/navvbar";

// export default function Dashboard() {
//   const [openModal, setOpenModal] = useState(false);

//   return (
//     <div className="min-h-screen bg-gray-50">
//            <div className="p-3">
//         <h2 className="text-left text-3xl font-bold mb-6 text-gray-800">Articles</h2>
//       </div>
    

           
//            <div className="pt-16">
//   <Table setOpenModal={setOpenModal} />

//            </div>
       
//      <div className="">
      
//        <div className= "top-0 right-0 m-4 z-10"> 
//      <AddArticle/>
// </div>
 
//      </div>
      
//     </div>
//   );
// }
/////////////////////////////////////////////////////////////////
// import React, { useState } from "react";
// // import AddArticle from "./AddArticle";  // Update with the correct path
// import Table from "../dashboard/Table";
// import AddArticle from "../dashboard/addarticle";
// import Navvbar from "../../components/navvbar";

// export default function Dashboard() {
//   const [openModal, setOpenModal] = useState(false);

//   return (
//     <div className=" bg-gray-50">
//          <Navvbar/>
      

//       <div className="">
//         {/* This div is for the Table */}
//         <div className="pt-0">
//           <Table setOpenModal={setOpenModal} />
//         </div>
        
      
//         {/* <div className=" top-4 right-4 z-10">
//           <AddArticle />
//         </div> */}
//  {openModal && (
//         <div className="top-4 right-4 z-10 fixed inset-0 flex items-center justify-center">
//           <AddArticle setOpenModal={setOpenModal} /> {/* Pass setOpenModal to AddArticle */}
//         </div>
//       )}


//       </div>
//     </div>
//   );
// }
import React, { useState } from "react";
import Table from "../dashboard/Table";
import AddArticle from "../dashboard/addarticle";
import Navvbar from "../../components/navvbar";

export default function Dashboard() {
  const [openModal, setOpenModal] = useState(false);

  return (
    <div className="bg-gray-900">
      <Navvbar />
      <div className="pt-6">
        {/* Table */}
        <Table setOpenModal={setOpenModal} />

        {/* Modal */}
        {openModal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 backdrop-blur-sm">
            <AddArticle setOpenModal={setOpenModal} />
          </div>
        )}
      </div>
    </div>
  );
}
