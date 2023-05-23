import React from "react";
import { Link } from "react-router-dom";

function Hero() {
  return (
    <>
      <div className="container" style={{ padding: "0", margin: "0" }}>
        <section
          className="ext-center white-text grey z-depth-1"
          style={{
            backgroundImage:
              "url(https://img.freepik.com/free-photo/abstract-pool-water-surface-background-with-sun-light-reflection_74190-8510.jpg)",
            padding: "100px 0",
            marginBottom: "50px",
          }}
        >
          <div className="row d-flex justify-content-center">
            <div className="col-xl-8 col-md-10">
              <i className="fas fa-gem fa-2x mb-4"></i>

              <h1 className="font-weight-bold">Aqua Clean!</h1>

              <p>
                WE BELIVE IN EVERY CHILD'S RIGHT TO CLEAN WATER"
              </p>

              <Link
                to="projects"
                className="btn btn-outline-white btn-md waves-effect"
              >
                <i className="fas fa-clone left"></i> View projects
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

export default Hero;
