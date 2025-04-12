import { Layout } from "antd";
import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import DynamicBreadcrumb from "../components/DynamicBreadcrumb";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";

const { Content, Footer } = Layout;

const MainLayout = () => {
  const [collapsed, setCollapsed] = useState(false);
  const toggleCollapsed = () => setCollapsed(!collapsed);

  return (
    <Layout style={{ minHeight: "100vh" }}>
      <Sidebar collapsed={collapsed} toggleCollapsed={toggleCollapsed} />

      <Layout>
        <Navbar toggleCollapsed={toggleCollapsed} collapsed={collapsed} />

        <Content
          style={{ margin: "16px", padding: "16px", background: "#fff" }}
        >
          <DynamicBreadcrumb />
          <Outlet />
        </Content>

        <Footer style={{ textAlign: "center" }}>
          School Management System ©2025
        </Footer>
      </Layout>
    </Layout>
  );
};

export default MainLayout;
