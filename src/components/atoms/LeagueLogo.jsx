import React from "react";

const LeagueLogo = ({ src, alt, onClick }) => {
  return <img src={src} alt={alt} onClick={onClick} />;
};

export default LeagueLogo;
