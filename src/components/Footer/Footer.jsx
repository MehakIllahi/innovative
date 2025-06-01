import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

function Footer() {
  return (
    <footer style={{ backgroundColor: "#6E8DAE" }} className="text-white py-4">
      <div className="container text-center">
        <p className="mb-2">
          © {new Date().getFullYear()} @intune.aise. All rights reserved.
        </p>
        <p className="mb-0">
          <a
            href="#privacy"
            className="text-white text-decoration-underline me-3"
          >
            Privacy Policy
          </a>
          <a href="#terms" className="text-white text-decoration-underline">
            Terms of Service
          </a>
        </p>
      </div>
    </footer>
  );
}

export default Footer;
