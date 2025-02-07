import React, { useState } from "react";
import ArticleList from "../Article/ArticleList";
import "./Home.css";
const Home = () => {
  const [articles] = useState([
    { title: "Article 1", description: "Description of Article 1" },
    { title: "Article 2", description: "Description of Article 2" },
    { title: "Article 3", description: "Description of Article 3" },
  ]);

  return (
    <div id="home" className="section">
      <ArticleList articles={articles} />
    </div>
  );
};

export default Home;