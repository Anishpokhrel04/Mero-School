import { Form, Input, Row, Col } from "antd";
import React from "react";

const TeacherForms = ({ form }) => {
  return (
    <Form form={form} layout="vertical" className="mt-6 formTitle">
      <Row gutter={16}>
        <Col span={12}>
          <Form.Item
            label="First Name"
            name="firstName"
            rules={[{ required: true, message: "Please input first name!" }]}
          >
            <Input placeholder="Enter first name" />
          </Form.Item>
        </Col>

        <Col span={12}>
          <Form.Item
            label="Last Name"
            name="lastName"
            rules={[{ required: true, message: "Please input last name!" }]}
          >
            <Input placeholder="Enter last name" />
          </Form.Item>
        </Col>
      </Row>

      <Form.Item
        label="Email"
        name="email"
        rules={[
          {
            required: true,
            type: "email",
            message: "Please input a valid email!",
          },
        ]}
      >
        <Input placeholder="Enter email" />
      </Form.Item>

      <Row gutter={16}>
        <Col span={12}>
          <Form.Item
            label="Department"
            name="department"
            rules={[{ required: true, message: "Please input department!" }]}
          >
            <Input placeholder="Enter department" />
          </Form.Item>
        </Col>
        <Col span={12}>
          <Form.Item
            label="Subject"
            name="subject"
            rules={[{ required: true, message: "Please input subject!" }]}
          >
            <Input placeholder="Enter subject" />
          </Form.Item>
        </Col>
      </Row>
      <Form.Item
        label="Designation"
        name="designation"
        rules={[{ required: true, message: "Please input designation!" }]}
      >
        <Input placeholder="Enter designation" />
      </Form.Item>
    </Form>
  );
};

export default TeacherForms;
