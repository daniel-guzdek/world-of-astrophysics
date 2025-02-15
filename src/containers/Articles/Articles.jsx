import React from "react";
import { data } from "../../data/articles.js";
import { getRandomItems } from "../../utils/common";
import CONFIG from "../../config/config.js";
import { articleHeaderData } from "../../data/headers.js";
import Header from "../../components/common/Header/Header.jsx";
import SubMenu from "../../components/SubMenu/SubMenu.jsx";
import ArticleCard from "../../components/Article/ArticleCard";

const Articles = () => {
  return (
    <>
      <div className="articles-wrapper">
        <SubMenu />
        <div className="container">
          <Header headerData={articleHeaderData} />
          <div className="articles-container">
            {getRandomItems(data, CONFIG.ARTICLES_COUNT)?.map((article) => (
              <ArticleCard
                key={article?.id}
                title={article?.title}
                text={article?.subtitle}
                category={article?.category}
                icon={article?.icon}
                src={article?.images[0]}
                path={`/articles/${article?.id}`}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Articles;
