import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Loader from "../components/shared/Loader";
import { users } from "../constants/HomepageData";

const HomePage = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <Loader />;
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-100 to-slate-200">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 p-4">
        {users.map((user) => (
          <div
            key={user.role}
            onClick={() => navigate(`/login/${user.role}`)}
            className={`cursor-pointer p-6 bg-gradient-to-r ${user.color} rounded-2xl text-white text-center shadow-xl hover:scale-105 transition-transform duration-300`}
          >
            <div className="flex justify-center mb-4">{user.icon}</div>
            <h2 className="text-3xl font-bold mb-2">{user.name}</h2>
            <p className="text-sm">
              Click to login as {user.name.toLowerCase()}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomePage;
