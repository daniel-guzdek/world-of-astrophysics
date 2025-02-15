import React from "react";

const Header = ({ headerData }) => {
  return (
    <div className="header">
      <h1 className="title">{headerData?.title}</h1>
      <h2 className="subtitle">{headerData?.subtitle}</h2>
      <span className="info">
        <em>{headerData?.info}</em>
      </span>
    </div>
  );
};

export default Header;
