import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

import styles from "./styles/add.project.module.css";

const AddProject = () => {
  const [formData, setFormData] = useState({});
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(formData);

    axios
      .post("http://localhost:8000/projects/new", formData)
      .then((res) => {
        console.log(res);
        alert("Project Added Successfully");
        navigate("/dashboard/projects");
      })
      .catch((err) => {
        console.log(err);
        alert("Something went wrong check the console for more details");
      });
  };

  return (
    <section className="container py-5 h-100">
      <div className="row d-flex h-100">
        <div className="card-body text-center">
          <form onSubmit={handleSubmit}>
            <h2 className="mb-4">New Project</h2>
            <hr className="mb-4" style={{ opacity: "0.15" }} />

            <div className="form-group mb-4">
              <label
                htmlFor="projectName"
                className="mb-2 text-muted"
                style={{ float: "left" }}
              >
                Project Name:
              </label>
              <input
                type="text"
                id="projectName"
                className="form-control"
                name="projectName"
                required
                defaultValue={formData.projectName}
                onChange={handleChange}
              />
            </div>

            <div className="form-group mb-4">
              <label
                htmlFor="organizationName"
                className="mb-2 text-muted"
                style={{ float: "left" }}
              >
                Organization Name:
              </label>
              <input
                type="text"
                id="organizationName"
                className="form-control"
                name="organizationName"
                required
                defaultValue={formData.organizationName}
                onChange={handleChange}
              />
            </div>

            <div className="form-group mb-4">
              <label
                htmlFor="location"
                className="mb-2 text-muted"
                style={{ float: "left" }}
              >
                Location:
              </label>
              <input
                type="text"
                id="location"
                className="form-control"
                name="location"
                required
                defaultValue={formData.location}
                onChange={handleChange}
              />
            </div>

            <div className="form-group mb-4 d-flex">
              <div className="d-flex" style={{ flexDirection: "column" }}>
                <label
                  htmlFor="date"
                  className="mb-2 text-muted"
                  style={{
                    alignSelf: "start",
                  }}
                >
                  Date:
                </label>
                <input
                  type="date"
                  id="date"
                  className="form-control"
                  style={{ width: "400px" }}
                  name="date"
                  required
                  defaultValue={formData.date}
                  onChange={handleChange}
                />
              </div>

              <div
                className="d-flex"
                style={{ flexDirection: "column", marginLeft: "2rem" }}
              >
                <label
                  htmlFor="time"
                  className="mb-2 text-muted"
                  style={{
                    alignSelf: "start",
                  }}
                >
                  Time:
                </label>
                <input
                  type="time"
                  id="time"
                  className="form-control"
                  style={{ width: "400px" }}
                  name="time"
                  required
                  defaultValue={formData.time}
                  onChange={handleChange}
                />
              </div>
            </div>

            <div className="form-group mb-4">
              <label
                htmlFor="projectCost"
                className="mb-2 text-muted"
                style={{ float: "left" }}
              >
                Project Cost:
              </label>
              <input
                type="number"
                id="projectCost"
                className="form-control"
                name="projectCost"
                required
                defaultValue={formData.projectCost}
                onChange={handleChange}
              />
            </div>

            <div className="form-group mb-4">
              <label
                htmlFor="memberCount"
                className="mb-2 text-muted"
                style={{ float: "left" }}
              >
                Member Count:
              </label>
              <input
                type="number"
                id="memberCount"
                className="form-control"
                name="memberCount"
                required
                defaultValue={formData.memberCount}
                onChange={handleChange}
              />
            </div>

            <div className="form-group mb-4">
              <label
                htmlFor="description"
                className="mb-2 text-muted"
                style={{ float: "left" }}
              >
                Description:
              </label>
              <textarea
                id="description"
                className="form-control"
                name="description"
                rows="4"
                required
                value={formData.description}
                onChange={handleChange}
              ></textarea>
            </div>

            <hr className="mt-4 mb-3" style={{ opacity: "0.15" }} />

            <div className={styles.btn_box}>
              <button
                className={styles.btn1}
                style={{ backgroundColor: "#333" }}
                onClick={() => {}}
              >
                Clear
              </button>

              <button className={styles.btn} type="submit">
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};
export default AddProject;
