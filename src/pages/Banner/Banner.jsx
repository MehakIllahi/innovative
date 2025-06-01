import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

function Banner() {
  return (
    <div
      className="text-white 
    "
    >
      <div className="col-md-12 text-center  mt-md-0">
        <img
          src="/innovativebanner.png"
          alt="Banner"
          className="img-fluid rounded"
        />
      </div>
    </div>
  );
}

export default Banner;
