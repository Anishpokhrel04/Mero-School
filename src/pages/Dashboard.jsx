import { Card, Col, Row } from "antd";
import React from "react";
import {
  Bar,
  BarChart,
  Cell,
  Legend,
  Line,
  LineChart,
  Pie,
  PieChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import {
  attendanceData,
  classData,
  COLORS,
  genderData,
  summaryData,
} from "../data/Dashboard";

const Dashboard = () => {
  return (
    <div className="dashboard-wrapper">
      <h1 className="text-3xl font-semibold mb-8 text-gray-800">
        Dashboard Overview
      </h1>

      {/* Summary Cards */}
      <Row gutter={[16, 16]}>
        {summaryData.map((item, index) => (
          <Col xs={24} sm={12} md={8} key={index}>
            <div
              className={`rounded-xl p-6 shadow-md text-white ${item.bgColor} transition-all duration-300 hover:scale-[1.02]`}
            >
              <div className="flex justify-between items-center">
                <div>
                  <div className="text-sm opacity-90">{item.title}</div>
                  <div className="text-3xl font-bold mt-1">{item.count}</div>
                </div>
                <div className="text-3xl">{item.icon}</div>
              </div>
            </div>
          </Col>
        ))}
      </Row>

      {/* Charts */}
      <Row gutter={[16, 16]} className="mt-8">
        <Col xs={24} md={12}>
          <Card title="Attendance Trend">
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={attendanceData}>
                <XAxis dataKey="day" />
                <YAxis />
                <Tooltip />
                <Line
                  type="monotone"
                  dataKey="value"
                  stroke="#8884d8"
                  strokeWidth={3}
                />
              </LineChart>
            </ResponsiveContainer>
          </Card>
        </Col>

        <Col xs={24} md={12}>
          <Card title="Class-wise Students">
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={classData}>
                <XAxis dataKey="class" />
                <YAxis />
                <Tooltip />
                <Bar dataKey="students" fill="#82ca9d" />
              </BarChart>
            </ResponsiveContainer>
          </Card>
        </Col>

        <Col xs={24} md={12}>
          <Card title="Gender Distribution">
            <ResponsiveContainer width="100%" height={300}>
              <PieChart>
                <Pie
                  data={genderData}
                  dataKey="value"
                  nameKey="name"
                  cx="50%"
                  cy="50%"
                  outerRadius={100}
                  label
                >
                  {genderData.map((entry, index) => (
                    <Cell
                      key={`cell-${index}`}
                      fill={COLORS[index % COLORS.length]}
                    />
                  ))}
                </Pie>
                <Tooltip />
                <Legend />
              </PieChart>
            </ResponsiveContainer>
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default Dashboard;
