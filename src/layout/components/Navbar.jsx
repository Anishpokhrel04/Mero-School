import { MenuFoldOutlined, MenuUnfoldOutlined } from "@ant-design/icons";
import { Layout } from "antd";
import React from "react";
const { Header, Sider, Content, Footer } = Layout;

const Navbar = ({ toggleCollapsed,collapsed }) => {
  return (
    <Header style={{ padding: 0, background: "#fff", paddingInline: 16 }}>
      {collapsed ? (
        <MenuUnfoldOutlined onClick={toggleCollapsed} />
      ) : (
        <MenuFoldOutlined onClick={toggleCollapsed} />
      )}
    </Header>
  );
};

export default Navbar;
