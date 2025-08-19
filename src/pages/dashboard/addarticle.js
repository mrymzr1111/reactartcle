
import React, { useState } from "react";
import Input from "../../components/input/input";
import axios from "axios";

export default function AddArticle({ setOpenModal }) {
  const [article, setArticle] = useState({
    title: "",
    duration: "",
    image: null,
    content: "", 
  });
  const [successMessage, setSuccessMessage] = useState("");

  const handleOnchange = (e) => {
    const { name, value, files } = e.target;
    setArticle((prev) => ({
      ...prev,
      [name]: files ? files[0] : value,
    }));
  };

  const handleCloseModal = () => {
    setOpenModal(false); // Close the modal
  };

  const handleNewArticle = () => {
    const formData = new FormData();
    formData.append("title", article.title);
    formData.append("duration", article.duration);
    formData.append("image", article.image);
    formData.append("content", article.content);

    axios.post("http://localhost:8000/articless", formData)
      .then(() => {
        setSuccessMessage("Article added successfully!");
        setTimeout(() => setOpenModal(false), 2000); // Close after 2 seconds
      })
      .catch((error) => {
        console.error("Error adding article:", error);
      });
  };

  return (
    <div className="bg-white p-10 rounded-xl shadow-lg w-full max-w-2xl space-y-6 relative">
      <button onClick={handleCloseModal} className="absolute top-4 right-4 text-3xl text-gray-600">×</button>
      
      <form onSubmit={(e) => e.preventDefault()} className="space-y-5">
        <Input label="Article Title" name="title" placeholder="Enter article title" handleOnchange={handleOnchange} />
        <Input label="Duration" name="duration" placeholder="e.g., Duration: 20 minutes" handleOnchange={handleOnchange} />
        <Input label="Upload Image" name="image" type="file" handleOnchange={handleOnchange} />

        {/* Textarea */}
        <div className="space-y-2">
          <label className="block text-sm font-medium text-gray-700">Article Content</label>
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
          onClick={handleNewArticle}
          type="submit"
          className="w-full bg-gradient-to-r from-indigo-600 to-indigo-500 text-white py-3 rounded-xl font-semibold shadow-md hover:opacity-90 transition-all"
        >
          🚀 Add Article
        </button>
      </form>

      {successMessage && <p className="text-green-500 mt-4">{successMessage}</p>}
    </div>
  );
}
