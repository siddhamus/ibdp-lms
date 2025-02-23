// client/src/pages/admin/index.tsx
import React from "react";
import { NextPageWithLayout } from "../../pages/_app"; // Adjust the path as needed
import AdminLayout from "../../components/admin/AdminLayout";
import AdminDashboardHeader from "../../components/admin/AdminDashboardHeader";

const AdminDashboardPage: NextPageWithLayout = () => {
  return (
    <>
      <AdminDashboardHeader title="Admin Dashboard" subtitle="Quick Overview" />
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="bg-white rounded shadow p-4">
          <h3 className="text-lg font-semibold mb-2">Total Users</h3>
          <p className="text-2xl">1,234</p>
        </div>
        <div className="bg-white rounded shadow p-4">
          <h3 className="text-lg font-semibold mb-2">Active Courses</h3>
          <p className="text-2xl">12</p>
        </div>
        <div className="bg-white rounded shadow p-4">
          <h3 className="text-lg font-semibold mb-2">Monthly Revenue</h3>
          <p className="text-2xl">$5,100</p>
        </div>
      </div>
    </>
  );
};

AdminDashboardPage.getLayout = function getLayout(page: React.ReactElement) {
  return <AdminLayout pageTitle="Dashboard">{page}</AdminLayout>;
};

export default AdminDashboardPage;
