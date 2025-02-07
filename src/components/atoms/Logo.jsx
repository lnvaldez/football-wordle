import React from "react";

const Logo = ({ src, alt, onClick, className }) => {
  return typeof src === "string" ? (
    <img
      src={src}
      alt={alt}
      onClick={onClick}
      className={className}
      style={{
        width: "100px",
        height: "100px",
        cursor: "pointer",
      }}
    />
  ) : (
    // Render SVG as a React component
    React.createElement(src, { alt, onClick, style })
  );
};

export default Logo;
