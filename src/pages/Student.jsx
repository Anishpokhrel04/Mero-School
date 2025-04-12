import { DeleteOutlined, EditOutlined } from "@ant-design/icons";
import { Button, Form } from "antd";
import { useState } from "react";
import CreateButton from "../components/buttons/CreateButton";
import StudentsForm from "../components/forms/StudentsForm";
import DynamicTable from "../components/shared/DynamicTable";
import {
  handleFormSubmit,
  handleGlobalAction,
} from "../components/shared/GlobalFunctions";
import GlobalModal from "../components/shared/GlobalModal";
const Student = () => {
  const [form] = Form.useForm();
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [editMode, setEditMode] = useState(false);
  const [selectedStudent, setSelectedStudent] = useState(null);

  const [students, setStudents] = useState([
    {
      id: 1,
      firstName: "John",
      lastName: "Doe",
      email: "john@example.com",
      major: "Computer Science",
      class: "CS101",
    },
    {
      id: 2,
      firstName: "Jane",
      lastName: "Smith",
      email: "jane@example.com",
      major: "Electrical Engineering",
      class: "EE102",
    },
    {
      id: 3,
      firstName: "Emily",
      lastName: "Johnson",
      email: "emily@example.com",
      major: "Mechanical Engineering",
      class: "ME103",
    },
    {
      id: 4,
      firstName: "Michael",
      lastName: "Williams",
      email: "michael@example.com",
      major: "Civil Engineering",
      class: "CE104",
    },
    {
      id: 5,
      firstName: "David",
      lastName: "Brown",
      email: "david@example.com",
      major: "Mathematics",
      class: "MATH105",
    },
    {
      id: 6,
      firstName: "Sophia",
      lastName: "Davis",
      email: "sophia@example.com",
      major: "Physics",
      class: "PHYS106",
    },
    {
      id: 7,
      firstName: "William",
      lastName: "Martinez",
      email: "william@example.com",
      major: "Chemistry",
      class: "CHEM107",
    },
    {
      id: 8,
      firstName: "Olivia",
      lastName: "Garcia",
      email: "olivia@example.com",
      major: "Biology",
      class: "BIO108",
    },
    {
      id: 9,
      firstName: "James",
      lastName: "Miller",
      email: "james@example.com",
      major: "Economics",
      class: "ECON109",
    },
    {
      id: 10,
      firstName: "Isabella",
      lastName: "Wilson",
      email: "isabella@example.com",
      major: "Psychology",
      class: "PSY110",
    },
  ]);

  const columns = [
    {
      title: "ID",
      dataIndex: "id",
      key: "id",
      width: 80,
      sorter: (a, b) => a.id - b.id,
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
      title: "Major",
      dataIndex: "major",
      key: "major",
    },
    {
      title: "Class",
      dataIndex: "class",
      key: "class",
    },
    {
      title: "Actions",
      key: "actions",
      width: 100,
      render: (text, record) => (
        <div className="flex space-x-2">
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
                "Student",
                students,
                setStudents
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

  const handleEdit = (student) => {
    form.setFieldsValue(student);
    setSelectedStudent(student);
    setEditMode(true);
    setIsModalVisible(true);
  };

  const handleSubmit = () => {
    handleFormSubmit({
      form,
      editMode,
      selectedItem: selectedStudent,
      data: students,
      setData: setStudents,
      closeModal: () => setIsModalVisible(false),
      successMessages: {
        create: "Student added successfully",
        update: "Student updated successfully",
      },
    });
  };

  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold text-gray-800">Student Management</h1>
        <CreateButton title="Add Student" handleCreate={handleCreate} />
      </div>
      
      <DynamicTable columns={columns} data={students} />

      <GlobalModal
        title={editMode ? "Edit Student" : "Add New Student"}
        open={isModalVisible}
        onOk={handleSubmit}
        onCancel={() => setIsModalVisible(false)}
        okText={editMode ? "Update" : "Create"}
      >
        <StudentsForm form={form} />
      </GlobalModal>
    </div>
  );
};

export default Student;
