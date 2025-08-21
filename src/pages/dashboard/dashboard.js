
import React, { useState, useEffect } from "react";
import axios from "axios";
import Table from "../dashboard/Table";
import AddArticle from "../dashboard/addarticle";
import Navvbar from "../../components/navvbar";

export default function Dashboard() {
  const [openModal, setOpenModal] = useState(false);  // setOpenModal 
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:8000/articless")
      .then(response => {
        setArticles(response.data);
      })
      .catch(error => {
        console.error("There was an error fetching articles!", error);
      });
  }, []);

  const deleteArticle = (id) => {
    axios.delete(`http://localhost:8000/articless/${id}`)
      .then(() => {
        setArticles(articles.filter(article => article.id !== id));
      })
      .catch(error => {
        console.error("Error deleting article", error);
      });
  };

  return (
    <div className="bg-gray">
      <Navvbar />
      <div className="pt-6 bg-gray-900  ">
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
