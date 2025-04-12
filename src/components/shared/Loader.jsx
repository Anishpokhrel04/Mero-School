import React from "react";

const Loader = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-white">
      <div className="text-center">
        <img
          src="https://cdn-icons-png.flaticon.com/512/3135/3135755.png"
          alt="Loading..."
          className="w-24 h-24 mx-auto animate-bounce"
        />
        <h1 className="mt-4 text-xl font-semibold text-gray-700">
          Loading School App...
        </h1>
      </div>
    </div>
  );
};

export default Loader;
