import React, { useState, useEffect } from "react";
import { data } from "../../data/articleMenu";
import SubMenuItem from "./SubMenuItem";
import { FaBars } from "react-icons/fa";
import { AiOutlineClose } from "react-icons/ai";
import { useWindowSize } from "../../hooks/useWindowSize";

const SubMenu = () => {
  const { width } = useWindowSize();
  const [showSidebar, setShowSidebar] = useState(false);
  const isDesktop = width > 1024;

  useEffect(() => {
    setShowSidebar(isDesktop);
  }, [isDesktop]);

  const handleShowSidebar = () => {
    setShowSidebar(!showSidebar);
  };

  useEffect(() => {
    const articlesMenu = document.querySelector(".articles-menu");
    const burger = document.querySelector(".burger");
    const burgerTitle = document.querySelector(".burger-title");
    const burgerIcon = document.querySelector(".burger-icon");

    if (showSidebar) {
      articlesMenu?.classList.add("open");
      burger?.classList.add("open");
      burgerTitle?.classList.add("open");
      burgerIcon?.classList.add("open");
    } else {
      articlesMenu?.classList.remove("open");
      burger?.classList.remove("open");
      burgerTitle?.classList.remove("open");
      burgerIcon?.classList.remove("open");
    }
  }, [showSidebar]);

  return (
    <div className="articles-menu">
      {!isDesktop && (
        <div className="burger" onClick={handleShowSidebar}>
          <div className="burger-title">
            {!showSidebar ? "Show articles menu" : "Close articles menu"}
          </div>
          <div className="burger-icon">
            {showSidebar ? <AiOutlineClose /> : <FaBars />}
          </div>
        </div>
      )}
      {(showSidebar || isDesktop) &&
        data?.map((item, index) => <SubMenuItem item={item} key={index} />)}
    </div>
  );
};

export default SubMenu;
