import { DeleteOutlined, EditOutlined } from "@ant-design/icons";
import { Button, Form } from "antd";
import { useState } from "react";
import CreateButton from "../components/buttons/CreateButton";
import DynamicTable from "../components/shared/DynamicTable";
import {
  handleFormSubmit,
  handleGlobalAction,
} from "../components/shared/GlobalFunctions";
import GlobalModal from "../components/shared/GlobalModal";
import TeacherForms from "../components/forms/TeachersForm";

const Teacher = () => {
  const [form] = Form.useForm();
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [editMode, setEditMode] = useState(false);
  const [selectedTeacher, setSelectedTeacher] = useState(null);

  const [teachers, setTeachers] = useState([
    {
      id: 1,
      firstName: "Alice",
      lastName: "Johnson",
      email: "alice.johnson@school.edu",
      department: "Computer Science",
      subject: "Data Structures",
      designation: "Associate Professor",
    },
    {
      id: 2,
      firstName: "Robert",
      lastName: "Brown",
      email: "robert.brown@school.edu",
      department: "Mathematics",
      subject: "Linear Algebra",
      designation: "Assistant Professor",
    },
  ]);

  const columns = [
    {
      title: "S.N",
      dataIndex: "id",
      key: "id",
      align: "center",
      width: 50,
    },
    {
      title: "Name",
      key: "name",
      render: (text, record) => `${record.firstName} ${record.lastName}`,
    },
    {
      title: "Email",
      dataIndex: "email",
      key: "email",
    },
    {
      title: "Department",
      dataIndex: "department",
      key: "department",
    },
    {
      title: "Subject",
      dataIndex: "subject",
      key: "subject",
    },
    {
      title: "Designation",
      dataIndex: "designation",
      key: "designation",
    },
    {
      title: "Actions",
      key: "actions",
      width: 100,
      align: "center",
      render: (text, record) => (
        <div className="flex space-x-2 justify-center align-middle">
          <Button
            type="link"
            icon={<EditOutlined />}
            onClick={() => handleEdit(record)}
          />
          <Button
            type="link"
            danger
            icon={<DeleteOutlined />}
            onClick={() =>
              handleGlobalAction(
                record.id,
                "delete",
                "Teacher",
                teachers,
                setTeachers
              )
            }
          />
        </div>
      ),
    },
  ];

  const handleCreate = () => {
    form.resetFields();
    setEditMode(false);
    setIsModalVisible(true);
  };

  const handleEdit = (teacher) => {
    form.setFieldsValue(teacher);
    setSelectedTeacher(teacher);
    setEditMode(true);
    setIsModalVisible(true);
  };

  const handleSubmit = () => {
    handleFormSubmit({
      form,
      editMode,
      selectedItem: selectedTeacher,
      data: teachers,
      setData: setTeachers,
      closeModal: () => setIsModalVisible(false),
      successMessages: {
        create: "Teacher added successfully",
        update: "Teacher updated successfully",
      },
    });
  };

  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold text-gray-800">Teacher Management</h1>
        <CreateButton title="Add Teacher" handleCreate={handleCreate} />
      </div>

      <DynamicTable columns={columns} data={teachers} />

      <GlobalModal
        title={editMode ? "Edit Teacher" : "Add New Teacher"}
        open={isModalVisible}
        onOk={handleSubmit}
        onCancel={() => setIsModalVisible(false)}
        okText={editMode ? "Update" : "Create"}
      >
        <TeacherForms form={form} />
      </GlobalModal>
    </div>
  );
};

export default Teacher;
