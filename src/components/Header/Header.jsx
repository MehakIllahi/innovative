import React from "react";
import "./Header.css";

const Header = () => {
  return (
    <header>
      {/* Top Contact Bar */}
      <div className="top-bar">
        <div className="container">
          <div className="contact-info">
            <span>📞 (+91) 7006978586 </span>
            <span>✉️ hr@innovativetechnologiesinfo.in</span>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
