// client/src/pages/admin/index.tsx
import React from "react";
import { NextPageWithLayout } from "../../pages/_app"; // Adjust path as needed
import AdminLayout from "../../components/admin/AdminLayout";
import AdminDashboardHeader from "../../components/admin/AdminDashboardHeader";
import { PrimaryButton, SecondaryButton } from "../../components/Button";
// import { Heading } from "@/components/heading";
import Link from "next/link";
import {
  UserGroupIcon,
  BookOpenIcon,
  CurrencyDollarIcon,
  ClipboardDocumentIcon,
  CheckCircleIcon,
  TrophyIcon,
} from "@heroicons/react/24/outline";
import useSWR from "swr";

const API_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:5001";

const fetcher = (url: string) =>
  fetch(url, { credentials: "include" }).then((res) => res.json());

const AdminDashboardPage: NextPageWithLayout = () => {
  // Fetch the total number of users using the new endpoint.
  const { data: countData, error: countError } = useSWR<{ count: number }>(
    `${API_URL}/api/users/count`,
    fetcher
  );

  // Handle loading/error states for user count
  let totalUsers = 0;
  if (countError) {
    console.error("Error fetching user count:", countError);
  } else if (countData) {
    totalUsers = countData.count;
  }

  const activeCourses = 12;
  const monthlyRevenue = "$5,100";
  const totalEnrollments = 5678;
  const courseCompletionRate = "75%";
  const gamificationPoints = 9800;

  // Dummy leaderboard data for gamification
  const leaderboard = [
    { id: "1", name: "Alice Johnson", points: 2300 },
    { id: "2", name: "Bob Smith", points: 2100 },
    { id: "3", name: "Charlie Davis", points: 1800 },
  ];

  // A helper component for a stat card
  const StatCard = ({
    title,
    value,
    icon: Icon,
    bgClass = "bg-white",
  }: {
    title: string;
    value: string | number;
    icon: React.ElementType;
    bgClass?: string;
  }) => (
    <div className={`rounded-lg shadow-md p-6 ${bgClass}`}>
      <div className="flex items-center">
        <div className="p-3 bg-cyan-100 rounded-full">
          <Icon className="h-6 w-6 text-cyan-600" />
        </div>
        <div className="ml-4">
          <h3 className="text-lg font-semibold text-gray-700">{title}</h3>
          <p className="mt-1 text-2xl font-bold text-gray-900">{value}</p>
        </div>
      </div>
    </div>
  );

  return (
    <>
      <AdminDashboardHeader title="Admin Dashboard" subtitle="Quick Overview" />

      {/* Stats Section */}
      <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        <StatCard title="Total Users" value={totalUsers} icon={UserGroupIcon} />
        <StatCard
          title="Active Courses"
          value={activeCourses}
          icon={BookOpenIcon}
        />
        <StatCard
          title="Monthly Revenue"
          value={monthlyRevenue}
          icon={CurrencyDollarIcon}
          bgClass="bg-white"
        />
        <StatCard
          title="Total Enrollments"
          value={totalEnrollments}
          icon={ClipboardDocumentIcon}
        />
        <StatCard
          title="Completion Rate"
          value={courseCompletionRate}
          icon={CheckCircleIcon}
        />
        <StatCard
          title="Gamification Points"
          value={gamificationPoints}
          icon={TrophyIcon}
        />
      </div>

      {/* Leaderboard / Gamification Section */}
      <div className="mt-12">
        <h1>Top Gamified Learners</h1>
        <div className="bg-white rounded-lg shadow overflow-x-auto mt-4">
          <table className="min-w-full table-auto">
            <thead className="bg-gray-50">
              <tr className="border-b">
                <th className="px-4 py-2 text-left text-sm font-semibold text-gray-600">
                  Rank
                </th>
                <th className="px-4 py-2 text-left text-sm font-semibold text-gray-600">
                  Name
                </th>
                <th className="px-4 py-2 text-right text-sm font-semibold text-gray-600">
                  Points
                </th>
              </tr>
            </thead>
            <tbody className="divide-y">
              {leaderboard.map((user, index) => (
                <tr key={user.id}>
                  <td className="px-4 py-2">{index + 1}</td>
                  <td className="px-4 py-2">{user.name}</td>
                  <td className="px-4 py-2 text-right">{user.points}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Quick Actions */}
      <div className="mt-12 flex flex-wrap gap-4">
        <Link href="/admin/courses/create">
          <PrimaryButton>Create New Course</PrimaryButton>
        </Link>
        <Link href="/admin/users">
          <SecondaryButton>Manage Users</SecondaryButton>
        </Link>
        <Link href="/admin/reports">
          <SecondaryButton>View Reports</SecondaryButton>
        </Link>
      </div>
    </>
  );
};

AdminDashboardPage.getLayout = function getLayout(page: React.ReactElement) {
  return <AdminLayout pageTitle="Dashboard">{page}</AdminLayout>;
};

export default AdminDashboardPage;
