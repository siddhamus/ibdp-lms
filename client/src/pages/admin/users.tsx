// client/src/pages/admin/users.tsx
import React from "react";
import { NextPageWithLayout } from "../../pages/_app"; // Adjust path as needed
import AdminLayout from "../../components/admin/AdminLayout";
import AdminDashboardHeader from "../../components/admin/AdminDashboardHeader";

const AdminUsersPage: NextPageWithLayout = () => {
  // Example user data
  const users = [
    { id: "1", name: "John Doe", email: "john@example.com", role: "Student" },
    { id: "2", name: "Jane Smith", email: "jane@example.com", role: "Teacher" },
  ];

  return (
    <>
      <AdminDashboardHeader
        title="Manage Users"
        subtitle="Add, edit or remove users"
      />
      <div className="bg-white p-4 rounded shadow">
        <table className="w-full table-auto">
          <thead>
            <tr className="border-b">
              <th className="px-4 py-2 text-left text-sm font-semibold text-gray-600">
                Name
              </th>
              <th className="px-4 py-2 text-left text-sm font-semibold text-gray-600">
                Email
              </th>
              <th className="px-4 py-2 text-left text-sm font-semibold text-gray-600">
                Role
              </th>
              <th className="px-4 py-2 text-left text-sm font-semibold text-gray-600">
                Actions
              </th>
            </tr>
          </thead>
          <tbody className="divide-y">
            {users.map((user) => (
              <tr key={user.id}>
                <td className="px-4 py-2">{user.name}</td>
                <td className="px-4 py-2">{user.email}</td>
                <td className="px-4 py-2">{user.role}</td>
                <td className="px-4 py-2">
                  <button className="text-indigo-600 hover:underline mr-2">
                    Edit
                  </button>
                  <button className="text-red-600 hover:underline">
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

AdminUsersPage.getLayout = function getLayout(page: React.ReactElement) {
  return <AdminLayout pageTitle="Users">{page}</AdminLayout>;
};

export default AdminUsersPage;
