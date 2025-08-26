

// export default Home;
import React, { useContext, useEffect, useState } from "react";
import Navvbar from "../../components/navvbar";
import Article from "../../components/articles/article";
import axios from "axios";
import Footer from "../../components/footer/footer";
import { Link } from "react-router-dom";
import { ThemeContext } from "../../togglecontext/themeContext";

const Home = () => {
  const [articless, setArticless] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const { darkMode } = useContext(ThemeContext);

  useEffect(() => {
    axios
      .get("http://localhost:8000/articless")
      .then((result) => {
        setArticless(result.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error(error);
        setError("Failed to load articles. Please try again later.");
        setLoading(false);
      });
  }, []);

  return (
    <div
      className={`min-h-screen flex flex-col ${
        darkMode ? "bg-gray-900 text-white" : "bg-gray-50 text-black "
      }`}
    >
      {/* Navbar */}
      
        <Navvbar title="Maryam Blog" />
      
      

      {/* Hero Section */}
      <section
        className={`w-full py-12 md:py-20 text-center ${
          darkMode ? "bg-gray-800" : "bg-indigo-50"
        }`}
      >
        <div className="container mx-auto px-6 md:px-12">
          <h1
            className={`text-3xl md:text-5xl font-bold mb-4 ${
              darkMode ? "text-white" : "text-gray-900"
            }`}
          >
            Welcome to Maryam Blog
          </h1>
          <p
            className={`max-w-2xl mx-auto text-lg md:text-xl ${
              darkMode ? "text-gray-300" : "text-gray-600"
            }`}
          >
            Discover the latest articles, insights, and stories curated for you.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <main className="flex-1 container mx-auto px-4 md:px-10 py-12">
        <h2
          className={`pt-2 text-2xl md:text-4xl font-bold mb-8 text-center md:text-left ${
            darkMode ? "text-white" : "text-gray-700"
          }`}
        >
          New Articles
        </h2>

        {/* Loading State */}
        {loading && (
          <p className="text-center text-lg animate-pulse">Loading articles...</p>
        )}

        {/* Error State */}
        {error && (
          <p className="text-center text-red-500 font-medium">{error}</p>
        )}

        {/* Articles Grid */}
        {!loading && !error && (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 min">
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
        )}
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Home;
