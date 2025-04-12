import {
  HomeOutlined,
  UserOutlined,
  TeamOutlined,
  BookOutlined,
} from "@ant-design/icons";

export const sidebarMenuItems = [
  {
    key: "1",
    label: "Dashboard",
    path: "/dashboard",
    icon: <HomeOutlined />,
  },
  {
    key: "2",
    label: "Students",
    path: "/students",
    icon: <UserOutlined />,
  },
  {
    key: "3",
    label: "Teachers",
    path: "/teachers",
    icon: <TeamOutlined />,
  },
  {
    key: "4",
    label: "Courses",
    path: "/courses",
    icon: <BookOutlined />,
  },
];
