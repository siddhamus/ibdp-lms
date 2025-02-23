// client/src/pages/admin/courses.tsx
import React from "react";
import { NextPageWithLayout } from "../../pages/_app"; // Adjust path as needed
import AdminLayout from "../../components/admin/AdminLayout";
import AdminDashboardHeader from "../../components/admin/AdminDashboardHeader";

const AdminCoursesPage: NextPageWithLayout = () => {
  const courses = [
    {
      id: "1",
      title: "Paper 1: Guided Analysis",
      level: "HL",
      status: "Active",
    },
    {
      id: "2",
      title: "Comparative Essay Skills",
      level: "SL",
      status: "Draft",
    },
  ];

  return (
    <>
      <AdminDashboardHeader
        title="Manage Courses"
        subtitle="Add, edit or remove courses"
      />
      <div className="bg-white p-4 rounded shadow">
        <table className="w-full table-auto">
          <thead>
            <tr className="border-b">
              <th className="px-4 py-2 text-left text-sm font-semibold text-gray-600">
                Title
              </th>
              <th className="px-4 py-2 text-left text-sm font-semibold text-gray-600">
                Level
              </th>
              <th className="px-4 py-2 text-left text-sm font-semibold text-gray-600">
                Status
              </th>
              <th className="px-4 py-2 text-left text-sm font-semibold text-gray-600">
                Actions
              </th>
            </tr>
          </thead>
          <tbody className="divide-y">
            {courses.map((course) => (
              <tr key={course.id}>
                <td className="px-4 py-2">{course.title}</td>
                <td className="px-4 py-2">{course.level}</td>
                <td className="px-4 py-2">{course.status}</td>
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

AdminCoursesPage.getLayout = function getLayout(page: React.ReactElement) {
  return <AdminLayout pageTitle="Courses">{page}</AdminLayout>;
};

export default AdminCoursesPage;
