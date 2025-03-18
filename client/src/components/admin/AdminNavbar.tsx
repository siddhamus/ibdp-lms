// client/src/components/admin/AdminNavbar.tsx
import React from "react";
import { BellIcon, ChevronDownIcon } from "@heroicons/react/24/outline";
import { Menu, Transition } from "@headlessui/react";
import Link from "next/link";
import LogoutButton from "../../components/LogoutButton";

interface AdminNavbarProps {
  pageTitle?: string;
}

const AdminNavbar: React.FC<AdminNavbarProps> = ({ pageTitle }) => {
  return (
    <nav className="bg-white border-b border-gray-200 px-4 py-2 flex items-center justify-between">
      <div>
        <h1 className="text-xl font-semibold text-gray-700">
          {pageTitle || "Admin Dashboard"}
        </h1>
      </div>
      <div className="flex items-center space-x-4">
        {/* Notification Button */}
        <button className="p-2 rounded-md text-gray-600 hover:text-cyan-600 hover:bg-gray-100">
          <BellIcon className="h-6 w-6" />
        </button>
        {/* Profile Dropdown */}
        <Menu as="div" className="relative">
          <Menu.Button className="flex items-center focus:outline-none">
            <div className="h-8 w-8 rounded-full bg-gray-300 flex items-center justify-center text-sm text-white">
              A
            </div>
            <ChevronDownIcon className="h-4 w-4 ml-1 text-gray-600" />
          </Menu.Button>
          <Transition
            as={React.Fragment}
            enter="transition ease-out duration-100"
            enterFrom="transform opacity-0 scale-95"
            enterTo="transform opacity-100 scale-100"
            leave="transition ease-in duration-75"
            leaveFrom="transform opacity-100 scale-100"
            leaveTo="transform opacity-0 scale-95"
          >
            <Menu.Items className="absolute right-0 mt-2 w-48 origin-top-right bg-white border border-gray-200 rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none z-20">
              <Menu.Item>
                {({ active }) => (
                  <Link
                    href="/admin/profile"
                    className={`block px-4 py-2 text-sm ${
                      active ? "bg-cyan-600 text-white" : "text-gray-700"
                    }`}
                  >
                    Profile
                  </Link>
                )}
              </Menu.Item>
              <Menu.Item>
                {({ active }) => (
                  <div
                    className={`block text-left ${
                      active ? "bg-cyan-600 text-white" : "text-gray-700"
                    }`}
                  >
                    <LogoutButton className="w-full text-left p-2" />
                  </div>
                )}
              </Menu.Item>
            </Menu.Items>
          </Transition>
        </Menu>
      </div>
    </nav>
  );
};

export default AdminNavbar;
