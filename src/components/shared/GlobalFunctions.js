import { Modal } from "antd";
import { showMessage } from "./MessageComponents";

export const handleGlobalAction = (
  id,
  type,
  dataName,
  initialState,
  setState
) => {
  switch (type) {
    case "delete":
      Modal.confirm({
        title: `Delete ${dataName}`,
        content: `Are you sure you want to delete this ${dataName}?`,
        okText: "Yes",
        okType: "danger",
        cancelText: "No",
        onOk: () => {
          setState(initialState.filter((item) => item.id !== id));
          showMessage("success", `${dataName} deleted successfully`);
        },
      });
      break;

    // You can add other types like 'create', 'edit', etc. if needed
    default:
      break;
  }
};

export const handleFormSubmit = ({
  form,
  editMode,
  selectedItem,
  data,
  setData,
  closeModal,
  successMessages = {
    create: "created successfully",
    update: "updated successfully",
  },
}) => {
  form.validateFields().then((values) => {
    if (editMode && selectedItem) {
      const updatedData = data.map((item) =>
        item.id === selectedItem.id ? { ...values, id: item.id } : item
      );
      setData(updatedData);
      showMessage("success", successMessages.update);
    } else {
      const newItem = { ...values, id: data.length + 1 };
      setData([...data, newItem]);
      showMessage("success", successMessages.create);
    }
    closeModal();
  });
};
