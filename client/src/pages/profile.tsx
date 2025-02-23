import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";

interface UserProfile {
  name: string;
  email: string;
  role?: string;
  createdAt?: string;
}

const Profile = () => {
  const [profile, setProfile] = useState<UserProfile | null>(null);
  const [error, setError] = useState("");
  const router = useRouter();

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      // If not authenticated, redirect to login
      router.push("/login");
      return;
    }

    // Fetch the user profile from your backend
    const fetchProfile = async () => {
      try {
        const res = await fetch(
          `${
            process.env.NEXT_PUBLIC_API_URL || "http://localhost:5000"
          }/api/users/profile`,
          {
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${token}`,
            },
          }
        );
        const data = await res.json();
        if (!res.ok) {
          setError(data.message || "Failed to load profile.");
        } else {
          setProfile(data.user);
        }
      } catch (err) {
        setError("Network error. Please try again.");
      }
    };

    fetchProfile();
  }, [router]);

  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-red-600">{error}</p>
      </div>
    );
  }

  if (!profile) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p>Loading profile...</p>
      </div>
    );
  }

  return (
    <div className="max-w-3xl mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">My Profile</h1>
      <div className="bg-white p-6 rounded-lg shadow">
        <p>
          <strong>Name:</strong> {profile.name}
        </p>
        <p>
          <strong>Email:</strong> {profile.email}
        </p>
        {profile.role && (
          <p>
            <strong>Role:</strong> {profile.role}
          </p>
        )}
        {profile.createdAt && (
          <p>
            <strong>Member since:</strong>{" "}
            {new Date(profile.createdAt).toLocaleDateString()}
          </p>
        )}
      </div>
    </div>
  );
};

export default Profile;
