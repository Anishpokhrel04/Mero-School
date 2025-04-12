import React from "react";
import { Layout, Menu } from "antd";
import { Link } from "react-router-dom";
import { sidebarMenuItems } from "../data/SidebarData";

const { Sider } = Layout;

const Sidebar = ({ collapsed, toggleCollapsed }) => {
  return (
    <Sider collapsible collapsed={collapsed} onCollapse={toggleCollapsed}>
      <div
        className="logo"
        style={{ color: "#fff", padding: 16, textAlign: "center" }}
      >
        {collapsed ? "📘" : "My School"}
      </div>
      <Menu theme="dark" mode="inline" defaultSelectedKeys={["1"]}>
        {sidebarMenuItems.map((item) => (
          <Menu.Item key={item.key} icon={item.icon}>
            <Link to={item.path}>{item.label}</Link>
          </Menu.Item>
        ))}
      </Menu>
    </Sider>
  );
};

export default Sidebar;
