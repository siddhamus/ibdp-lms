//client/src/services/userService.ts

export const API_URL =
  process.env.NEXT_PUBLIC_API_URL || "http://localhost:5001";

export async function deleteUser(id: string): Promise<void> {
  const res = await fetch(`${API_URL}/api/users/${id}`, {
    method: "DELETE",
    credentials: "include",
  });
  if (!res.ok) {
    const errorData = await res.json();
    throw new Error(errorData.message);
  }
}

/**
 * Update a user with given data.
 * @param id - The user id to update.
 * @param updates - An object containing the fields to update.
 */
export async function updateUser(
  id: string,
  updates: { name?: string; email?: string; role?: string; password?: string }
) {
  const res = await fetch(`${API_URL}/api/users/${id}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    credentials: "include",
    body: JSON.stringify(updates),
  });
  if (!res.ok) {
    const errorData = await res.json();
    throw new Error(errorData.message);
  }
  return res.json();
}

export async function createUser(newUserData: {
  name: string;
  email: string;
  role: string;
  password: string;
}) {
  const res = await fetch(`${API_URL}/api/users`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    credentials: "include",
    body: JSON.stringify(newUserData),
  });
  if (!res.ok) {
    const errorData = await res.json();
    throw new Error(errorData.message);
  }
  return res.json();
}
