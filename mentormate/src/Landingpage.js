// Landingpage.js
import React from "react";
import "./Landingpage.css"; // Import the CSS file

const Landingpage = () => {
  return (
    <div className="landingpage-container">
      <iframe
        loading="lazy"
        className="landingpage-iframe"
        title="Minimal Jewelry Website Landing Page"
        src="https://www.canva.com/design/DAGUegxHDmo/rXqY4zO-6DAvK1_C-nZKZg/view?embed"
        allowFullScreen
      ></iframe>
      <a
        href="https://www.canva.com/design/DAGUegxHDmo/rXqY4zO-6DAvK1_C-nZKZg/view?utm_content=DAGUegxHDmo&utm_campaign=designshare&utm_medium=embeds&utm_source=link"
        target="_blank"
        rel="noopener noreferrer"
        className="landingpage-link"
      >
        Minimal Jewelry Website Landing Page Desktop Prototype by Soham santra
      </a>
    </div>
  );
};

export default Landingpage;
