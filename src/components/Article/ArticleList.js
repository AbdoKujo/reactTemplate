import React from "react";
import Article from "./Article";

const ArticleList = ({ articles }) => {
  return (
    <div className="article-list">
      {articles.map((article, index) => (
        <Article
          key={index}
          id={index}
          title={article.title}
          description={article.description}
        />
      ))}
    </div>
  );
};

export default ArticleList;