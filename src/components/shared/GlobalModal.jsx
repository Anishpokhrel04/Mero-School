import { Modal } from "antd";
import React from "react";

const GlobalModal = ({ title, open, onOk, onCancel, okText, children }) => {
  return (
    <Modal
      title={title}
      open={open}
      onOk={onOk}
      onCancel={onCancel}
      okText={okText}
      okButtonProps={{ className: "btn-primary" }}
    >
      {children}
    </Modal>
  );
};

export default GlobalModal;
