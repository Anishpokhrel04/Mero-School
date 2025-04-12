import React from "react";
import { Table } from "antd";

const DynamicTable = ({ data, columns }) => {
  return (
    <Table
      size="small"
      dataSource={data}
      columns={columns}
      rowKey="id" // assuming each row has a unique 'id'
      pagination={false}
      scroll={{ x: "max-content", y: 500 }}
    />
  );
};

export default DynamicTable;
