import React, { useState } from "react";
import { handleUnavailable } from "../../utils/handleUnavailable";

const NavButton = ({ text = "", url = "" }) => {
  const [buttonText, setButtonText] = useState(text);

  return (
    <a
      href={url}
      target={/^#/.test(url) ? "" : "_blank"}
      rel="noopener noreferrer"
      onClick={() => url === "#" && handleUnavailable(setButtonText, text)}
    >
      <button className="navButton">{buttonText}</button>
    </a>
  );
};

export default NavButton;
