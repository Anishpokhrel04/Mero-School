import { message } from "antd";

export const showMessage = (type, content) => {
  switch (type) {
    case "success":
      message.success(content);
      break;
    case "error":
      message.error(content);
      break;
    case "warning":
      message.warning(content);
      break;
    case "info":
      message.info(content);
      break;
    default:
      message.info("Default message type");
  }
};
