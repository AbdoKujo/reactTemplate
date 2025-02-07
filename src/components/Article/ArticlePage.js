import React from "react";
import { useParams } from "react-router-dom";

const ArticlePage = ({ articles }) => {
  const { id } = useParams();
  const article = articles[parseInt(id)];

  if (!article) {
    return <div>Article not found</div>;
  }

  return (
    <div className="article-page">
      <h1>{article.title}</h1>
      <p>{article.description}</p>
    </div>
  );
};

export default ArticlePage;