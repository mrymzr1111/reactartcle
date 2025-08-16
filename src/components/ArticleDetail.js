// pages/articleDetail.js
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom'; // برای دسترسی به پارامترهای URL
import axios from 'axios';

const ArticleDetail = () => {
  const { id } = useParams(); // دریافت شناسه مقاله از URL
  const [article, setArticle] = useState(null);

  useEffect(() => {
    // فراخوانی API برای دریافت جزئیات مقاله
    axios
      .get(`http://localhost:8000/articles/${id}`)
      .then((response) => {
        setArticle(response.data); // قرار دادن اطلاعات مقاله در state
      })
      .catch((error) => {
        console.error("Error fetching article:", error);
      });
  }, [id]);

  // نمایش محتوا در صورتی که داده‌ها بارگذاری شده باشند
  if (!article) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>{article.title}</h1>
      <p>{article.content}</p>
      {/* شما می‌توانید هر محتوای دیگری مثل تاریخ انتشار، نویسنده، و... را هم در اینجا نمایش دهید */}
    </div>
  );
};

export default ArticleDetail;
