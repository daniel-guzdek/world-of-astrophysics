import { AiOutlineFacebook } from "react-icons/ai";
import { FiTwitter } from "react-icons/fi";
import { AiOutlineLinkedin } from "react-icons/ai";
import { GrInstagram } from "react-icons/gr";
import { FcGoogle } from "react-icons/fc";

const createLink = (text, path, className) => ({ text, path, className });

export const createSocialMediaLink = (
  platform,
  path,
  IconComponent,
  className
) => ({
  platform,
  path,
  IconComponent,
  className,
});

export const socialMediaLinks = [
  createSocialMediaLink("Facebook", "/", AiOutlineFacebook, "icon-facebook"),
  createSocialMediaLink("Twitter", "/", FiTwitter, "icon-twitter"),
  createSocialMediaLink("Linkedin", "/", AiOutlineLinkedin, "icon-linkedin"),
  createSocialMediaLink("Instagram", "/", GrInstagram, "icon-instagram"),
  createSocialMediaLink("Google", "/", FcGoogle, "icon-google"),
];

const commonLinks = [
  createLink("Articles", "/articles", "text-link"),
  createLink("Calculators", "/calculators", "text-link"),
  createLink("Gallery", "/gallery", "text-link"),
  createLink("Contact", "/contact", "text-link"),
];

export const navLinks = commonLinks.map((link) => ({
  ...link,
  className: `nav-link ${link.className}`,
}));

export const footerPageLinks = [
  createLink("Home", "/", "footer-page-link text-link"),
  ...commonLinks.map((link) => ({
    ...link,
    className: `footer-page-link ${link.className}`,
  })),
];
