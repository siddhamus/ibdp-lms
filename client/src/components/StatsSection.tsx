import React from "react";

const StatsSection: React.FC = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div>
            <div className="text-4xl font-bold text-cyan-600 mb-2">5000+</div>
            <div className="text-gray-600">Active Students</div>
          </div>
          <div>
            <div className="text-4xl font-bold text-cyan-600 mb-2">50+</div>
            <div className="text-gray-600">Expert Teachers</div>
          </div>
          <div>
            <div className="text-4xl font-bold text-cyan-600 mb-2">100+</div>
            <div className="text-gray-600">Course Modules</div>
          </div>
          <div>
            <div className="text-4xl font-bold text-cyan-600 mb-2">95%</div>
            <div className="text-gray-600">Success Rate</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
