// client/src/utils/auth.ts

export const logout = () => {
  // Remove the JWT token from localStorage
  localStorage.removeItem("token");
};
