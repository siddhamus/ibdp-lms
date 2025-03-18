import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
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
  // Additional fields like syllabus, modules, etc.
}

const CourseDetail = () => {
  const router = useRouter();
  const { id } = router.query;
  const [course, setCourse] = useState<Course | null>(null);
  const [error, setError] = useState("");

  useEffect(() => {
    if (!id) return;
    const fetchCourse = async () => {
      try {
        const res = await fetch(
          `${
            process.env.NEXT_PUBLIC_API_URL || "http://localhost:5000"
          }/api/courses/${id}`
        );
        const data = await res.json();
        if (!res.ok) {
          setError(data.message || "Failed to load course details.");
        } else {
          setCourse(data.data);
        }
      } catch {
        setError("Network error. Please try again.");
      }
    };

    fetchCourse();
  }, [id]);

  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-red-600">{error}</p>
      </div>
    );
  }

  if (!course) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p>Loading course details...</p>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto p-4">
      <div className="relative w-full h-64 mb-4">
        <Image
          src={course.image}
          alt={course.title}
          className="rounded-md object-cover"
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          priority
        />
      </div>
      <h1 className="text-3xl font-bold mb-2">{course.title}</h1>
      <p className="text-gray-700 mb-4">{course.description}</p>
      <div className="flex space-x-4">
        <span className="text-cyan-600 font-semibold">{course.level}</span>
        <span className="text-gray-600">{course.duration}</span>
      </div>
      {/* Further details like syllabus or assignments can be added here */}
    </div>
  );
};

export default CourseDetail;
