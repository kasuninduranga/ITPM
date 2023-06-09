import React from "react";
import { Routes, Route } from "react-router-dom";
import { Container } from "react-bootstrap";

import styles from "./styles/dashboard.module.css";

import Sidebar from "../../components/Sidebar.js";

import DashboardScreen from "./DashboardScreen";
import UserProfile from "../User/UserProfile";

// Importing Inquiry Management Screens
import AddInquiry from "../Inquiry-management/AddInquiry";
import InquiryList from "../Inquiry-management/InquiryList";
import InquiryDetails from "../Inquiry-management/InquiryDetails";
import UpdateInquiry from "../Inquiry-management/UpdateInquiry";

// Importing Project Management Screens
import AddProject from "../Project-management/AddProject";
import ProjectList from "../Project-management/ProjectList";
import ProjectDetails from "../Project-management/ProjectDetails";
import UpdateProject from "../Project-management/UpdateProject";

// Importing Supplier Management Screens
import AddSupplier from "../Supplier-management/AddSupplier";
import SupplierList from "../Supplier-management/SupplierList";
import SupplierDetails from "../Supplier-management/SupplierDetails";
import UpdateSupplier from "../Supplier-management/UpdateSupplier";

const Dashboard = () => {
  return (
    <div className={styles.dashboard}>
      <Sidebar />
      <Container className={styles.content}>
        <Routes>
          <Route path="/" element={<DashboardScreen />} />
          <Route path="profile" element={<UserProfile />} />

          {/* Inquiry Management Routes */}
          <Route path="inquiry/add" element={<AddInquiry />} />
          <Route path="inquiries" element={<InquiryList />} />
          <Route path="inquiries/:id" element={<InquiryDetails />} />
          <Route path="inquiries/update/:id" element={<UpdateInquiry />} />

          {/* Project Management Routes */}
          <Route path="project/add" element={<AddProject />} />
          <Route path="projects" element={<ProjectList />} />
          <Route path="projects/:id" element={<ProjectDetails />} />
          <Route path="projects/update/:id" element={<UpdateProject />} />

          {/* Supplier Management Routes */}
          <Route path="supplier/add" element={<AddSupplier />} />
          <Route path="suppliers" element={<SupplierList />} />
          <Route path="suppliers/:id" element={<SupplierDetails />} />
          <Route path="suppliers/update/:id" element={<UpdateSupplier />} />
        </Routes>
      </Container>
    </div>
  );
};

export default Dashboard;
