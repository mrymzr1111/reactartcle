
// import { Link } from "react-router-dom";
// import React, { useEffect, useState } from "react";
// import axios from "axios";
// import Navvbar from "../../components/navvbar";
// import AddArticle from "./addarticle";

// export default function Table({ setOpenModal }) {
//   const [articles, setArticles] = useState([]);

//   useEffect(() => {
//     // Fetch articles from API
//     axios.get("http://localhost:8000/articless")
//       .then(response => {
//         setArticles(response.data);
//       })
//       .catch(error => {
//         console.error("There was an error fetching articles!", error);
//       });
//   }, []);

//   const deleteArticle = (id) => {
//     axios.delete(`http://localhost:8000/articless/${id}`)
//       .then(() => {
//         setArticles(articles.filter(article => article.id !== id));
//       })
//       .catch(error => {
//         console.error("Error deleting article", error);
//       });
//   };

//   return (
//     <div className="min-h-screen bg-yellow-3">
//       <div className="flex justify-end">
//         <button
//           onClick={() => setOpenModal(true)}
//           className="mt-4 mr-10 bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-md transition"
//         >
//           + Add Article
//         </button>
//       </div>

//       <div className="pt-10 px-4 container mx-auto">
//         <h2 className="text-3xl font-bold mb-6 text-center text-white">
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
//               {articles.map((article) => (
//                 <tr key={article.id} className="hover:bg-gray-50 transition">
//                   <td className="px-6 py-4 text-gray-800">{article.title}</td>
//                   <td className="px-6 py-4 text-gray-800">{article.duration}</td>
//                   <td className="px-6 py-4">
//                     <img
//                       src={article.imageUrl}
//                       alt={article.title}
//                       className="w-16 h-16 object-cover rounded-md shadow-sm"
//                     />
//                   </td>
//                   <td className="px-6 py-4 text-center space-x-2">
//                     <Link
//                       to={`/update/${article.id}`}
//                       className="bg-yellow-500 hover:bg-yellow-600 text-white px-4 py-2 rounded-md transition"
//                     >
//                       Edit
//                     </Link>
//                     <button
//                       onClick={() => deleteArticle(article.id)}
//                       className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-md transition"
//                     >
//                       Delete
//                     </button>
//                   </td>
//                 </tr>
//               ))}
//             </tbody>
//           </table>
//         </div>
//       </div>
//     </div>
//   );
// }
import { Link } from "react-router-dom";
import React, { useEffect, useState } from "react";
import axios from "axios";

export default function Table({ setOpenModal }) {
  const [articles, setArticles] = useState([]);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    // Fetch articles from API
    axios
      .get("http://localhost:8000/articless")
      .then((response) => {
        setArticles(response.data);
      })
      .catch((error) => {
        console.error("There was an error fetching articles!", error);
      });
  }, []);

  // Handle resize to toggle view
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const deleteArticle = (id) => {
    axios
      .delete(`http://localhost:8000/articless/${id}`)
      .then(() => {
        setArticles(articles.filter((article) => article.id !== id));
      })
      .catch((error) => {
        console.error("Error deleting article", error);
      });
  };

  return (
    <div className="min-h-screen px-4 sm:px-6 md:px-10 py-6">
      <div className="flex justify-end mb-6">
        <button
          onClick={() => setOpenModal(true)}
          className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-md transition"
        >
          + Add Article
        </button>
      </div>

      <h2 className="text-3xl font-bold mb-6 text-center md:text-left text-black">
        Articles Table
      </h2>

      {isMobile ? (
        // Card View for Mobile
        <div className="space-y-4">
          {articles.map((article) => (
            <div
              key={article.id}
              className="bg-white rounded-lg shadow-md p-4 flex flex-col space-y-3"
            >
              <img
                src={article.imageUrl}
                alt={article.title}
                className="w-full h-48 object-cover rounded-md"
              />
              <h3 className="text-lg font-semibold text-gray-800">{article.title}</h3>
              <p className="text-gray-600">Duration: {article.duration}</p>
              <div className="flex space-x-3">
                <Link
                  to={`/update/${article.id}`}
                  className="flex-1 bg-yellow-500 hover:bg-yellow-600 text-white px-4 py-2 rounded-md text-center transition"
                >
                  Edit
                </Link>
                <button
                  onClick={() => deleteArticle(article.id)}
                  className="flex-1 bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-md transition"
                >
                  Delete
                </button>
              </div>
            </div>
          ))}
        </div>
      ) : (
        // Table View for Desktop
        <div className="overflow-x-auto bg-white rounded-lg shadow-md">
          <table className="min-w-full divide-y divide-gray-200 table-auto">
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
              {articles.map((article) => (
                <tr key={article.id} className="hover:bg-gray-50 transition">
                  <td className="px-6 py-4 text-gray-800">{article.title}</td>
                  <td className="px-6 py-4 text-gray-800">{article.duration}</td>
                  <td className="px-6 py-4">
                    <img
                      src={article.imageUrl}
                      alt={article.title}
                      className="w-16 h-16 object-cover rounded-md shadow-sm"
                    />
                  </td>
                  <td className="px-6 py-4 text-center space-x-2 whitespace-nowrap">
                    <Link
                      to={`/update/${article.id}`}
                      className="bg-yellow-500 hover:bg-yellow-600 text-white px-4 py-2 rounded-md transition"
                    >
                      Edit
                    </Link>
                    <button
                      onClick={() => deleteArticle(article.id)}
                      className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-md transition"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}
