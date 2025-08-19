
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom"; // Import useNavigate
import axios from "axios";
import Navvbar from "../../components/navvbar";

export default function UpdateArticle() {
  const { id } = useParams(); // Get the article id from the URL params
  const [article, setArticle] = useState({
    title: "",
    duration: "",
    image: null,
    content: "",
  });

  const navigate = useNavigate(); //useNavigate

  useEffect(() => {
    // Fetch 
    axios
      .get(`http://localhost:8000/articless/${id}`)
      .then((response) => {
        setArticle(response.data);
      })
      .catch((error) => {
        console.error("Error fetching article:", error);
      });
  }, [id]);

  const handleOnChange = (e) => {
    const { name, value, files } = e.target;
    setArticle((prev) => ({
      ...prev,
      [name]: files ? files[0] : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Send the updated article data to my API
    axios
      .put(`http://localhost:8000/articless/${id}`, article)
      .then(() => {
        navigate("/"); // Redirect to home page or dashboard after update
      })
      .catch((error) => {
        console.error("Error updating article:", error);
      });
  };

  return (
    <div className="min-h-screen bg-gray-100 flex justify-center items-center"> 
    
      <div className="bg-white p-10 rounded-xl shadow-lg w-full max-w-2xl space-y-6 relative">
        <h2 className="text-2xl font-bold text-gray-800">Update Article</h2>

        <form onSubmit={handleSubmit} className="space-y-5 items-center">
          <div>
            <label className="block text-sm font-medium text-gray-700">Title</label>
            <input
              type="text"
              name="title"
              value={article.title}
              onChange={handleOnChange}
              className="block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 p-2"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Duration</label>
            <input
              type="text"
              name="duration"
              value={article.duration}
              onChange={handleOnChange}
              className="block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 p-2"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Image</label>
            <input
              type="file"
              name="image"
              onChange={handleOnChange}
              className="block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 p-2"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Content</label>
            <textarea
              name="content"
              value={article.content}
              onChange={handleOnChange}
              rows="5"
              className="block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 p-2"
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full bg-gradient-to-r from-indigo-600 to-indigo-500 text-white py-3 rounded-xl font-semibold shadow-md hover:opacity-90 transition-all"
          >
             Update Article
          </button>
        </form>
      </div>
    </div>
  );
}
