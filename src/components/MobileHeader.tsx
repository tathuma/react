import React from "react";
import { useState } from "react";
import "../styles/Header/MobileHeader.css";

function MobileHeader() {
  const [click, setClick] = useState<boolean>(false);
  const classToggle = () => {
    setClick(!click);
  };
  return (
    <div id="global-container">
      <div id="container">
        <header>
          <button
            className={click ? "open-menu" : "mobile-menu"}
            onClick={classToggle}
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </header>
      </div>
      <nav className="mobile-">
        <ul className="mobile-menu__main">
          <li className="mobile-menu__item">
            <a href="#">
              <span className="main-title">aaaa</span>
              <span className="sub-title">bbbb</span>
            </a>
          </li>
          <li className="mobile-menu__item">
            <a href="#">
              <span className="main-title">cccc</span>
              <span className="sub-title">dddd</span>
            </a>
          </li>
          <li className="mobile-menu__item">
            <a href="#">
              <span className="main-title">ああああ</span>
              <span className="sub-title">いいいい</span>
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default MobileHeader;
