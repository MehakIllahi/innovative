import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

function Client() {
  return (
    <div className="container py-5 text-center">
      <h2 className="mb-5 fw-bold">What Our Clients Say</h2>
      <div className="row justify-content-center">
        {/* Client 1 */}
        <div className="col-12 col-md-4 mb-4">
          <div className="card shadow-sm border-0 p-4 h-100">
            <div className="card-body">
              <p className="fst-italic">
                “Excellent service and amazing attention to detail. Highly
                recommend!”
              </p>
            </div>
          </div>
        </div>

        {/* Client 2 */}
        <div className="col-12 col-md-4 mb-4">
          <div className="card shadow-sm border-0 p-4 h-100">
            <div className="card-body">
              <p className="fst-italic">
                “Very responsive and easy to work with. Great results every
                time.”
              </p>
            </div>
          </div>
        </div>

        {/* Client 3 */}
        <div className="col-12 col-md-4 mb-4">
          <div className="card shadow-sm border-0 p-4 h-100">
            <div className="card-body">
              <p className="fst-italic">
                “Professional, creative, and reliable. We’re always impressed.”
              </p>
            </div>
          </div>
        </div>

        {/* Client 4 */}
        <div className="col-12 col-md-4 mb-4">
          <div className="card shadow-sm border-0 p-4 h-100">
            <div className="card-body">
              <p className="fst-italic">
                “They went above and beyond for our project. Truly outstanding.”
              </p>
            </div>
          </div>
        </div>

        {/* Client 5 */}
        <div className="col-12 col-md-4 mb-4">
          <div className="card shadow-sm border-0 p-4 h-100">
            <div className="card-body">
              <p className="fst-italic">
                “One of the best experiences we've had with any company.”
              </p>
            </div>
          </div>
        </div>

        {/* Client 6 */}
        <div className="col-12 col-md-4 mb-4">
          <div className="card shadow-sm border-0 p-4 h-100">
            <div className="card-body">
              <p className="fst-italic">
                “Trustworthy, innovative, and results-driven. A pleasure to work
                with.”
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Client;
