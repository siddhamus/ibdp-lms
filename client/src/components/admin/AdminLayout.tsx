// client/src/components/admin/AdminLayout.tsx
import React from "react";
import AdminSidebar from "./AdminSidebar";
import AdminNavbar from "./AdminNavbar";

interface AdminLayoutProps {
  children: React.ReactNode;
  pageTitle?: string;
}

const AdminLayout: React.FC<AdminLayoutProps> = ({ children, pageTitle }) => {
  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <AdminSidebar />

      {/* Main Content Area */}
      <div className="flex flex-col flex-1">
        {/* Navbar */}
        <AdminNavbar pageTitle={pageTitle} />

        {/* Main Dashboard Content */}
        <main className="p-4 overflow-auto flex-grow">{children}</main>
      </div>
    </div>
  );
};

export default AdminLayout;
