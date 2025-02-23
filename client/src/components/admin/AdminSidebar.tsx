// client/src/components/admin/AdminSidebar.tsx
import React, { useState } from "react";
import Link from "next/link";
import {
  HomeIcon,
  UserGroupIcon,
  BookOpenIcon,
  AcademicCapIcon,
  ClipboardDocumentIcon,
  ChartBarIcon,
  Cog6ToothIcon,
  Bars3BottomLeftIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline";

const AdminSidebar: React.FC = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const navItems = [
    { name: "Dashboard", href: "/admin", icon: HomeIcon },
    { name: "Users", href: "/admin/users", icon: UserGroupIcon },
    { name: "Courses", href: "/admin/courses", icon: BookOpenIcon },
    { name: "Lessons", href: "/admin/lessons", icon: AcademicCapIcon },
    {
      name: "Assignments",
      href: "/admin/assignments",
      icon: ClipboardDocumentIcon,
    },
    { name: "Reports", href: "/admin/reports", icon: ChartBarIcon },
    { name: "Settings", href: "/admin/settings", icon: Cog6ToothIcon },
  ];

  return (
    <>
      {/* Mobile sidebar toggle button */}
      <div className="md:hidden bg-white border-r border-gray-200 p-2">
        <button
          onClick={() => setSidebarOpen(!sidebarOpen)}
          className="inline-flex items-center justify-center p-2 rounded-md text-gray-500 hover:text-gray-700 hover:bg-gray-100"
        >
          {!sidebarOpen ? (
            <Bars3BottomLeftIcon className="h-6 w-6" />
          ) : (
            <XMarkIcon className="h-6 w-6" />
          )}
        </button>
      </div>

      {/* Sidebar container */}
      <div
        className={`${
          sidebarOpen ? "block" : "hidden"
        } md:flex md:flex-col md:w-64 bg-white border-r border-gray-200`}
      >
        <div className="flex items-center justify-center h-16 shadow-sm">
          <Link href="/admin">
            <span className="text-xl font-bold text-indigo-600 cursor-pointer">
              Admin Panel
            </span>
          </Link>
        </div>
        <nav className="flex-1 px-2 py-4 space-y-2">
          {navItems.map((item) => (
            <Link key={item.name} href={item.href}>
              <span className="flex items-center px-2 py-2 text-gray-700 hover:bg-gray-100 rounded-md cursor-pointer">
                <item.icon className="h-5 w-5 mr-3" />
                {item.name}
              </span>
            </Link>
          ))}
        </nav>
      </div>
    </>
  );
};

export default AdminSidebar;
