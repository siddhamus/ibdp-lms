// client/src/components/admin/AdminDashboardHeader.tsx
import React from "react";
import {
  AcademicCapIcon,
  BookOpenIcon,
  UserGroupIcon,
  PlusIcon,
} from "@heroicons/react/20/solid";
import { Menu, Transition } from "@headlessui/react";

interface AdminDashboardHeaderProps {
  title: string;
  subtitle?: string;
  totalCourses?: number;
  activeStudents?: number;
  pendingAssignments?: number;
  onAddNew?: () => void; // callback for add new action
}

const AdminDashboardHeader: React.FC<AdminDashboardHeaderProps> = ({
  title,
  subtitle,
  totalCourses,
  activeStudents,
  pendingAssignments,
  onAddNew,
}) => {
  return (
    <div className="lg:flex lg:items-center lg:justify-between bg-white p-4 rounded-md shadow mb-4">
      <div className="flex-1">
        <h2 className="text-2xl font-bold text-gray-900 sm:truncate sm:text-3xl">
          {title}
        </h2>
        {subtitle && <p className="mt-1 text-sm text-gray-500">{subtitle}</p>}
        {/* Metrics badges row */}
        <div className="mt-4 flex flex-wrap space-x-6">
          {totalCourses !== undefined && (
            <div className="flex items-center text-sm text-gray-600">
              <BookOpenIcon className="mr-1.5 h-5 w-5 text-gray-400" />
              <span>{totalCourses} Courses</span>
            </div>
          )}
          {activeStudents !== undefined && (
            <div className="flex items-center text-sm text-gray-600">
              <UserGroupIcon className="mr-1.5 h-5 w-5 text-gray-400" />
              <span>{activeStudents} Students</span>
            </div>
          )}
          {pendingAssignments !== undefined && (
            <div className="flex items-center text-sm text-gray-600">
              <AcademicCapIcon className="mr-1.5 h-5 w-5 text-gray-400" />
              <span>{pendingAssignments} Pending</span>
            </div>
          )}
        </div>
      </div>
      <div className="mt-5 flex lg:ml-4 lg:mt-0">
        {/* Add New Button */}
        <span className="hidden sm:block">
          <button
            type="button"
            onClick={onAddNew}
            className="inline-flex items-center rounded-md bg-cyan-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-cyan-500 focus:outline-none"
          >
            <PlusIcon className="-ml-0.5 mr-1.5 h-5 w-5" aria-hidden="true" />
            Add New
          </button>
        </span>
        {/* Refresh Button */}

        {/* Dropdown for smaller screens */}
        <Menu as="div" className="relative ml-3 sm:hidden">
          <Menu.Button className="inline-flex items-center rounded-md bg-cyan-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-cyan-500">
            More
          </Menu.Button>
          <Transition
            enter="transition duration-200 ease-out"
            enterFrom="transform opacity-0 scale-95"
            enterTo="transform opacity-100 scale-100"
            leave="transition duration-75 ease-in"
            leaveFrom="transform opacity-100 scale-100"
            leaveTo="transform opacity-0 scale-95"
          >
            <Menu.Items className="absolute right-0 z-10 mt-2 w-40 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black/5 focus:outline-none">
              <Menu.Item>
                {({ active }) => (
                  <button
                    onClick={onAddNew}
                    className={`${
                      active ? "bg-gray-100" : ""
                    } block w-full px-4 py-2 text-sm text-gray-700`}
                  >
                    Add New
                  </button>
                )}
              </Menu.Item>
              <Menu.Item>
                {({ active }) => (
                  <button
                    className={`${
                      active ? "bg-gray-100" : ""
                    } block w-full px-4 py-2 text-sm text-gray-700`}
                  >
                    Refresh
                  </button>
                )}
              </Menu.Item>
            </Menu.Items>
          </Transition>
        </Menu>
      </div>
    </div>
  );
};

export default AdminDashboardHeader;
