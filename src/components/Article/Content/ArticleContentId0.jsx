import React from "react";
import { generateText } from "../../../utils/common";

const ArticleContentId0 = () => {
  const text1 = generateText(1);
  const text2 = generateText(2);
  const text3 = generateText(1);

  return (
    <div>
      <div className="article-section">
        <h2>Introduction</h2>
        <p>{text1}</p>
      </div>

      <div className="article-section">
        <h2>Section 1</h2>
        <p>{text2}</p>
      </div>

      <div className="article-subsection">
        <h3>Subsection 1</h3>
        <p>{text3}</p>
      </div>

      <div className="article-subsection">
        <h3>Subsection 2</h3>
        <p>{text3}</p>
      </div>

      <div className="article-section">
        <h2>Section 2</h2>
        <p>{text2}</p>
      </div>

      <div className="article-subsection">
        <h3>Subsection 3</h3>
        <p>{text3}</p>
      </div>

      <div className="article-subsection">
        <h3>Subsection 4</h3>
        <p>{text3}</p>
      </div>

      <div className="article-section">
        <h2>Section 3</h2>
        <p>{text2}</p>
      </div>

      <div className="article-section">
        <h2>Conclusion</h2>
        <p>{text1}</p>
      </div>
    </div>
  );
};

export default ArticleContentId0;
