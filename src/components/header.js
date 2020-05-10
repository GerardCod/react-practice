import React from "react";

const Header = ({ url, ...props }) => (
  <header className="header flex-container">
    <nav>
      <a className="link" href={url} target="blank">
        My site
      </a>
    </nav>
  </header>
);

export default Header;
