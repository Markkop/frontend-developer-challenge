import React, { useState } from "react";

const NavButton = ({ text = "", url = "" }) => {
  const [buttonText, setButtonText] = useState(text);

  const handleUnavailable = () => {
    setButtonText("Em breve...");
    setTimeout(() => setButtonText(text), 2000);
  };

  return (
    <a
      href={url}
      target={/^#/.test(url) ? "" : "_blank"}
      rel="noopener noreferrer"
      onClick={() => url === "#" && handleUnavailable()}
    >
      <button className="navButton">{buttonText}</button>
    </a>
  );
};

export default NavButton;
