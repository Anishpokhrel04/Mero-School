import { PlusOutlined } from "@ant-design/icons";
import { Button } from "antd";
import React from "react";

const CreateButton = ({ title, handleCreate }) => {
  return (
    <Button
      icon={<PlusOutlined />}
      onClick={handleCreate}
      className="btn-primary"
    >
      {title}
    </Button>
  );
};

export default CreateButton;
