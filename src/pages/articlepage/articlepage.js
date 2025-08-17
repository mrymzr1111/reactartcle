
// import { useParams } from "react-router-dom";
// import Footer from "../../components/footer/footer";
// import Navvbar from "../../components/navvbar";
// import styled from "./articlepage.module.css";
// import { useEffect, useState } from "react";
// import axios from "axios";

// export default function Articlepage() {
//   const { id } = useParams();
//   const [article, setArticle] = useState(null);

//   useEffect(() => {
//     axios
//       .get(`http://localhost:8000/articless/${id}`)
//       .then((response) => {
//         setArticle(response.data); // response.dat  the single article
//         console.log("Data fetched", response.data);
//       })
//       .catch((err) => console.log("Error fetching article:", err));
//   }, [id]);

//   if (!article) return <p>Loading article...</p>;

//   return (
//     <div>
//       <Navvbar />
//       <h1 className={styled.mo}>Article</h1>
//       <div key={article.id} className={styled.mo}>
        
//         <div className={styled.mo}>
//           <h3 className={styled.mo}>{article.title}</h3>
//           <p className={styled.mo}>{article.duration}</p>
//           <img src={article.imageUrl} alt={article.title} className={styled.mo} />
//         </div>
//       </div>
//       <Footer />
//     </div>
//   );
// }
import { useParams } from "react-router-dom";
import Footer from "../../components/footer/footer";
import Navvbar from "../../components/navvbar";
import { useEffect, useState } from "react";
import axios from "axios";

export default function Articlepage() {
  const { id } = useParams();
  const [article, setArticle] = useState(null);

  useEffect(() => {
    axios
      .get(`http://localhost:8000/articless/${id}`)
      .then((response) => {
        setArticle(response.data);
      })
      .catch((err) => console.log("Error fetching article:", err));
  }, [id]);

  if (!article) {
    return (
      <p className="text-center mt-20 text-gray-400 text-lg animate-pulse">
        Loading article...
      </p>
    );
  }

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Navvbar />

      <main className="flex-1 container mx-auto px-4 md:px-10 py-12">
        <h1 className=" pt-1 text-4xl font-extrabold mb-10 text-gray-700 text-center md:text-left">
          {article.title}
        </h1>

        <div className="bg-white rounded-xl shadow-lg overflow-hidden transition-transform transform hover:scale-105 hover:shadow-2xl duration-300">
          <img
            src={article.imageUrl}
            alt={article.title}
            className="w-full h-96 object-cover"
          />

          <div className="p-8">
            <p className="text-gray-500 mb-4 text-sm md:text-base">
              Duration: {article.duration}
            </p>
            <p className="text-gray-700 leading-relaxed text-lg md:text-xl">
              {article.content || "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin vel ligula nec justo cursus dapibus."}
            </p>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
