import React from "react";
import './image.css'

function icon({ src, alt, className }) {
  return <img src={src} alt={alt} className={className} />;
}

export default icon;
