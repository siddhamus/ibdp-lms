import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";

interface Course {
  _id: string;
  title: string;
  description: string;
  level: string;
  duration: string;
  rating: number;
  students: number;
  image: string;
}

const Courses = () => {
  const [courses, setCourses] = useState<Course[]>([]);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchCourses = async () => {
      try {
        const res = await fetch(
          `${
            process.env.NEXT_PUBLIC_API_URL || "http://localhost:5000"
          }/api/courses`
        );
        const data = await res.json();
        if (!res.ok) {
          setError(data.message || "Failed to load courses.");
        } else {
          setCourses(data.data);
        }
      } catch {
        setError("Network error. Please try again.");
      }
    };

    fetchCourses();
  }, []);

  return (
    <div className="max-w-6xl mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">Available Courses</h1>
      {error && <p className="text-red-600 mb-4">{error}</p>}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {courses.map((course) => (
          <div key={course._id} className="bg-white rounded-lg shadow p-4">
            <div className="relative w-full h-40 mb-4">
              <Image
                src={course.image}
                alt={course.title}
                className="rounded-md object-cover"
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
            </div>
            <h2 className="text-xl font-semibold">{course.title}</h2>
            <p className="text-gray-600">{course.description}</p>
            <div className="mt-4">
              <Link
                href={`/courses/${course._id}`}
                className="text-cyan-600 hover:underline"
              >
                View Course Details
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Courses;
