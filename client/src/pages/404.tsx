// pages/404.tsx
import React from "react";
import Link from "next/link";

const NotFoundPage: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 dark:bg-zinc-900">
      <h1 className="text-6xl font-bold text-gray-800 dark:text-white">404</h1>
      <p className="mt-4 text-lg text-gray-600 dark:text-gray-300 mb-4">
        Oops! The page you are looking for does not exist.
      </p>
      <Link href="/" passHref>
        <span className="mt-6 cursor-pointer px-4 py-2 bg-indigo-600 text-white rounded hover:bg-indigo-500 transition">
          Go to Home
        </span>
      </Link>
    </div>
  );
};

export default NotFoundPage;
