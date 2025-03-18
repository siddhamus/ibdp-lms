// client/src/pages/admin/users.tsx

import React from "react";
import AdminLayout from "../../components/admin/AdminLayout";
import AdminDashboardHeader from "../../components/admin/AdminDashboardHeader";
import { NextPageWithLayout } from "../../pages/_app";
import useUsers, { User } from "../../hooks/useUsers";
import { deleteUser, updateUser, createUser } from "../../services/userService";
import { ErrorWithMessage } from "../../interfaces/error";

/**
 * AdminUsersPage Component
 * - Displays a list of users fetched via SWR.
 * - Provides functionalities to delete, edit, and add new users.
 */
const AdminUsersPage: NextPageWithLayout = () => {
  // Fetch users from the backend using a custom hook.
  const { users, isLoading, isError, mutate } = useUsers();

  /***************** Delete Functionality ******************/
  /**
   * handleDelete - Deletes a user after confirmation.
   * @param id - The ID of the user to delete.
   */
  const handleDelete = async (id: string) => {
    if (confirm("Are you sure you want to delete this user?")) {
      try {
        await deleteUser(id); // Call the service function to delete user.
      } catch (err) {
        console.error(err);
        alert("Error deleting user: " + (err as ErrorWithMessage).message);
      }
    }
  };

  /***************** Edit Functionality ******************/
  // State for managing the currently edited user and form data.
  const [editingUser, setEditingUser] = React.useState<User | null>(null);
  const [editFormData, setEditFormData] = React.useState({
    name: "",
    email: "",
    role: "",
    password: "",
  });

  /**
   * openEditModal - Opens the edit modal and pre-fills form data for a given user.
   * @param user - The user object whose details will be edited.
   */
  const openEditModal = (user: User) => {
    setEditingUser(user);
    setEditFormData({
      name: user.name,
      email: user.email,
      role: user.role,
      password: "", // leave empty if password is not being updated
    });
  };

  /**
   * closeEditModal - Closes the edit modal.
   */
  const closeEditModal = () => {
    setEditingUser(null);
  };

  /**
   * handleEditChange - Updates the edit form state on field change.
   */
  const handleEditChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    setEditFormData({ ...editFormData, [e.target.name]: e.target.value });
  };

  /**
   * handleEditSubmit - Submits the edit form to update the user.
   * It calls the updateUser service function, then refreshes the user list.
   */
  const handleEditSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!editingUser) return;
    try {
      await updateUser(editingUser._id, editFormData);
      mutate(); // Refresh user list after update.
      closeEditModal(); // Close modal on success.
    } catch (err) {
      console.error(err);
      alert("Error updating user: " + (err as ErrorWithMessage).message);
    }
  };

  /***************** Add New Functionality ******************/
  // State to control the visibility of the Add New modal and to hold form data.
  const [showAddModal, setShowAddModal] = React.useState(false);
  const [addFormData, setAddFormData] = React.useState({
    name: "",
    email: "",
    role: "user", // Default role is "user"
    password: "",
  });

  /**
   * openAddModal - Opens the modal to add a new user and resets the form.
   */
  const openAddModal = () => {
    setAddFormData({ name: "", email: "", role: "user", password: "" });
    setShowAddModal(true);
  };

  /**
   * closeAddModal - Closes the add new modal.
   */
  const closeAddModal = () => {
    setShowAddModal(false);
  };

  /**
   * handleAddChange - Updates the add new form state on field change.
   */
  const handleAddChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    setAddFormData({ ...addFormData, [e.target.name]: e.target.value });
  };

  /**
   * handleAddSubmit - Submits the add new form to create a user.
   * It calls the createUser service function, refreshes the user list, and closes the modal.
   */
  const handleAddSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await createUser(addFormData);
      mutate(); // Refresh the user list after creation.
      closeAddModal(); // Close the modal.
    } catch (err) {
      console.error(err);
      alert("Error creating user: " + (err as ErrorWithMessage).message);
    }
  };

  /***************** Render UI ******************/
  if (isError) return <div>Failed to load users.</div>;
  if (isLoading) return <div>Loading...</div>;

  return (
    <>
      {/* Dashboard Header with a callback to open the Add New modal */}
      <AdminDashboardHeader
        title="Manage Users"
        subtitle="Add, edit or remove users"
        onAddNew={openAddModal}
      />

      {/* Users Table */}
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
            {users!.map((user: User) => (
              <tr key={user._id}>
                <td className="px-4 py-2">{user.name}</td>
                <td className="px-4 py-2">{user.email}</td>
                <td className="px-4 py-2">{user.role}</td>
                <td className="px-4 py-2">
                  <button
                    className="text-cyan-600 hover:underline mr-2"
                    onClick={() => openEditModal(user)}
                  >
                    Edit
                  </button>
                  <button
                    className="text-red-600 hover:underline"
                    onClick={() => handleDelete(user._id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Edit User Modal */}
      {editingUser && (
        <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex justify-center items-center">
          <div className="bg-white p-6 rounded shadow-lg w-96">
            <h2 className="text-xl font-bold mb-4">Edit User</h2>
            <form onSubmit={handleEditSubmit}>
              <div className="mb-4">
                <label className="block text-sm font-medium">Name</label>
                <input
                  type="text"
                  name="name"
                  value={editFormData.name}
                  onChange={handleEditChange}
                  className="mt-1 w-full border rounded p-2"
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block text-sm font-medium">Email</label>
                <input
                  type="email"
                  name="email"
                  value={editFormData.email}
                  onChange={handleEditChange}
                  className="mt-1 w-full border rounded p-2"
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block text-sm font-medium">Role</label>
                <select
                  name="role"
                  value={editFormData.role}
                  onChange={handleEditChange}
                  className="mt-1 w-full border rounded p-2"
                  required
                >
                  <option value="user">User</option>
                  <option value="teacher">Teacher</option>
                  <option value="admin">Admin</option>
                </select>
              </div>
              <div className="mb-4">
                <label className="block text-sm font-medium">
                  Password (leave blank to keep unchanged)
                </label>
                <input
                  type="password"
                  name="password"
                  value={editFormData.password}
                  onChange={handleEditChange}
                  className="mt-1 w-full border rounded p-2"
                />
              </div>
              <div className="flex justify-end space-x-4">
                <button
                  type="button"
                  onClick={closeEditModal}
                  className="px-4 py-2 border rounded"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 bg-cyan-600 text-white rounded"
                >
                  Save
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Add New User Modal */}
      {showAddModal && (
        <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex justify-center items-center">
          <div className="bg-white p-6 rounded shadow-lg w-96">
            <h2 className="text-xl font-bold mb-4">Add New User</h2>
            <form onSubmit={handleAddSubmit}>
              <div className="mb-4">
                <label className="block text-sm font-medium">Name</label>
                <input
                  type="text"
                  name="name"
                  value={addFormData.name}
                  onChange={handleAddChange}
                  className="mt-1 w-full border rounded p-2"
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block text-sm font-medium">Email</label>
                <input
                  type="email"
                  name="email"
                  value={addFormData.email}
                  onChange={handleAddChange}
                  className="mt-1 w-full border rounded p-2"
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block text-sm font-medium">Role</label>
                <select
                  name="role"
                  value={addFormData.role}
                  onChange={handleAddChange}
                  className="mt-1 w-full border rounded p-2"
                  required
                >
                  <option value="user">User</option>
                  <option value="teacher">Teacher</option>
                  <option value="admin">Admin</option>
                </select>
              </div>
              <div className="mb-4">
                <label className="block text-sm font-medium">Password</label>
                <input
                  type="password"
                  name="password"
                  value={addFormData.password}
                  onChange={handleAddChange}
                  className="mt-1 w-full border rounded p-2"
                  required
                />
              </div>
              <div className="flex justify-end space-x-4">
                <button
                  type="button"
                  onClick={closeAddModal}
                  className="px-4 py-2 border rounded"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 bg-cyan-600 text-white rounded"
                >
                  Add User
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  );
};

// Define a custom layout for this page.
AdminUsersPage.getLayout = function getLayout(page: React.ReactElement) {
  return <AdminLayout pageTitle="Users">{page}</AdminLayout>;
};

export default AdminUsersPage;
