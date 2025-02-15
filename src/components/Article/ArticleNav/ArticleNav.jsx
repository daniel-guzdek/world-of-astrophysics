import React, { useState, useEffect } from "react";

const ArticleNav = () => {
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        rootMargin: "-100px 0px -66%",
        threshold: 0,
      }
    );

    const headings = document.querySelectorAll(".content h2, .content h3");
    headings.forEach((heading) => {
      if (!heading.id) {
        heading.id = heading.textContent.toLowerCase().replace(/\s+/g, "-");
      }
      observer.observe(heading);
    });

    return () => {
      headings.forEach((heading) => observer.unobserve(heading));
    };
  }, []);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      const yOffset = -100;
      const y = element.getBoundingClientRect().top + window.scrollY + yOffset;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  };

  const [headings, setHeadings] = useState([]);

  useEffect(() => {
    const elements = document.querySelectorAll(".content h2, .content h3");
    const headingsData = Array.from(elements)?.map((heading) => ({
      id: heading.id || heading.textContent.toLowerCase().replace(/\s+/g, "-"),
      text: heading.textContent,
      level: heading.tagName.toLowerCase(),
    }));
    setHeadings(headingsData);
  }, []);

  if (headings.length === 0) return null;

  return (
    <nav className="article-nav">
      <div className="article-nav-title">In this article</div>
      <ul className="article-nav-list">
        {headings.map((heading) => (
          <li
            key={heading.id}
            className={`
              article-nav-item 
              ${heading.level === "h3" ? "article-nav-subitem" : ""} 
              ${activeSection === heading.id ? "active" : ""}
            `}
          >
            <button onClick={() => scrollToSection(heading.id)}>
              {heading.text}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default ArticleNav;
