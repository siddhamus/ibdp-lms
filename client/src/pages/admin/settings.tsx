// client/src/pages/admin/settings.tsx
import React from "react";
import { NextPageWithLayout } from "../../pages/_app"; // Adjust path as needed
import AdminLayout from "../../components/admin/AdminLayout";
import AdminDashboardHeader from "../../components/admin/AdminDashboardHeader";

const AdminSettingsPage: NextPageWithLayout = () => {
  return (
    <>
      <AdminDashboardHeader
        title="Settings"
        subtitle="Configure admin and platform settings"
      />
      <div className="bg-white p-4 rounded shadow">
        <form className="space-y-4">
          <div>
            <label
              htmlFor="site-name"
              className="block text-sm font-medium text-gray-700"
            >
              Site Name
            </label>
            <input
              id="site-name"
              name="siteName"
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-cyan-500 focus:ring-cyan-500 sm:text-sm"
              placeholder="My IBMantra LMS"
            />
          </div>
          <div>
            <label
              htmlFor="admin-email"
              className="block text-sm font-medium text-gray-700"
            >
              Admin Email
            </label>
            <input
              id="admin-email"
              name="adminEmail"
              type="email"
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-cyan-500 focus:ring-cyan-500 sm:text-sm"
              placeholder="admin@ibmantra.com"
            />
          </div>
          <button
            type="submit"
            className="inline-flex items-center rounded-md bg-cyan-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-cyan-500"
          >
            Save Changes
          </button>
        </form>
      </div>
    </>
  );
};

AdminSettingsPage.getLayout = function getLayout(page: React.ReactElement) {
  return <AdminLayout pageTitle="Settings">{page}</AdminLayout>;
};

export default AdminSettingsPage;
