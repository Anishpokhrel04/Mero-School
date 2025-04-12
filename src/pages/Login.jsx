import React from "react";
import { LockOutlined, UserOutlined } from "@ant-design/icons";
import { Button, Form, Input } from "antd";
import { useNavigate } from "react-router-dom";
import { showMessage } from "../components/shared/MessageComponents";

const LoginPage = () => {
  const navigate = useNavigate();
  const [form] = Form.useForm();
  const username = "admin";
  const password = "Admin@123";

  const handleSubmit = (values) => {
    if (values.username === username && values.password === password) {
      showMessage("success", "Login successful!");
      navigate("/dashboard");
    } else {
      showMessage("error", "Invalid username or password!");
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-background">
      <div className="bg-surface shadow-2xl rounded-2xl p-8 w-full max-w-md">
        {/* Logo */}
        <div className="flex justify-center mb-6">
          <img
            src="https://icons8.com/icon/2HnyYObAxn8V/students"
            alt="School Logo"
            className="w-20 h-20 object-contain"
          />
        </div>

        <h2 className="text-2xl font-semibold text-center mb-6 text-primary">
          School Management Login
        </h2>

        <Form
          form={form}
          name="horizontal_login"
          layout="vertical"
          onFinish={handleSubmit}
        >
          <Form.Item
            name="username"
            rules={[{ required: true, message: "Please input your username!" }]}
          >
            <Input
              prefix={<UserOutlined />}
              placeholder="Username"
              className="input-custom"
            />
          </Form.Item>

          <Form.Item
            name="password"
            rules={[{ required: true, message: "Please input your password!" }]}
          >
            <Input
              prefix={<LockOutlined />}
              type="password"
              placeholder="Password"
              className="input-custom"
            />
          </Form.Item>

          <Form.Item shouldUpdate>
            <Button
              type="primary"
              htmlType="submit"
              className="btn btn-primary w-full"
            >
              Log in
            </Button>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
};

export default LoginPage;
