import React from "react";
import { HomeOutlined, UserOutlined } from "@ant-design/icons";
import { Breadcrumb } from "antd";
import { useLocation } from "react-router-dom";

const DynamicBreadcrumb = () => {
  const location = useLocation();
  const pathSnippets = location.pathname.split("/").filter((i) => i);

  const items = [
    {
      href: "/dashboard",
      title: (
        <>
          <HomeOutlined /> Home
        </>
      ),
    },

    ...pathSnippets.map((snippet, index) => {
      const url = `/${pathSnippets.slice(0, index + 1).join("/")}`;
      const isLast = index === pathSnippets.length - 1;

      const title =
        snippet === "students" ? (
          <>
            <UserOutlined /> <span> Students</span>
          </>
        ) : (
          <span>
            {snippet
              .replace(/-/g, " ")
              .replace(/\b\w/g, (l) => l.toUpperCase())}
          </span>
        );

      return isLast
        ? { title }
        : {
            href: url,
            title,
          };
    }),
  ];

  return <Breadcrumb items={items} style={{ marginBottom: 16 }} />;
};

export default DynamicBreadcrumb;
