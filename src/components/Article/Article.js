import React from "react";
import { Link } from "react-router-dom";
import "./Article.css";

const Article = ({ id, title, description }) => {
  return (
    <div className="article">
      <h2>{title}</h2>
      <p>{description}</p>
      <Link to={`/articles/${id}`}>Read more</Link>
    </div>
  );
};

export default Article;