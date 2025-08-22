
import React, { useContext, useEffect, useState } from "react";
import Navvbar from "../../components/navvbar";
import Article from "../../components/articles/article";
import axios from "axios";
import Footer from "../../components/footer/footer";
import { Link } from "react-router-dom";
import { ThemeContext } from "../../togglecontext/themeContext";

const Home = () => {
  const [articless, setArticless] = useState([]);
  const { darkMode } = useContext(ThemeContext);

  useEffect(() => {
    axios
      .get("http://localhost:8000/articless")
      .then((result) => setArticless(result.data))
      .catch((error) => console.log(error));
  }, []);

  return (
    <div
      className={`min-h-screen flex flex-col ${
        darkMode ? "bg-gray-900 text-white" : "bg-gray-50 text-black"
      }`}
    >
      <Navvbar title="Maryam Blog" />

      <main className="flex-1 container mx-auto px-4 md:px-10 py-12">
        <h2
          className={`pt-2 text-2xl md:text-4xl font-bold mb-8 text-center md:text-left ${
            darkMode ? "text-white" : "text-gray-700"
          }`}
        >
          New Articles
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {articless.map((article) => (
            <Link
              key={article.id}
              to={`/article/${article.id}`}
              className="block transform hover:scale-105 hover:shadow-2xl transition duration-300"
            >
              <Article articless={article} />
            </Link>
          ))}
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Home;
