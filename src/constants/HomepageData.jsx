import { BookFilled, ShoppingFilled, SignatureFilled } from "@ant-design/icons";

export const users = [
  {
    role: "admin",
    name: "Admin",
    color: "from-green-400 to-green-600",
    icon: <ShoppingFilled size={40} />,
  },
  {
    role: "teacher",
    name: "Teacher",
    color: "from-blue-400 to-blue-600",
    icon: <BookFilled size={40} />,
  },
  {
    role: "student",
    name: "Student",
    color: "from-purple-400 to-purple-600",
    icon: <SignatureFilled size={40} />,
  },
];
