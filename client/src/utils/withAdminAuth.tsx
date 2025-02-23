// client/src/utils/withAdminAuth.tsx
import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";

export function withAdminAuth<P extends object>(
  WrappedComponent: React.ComponentType<P>
) {
  const AdminAuthWrapper: React.FC<P> = (props) => {
    const router = useRouter();
    const [loading, setLoading] = useState(true);

    useEffect(() => {
      const checkAdmin = async () => {
        try {
          // Fetch the user profile using the HTTP-only cookie
          const res = await fetch(
            `${
              process.env.NEXT_PUBLIC_API_URL || "http://localhost:5000"
            }/api/users/profile`,
            {
              credentials: "include", // include cookies
            }
          );
          if (!res.ok) {
            // If the request fails, redirect to login
            router.push("/login");
            return;
          }
          const data = await res.json();
          // Check if the user's role is admin
          if (data.user && data.user.role === "admin") {
            setLoading(false);
          } else {
            router.push("/403"); // or any forbidden page
          }
        } catch (err) {
          router.push("/login");
        }
      };
      checkAdmin();
    }, [router]);

    if (loading) {
      return <div>Loading...</div>;
    }
    return <WrappedComponent {...props} />;
  };

  return AdminAuthWrapper;
}
