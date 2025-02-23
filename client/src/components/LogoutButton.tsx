// client/src/components/LogoutButton.tsx
import React, { useState } from "react";
import { useRouter } from "next/router";

interface LogoutButtonProps {
  className?: string;
}

const LogoutButton: React.FC<LogoutButtonProps> = ({ className = "" }) => {
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  const handleLogout = async () => {
    setLoading(true);
    try {
      const res = await fetch(
        `${
          process.env.NEXT_PUBLIC_API_URL || "http://localhost:5000"
        }/api/auth/logout`,
        {
          method: "POST",
          credentials: "include", // ensure cookies are sent/received
        }
      );
      if (res.ok) {
        router.push("/login");
      } else {
        console.error("Failed to log out");
      }
    } catch (error) {
      console.error("Logout error:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <button onClick={handleLogout} disabled={loading} className={className}>
      {loading ? "Logging out..." : "Logout"}
    </button>
  );
};

export default LogoutButton;
