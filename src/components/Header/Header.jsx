import React from "react";
import "./Header.css";

const Header = () => {
  return (
    <header>
      {/* Top Contact Bar */}
      <div className="top-bar">
        <div className="container">
          <div className="contact-info">
            <span>
              📞{" "}
              <a
                href="tel:+919103266414"
                style={{ color: "inherit", textDecoration: "none" }}
              >
                (+91) 9103266414
              </a>
            </span>
            <span>
              ✉️{" "}
              <a
                href="mailto:hr@innovativetechnologiesinfo.in"
                style={{ color: "inherit", textDecoration: "none" }}
              >
                hr@innovativetechnologiesinfo.in
              </a>
            </span>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
