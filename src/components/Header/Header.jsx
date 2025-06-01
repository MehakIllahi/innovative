import React from "react";
import "./Header.css";

const Header = () => {
  return (
    <header>
      {/* Top Contact Bar */}
      <div className="top-bar">
        <div className="container">
          <div className="contact-info">
            <span>📞 (804) 467-8266</span>
            <span>✉️ catering@finerpalate.com</span>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
