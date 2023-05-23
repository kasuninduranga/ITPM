import React from "react";

import Hero from "../../components/Hero";
import AboutUs from "../../components/AboutUs";

function DashboardScreen() {
  return (
    <>
      <Hero />
      <AboutUs />
      <div className="d-flex justify-content-between mb-5">
        <div className="container">
          <h1 className="title font-weight-light text-black mt-2">
            Contact Us
          </h1>
          <form className="mt-3">
            <div className="row">
              <div className="col-lg-12">
                <div className="form-group mt-2">
                  <input
                    className="form-control text-black"
                    type="text"
                    placeholder="name"
                  />
                </div>
              </div>
              <div className="col-lg-12">
                <div className="form-group mt-2">
                  <input
                    className="form-control text-black"
                    type="email"
                    placeholder="email address"
                  />
                </div>
              </div>
              <div className="col-lg-12">
                <div className="form-group mt-2">
                  <textarea
                    className="form-control text-black"
                    rows="3"
                    placeholder="message"
                  ></textarea>
                </div>
              </div>
              <div className="col-lg-12 d-flex align-items-center mt-2">
                <button
                  type="submit"
                  className="btn bg-info text-inverse text-white px-3 py-2"
                >
                  <span> Submit</span>
                </button>
              </div>
            </div>
          </form>
        </div>
        
      </div>
    </>
  );
}

export default DashboardScreen;
