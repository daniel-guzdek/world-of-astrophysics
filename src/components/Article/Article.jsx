import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { data } from "../../data/articles";
import BackNav from "../BackNav/BackNav";
import Header from "../common/Header/Header";
import { scrollTop } from "../../utils/uiHelpers";
import ArticleNav from "./ArticleNav/ArticleNav";
import Footer from "../Footer/Footer";

const Article = () => {
  const { articleId } = useParams();
  const article = data[articleId];

  useEffect(() => scrollTop(), [articleId]);

  return (
    <>
      <div className="article-wrapper">
        <div className="article-container">
          <div className="article-main">
            <BackNav text="Back to Articles Section" path="/articles" />
            <span className="category">
              Category:<em>{article?.category}</em>
            </span>
            <Header headerData={article} />
            <article className="content">{article?.content}</article>
          </div>
          <ArticleNav />
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Article;
