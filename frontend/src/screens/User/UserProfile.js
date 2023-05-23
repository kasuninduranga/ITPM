import React, { useState } from "react";
import { Link } from "react-router-dom";

function UserProfile() {
  const [userData, setUserData] = useState({
    name: "kasun",
    email: "kasun@gmail.com",
    contactNo: 94757740886,
    address: "567,kandy rd,malabe",
    username: "kasunranga",
  });
  return (
    <>
      <section className="container py-5 h-100">
        <div className="row d-flex h-100">
          <div>
            <img
              src="https://cdn-icons-png.flaticon.com/512/149/149071.png?w=826&t=st=1683198458~exp=1683199058~hmac=c430349ec56b0918e8c14689b3cea601b7df3233a082703ca736e8758edfd22d"
              className="rounded-circle"
              height="85"
              alt="Black and White Portrait of a Man"
              loading="lazy"
            />
            <h2 className="mt-3" style={{ marginBottom: "0" }}>
              {userData.name}
            </h2>
            <p className="mb-4" style={{ fontSize: "1.2rem" }}>
              {userData.username}
            </p>
          </div>
          <div className="card-body text-center">
            <form>
              <h4 className="mb-4" style={{ textAlign: "left" }}>
                Profile Details
              </h4>
              <hr className="mb-4" style={{ opacity: "0.15" }} />

              <div className="form-group mb-4">
                <label
                  htmlFor="name"
                  className="mb-2 text-muted"
                  style={{ float: "left" }}
                >
                  Name:
                </label>
                <input
                  type="text"
                  id="name"
                  className="form-control"
                  name="name"
                  defaultValue={userData.name}
                  onChange={(e) => {
                    setUserData({ ...userData, name: e.target.value });
                  }}
                />
              </div>

              <div className="form-group mb-4">
                <label
                  htmlFor="username"
                  className="mb-2 text-muted"
                  style={{ float: "left" }}
                >
                  Username:
                </label>
                <input
                  type="text"
                  id="username"
                  className="form-control"
                  name="username"
                  defaultValue={userData.username}
                  onChange={(e) => {
                    setUserData({ ...userData, username: e.target.value });
                  }}
                />
              </div>

              <div className="form-group mb-4">
                <label
                  htmlFor="email"
                  className="mb-2 text-muted"
                  style={{ float: "left" }}
                >
                  Email:
                </label>
                <input
                  type="email"
                  id="email"
                  className="form-control"
                  name="email"
                  defaultValue={userData.email}
                  onChange={(e) => {
                    setUserData({ ...userData, email: e.target.value });
                  }}
                />
              </div>

              <div className="form-group mb-4">
                <label
                  htmlFor="contactNo"
                  className="mb-2 text-muted"
                  style={{ float: "left" }}
                >
                  Contact Number:
                </label>
                <input
                  type="number"
                  id="contactNo"
                  className="form-control"
                  name="contactNo"
                  defaultValue={userData.contactNo}
                  onChange={(e) => {
                    setUserData({ ...userData, contactNo: e.target.value });
                  }}
                />
              </div>

              <div className="form-group mb-4">
                <label
                  htmlFor="address"
                  className="mb-2 text-muted"
                  style={{ float: "left" }}
                >
                  Address:
                </label>
                <input
                  type="text"
                  id="address"
                  className="form-control"
                  name="address"
                  defaultValue={userData.address}
                  onChange={(e) => {
                    setUserData({ ...userData, address: e.target.value });
                  }}
                />
              </div>

              <hr className="mt-4 mb-3" style={{ opacity: "0.15" }} />

              <div className="d-flex justify-content-between">
                <Link
                  to={"/dashboard"}
                  className="btn btn-outline-danger"
                  style={{ width: "48%" }}
                  onClick={() => {}}
                >
                  Cancel
                </Link>

                <button className="btn btn-primary" style={{ width: "48%" }}>
                  Save
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>
    </>
  );
}

export default UserProfile;
