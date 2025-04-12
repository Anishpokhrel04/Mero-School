import { BookOutlined, TeamOutlined, UserOutlined } from "@ant-design/icons";

export const summaryData = [
  {
    title: "Total Students",
    count: 320,
    icon: <UserOutlined style={{ fontSize: "24px", color: "#ffffff" }} />,
    bgColor: "bg-blue-500",
  },
  {
    title: "Total Teachers",
    count: 25,
    icon: <TeamOutlined style={{ fontSize: "24px", color: "#ffffff" }} />,
    bgColor: "bg-green-500",
  },
  {
    title: "Total Classes",
    count: 18,
    icon: <BookOutlined style={{ fontSize: "24px", color: "#ffffff" }} />,
    bgColor: "bg-purple-500",
  },
];
export const attendanceData = [
  { day: "Mon", value: 80 },
  { day: "Tue", value: 85 },
  { day: "Wed", value: 78 },
  { day: "Thu", value: 90 },
  { day: "Fri", value: 88 },
];

export const classData = [
  { class: "Grade 1", students: 40 },
  { class: "Grade 2", students: 35 },
  { class: "Grade 3", students: 45 },
  { class: "Grade 4", students: 50 },
  { class: "Grade 5", students: 60 },
];

export const genderData = [
  { name: "Male", value: 180 },
  { name: "Female", value: 140 },
];
export const COLORS = ["#00C49F", "#FF6384"];
