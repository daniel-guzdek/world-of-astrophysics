import React from "react";
import FooterPageLink from "./FooterPageLink";
import { socialMediaLinks } from "../../utils/linkHelpers";
import { footerPageLinks } from "../../utils/linkHelpers";
import { scrollTop } from "../../utils/uiHelpers";
import FooterSocialMediaLink from "./FooterSocialMediaLink";
import "../../css/style.css";

const Footer = () => {
  const renderFooterPageLinks = footerPageLinks?.map(
    ({ path, text, className }, index) => (
      <FooterPageLink
        key={index}
        path={path}
        className={className}
        text={text}
        handler={scrollTop}
      />
    )
  );

  const renderSocialMediaLinks = socialMediaLinks?.map(
    ({ platform, path, IconComponent, className }, index) => (
      <FooterSocialMediaLink
        key={index}
        platform={platform}
        path={path}
        IconComponent={IconComponent}
        className={className}
      />
    )
  );

  return (
    <footer className="footer">
      <div className="footer-wrapper">
        <div className="footer-page-items">
          <ul className="footer-page-links">{renderFooterPageLinks}</ul>
        </div>
        <div className="footer-social-items">
          <ul className="footer-social-links">{renderSocialMediaLinks}</ul>
        </div>
      </div>
      <div className="footer-copyright">
        <h1 className="footer-copyright-text">
          World of Astrophysics, Copyright {new Date().getFullYear()}
        </h1>
      </div>
    </footer>
  );
};

export default Footer;
