import React from "react";

const Shimmer = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-gray-50 to-blue-50 py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-8">
          {Array(20)
            .fill("")
            .map((_, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow-md p-4 animate-pulse"
              >
                <div className="bg-gray-300 h-40 w-full rounded-lg mb-4"></div>
                <div className="h-4 bg-gray-300 rounded w-3/4 mb-2"></div>
                <div className="h-4 bg-gray-300 rounded w-1/2 mb-2"></div>
                <div className="h-4 bg-gray-300 rounded w-full"></div>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default Shimmer;
