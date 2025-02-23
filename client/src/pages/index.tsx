import type { NextPage } from "next";

// import { useTheme } from "../context/ThemeContext";
import Link from "next/link";
import {
  Book,
  Users,
  Award,
  Clock,
  // Play,
  ChevronRight,
  Star,
  Search,
} from "lucide-react";
import { useState } from "react";

// Mock course data - replace with actual data from your API
const featuredCourses = [
  {
    id: 1,
    title: "Paper 1: Guided Analysis",
    description:
      "Master the art of analyzing unseen texts through guided practice and expert feedback.",
    level: "Higher Level",
    duration: "12 weeks",
    rating: 4.8,
    students: 234,
    image: "https://placehold.co/800?text=Hello+World&font=roboto",
  },
  {
    id: 2,
    title: "Global Issues HL",
    description:
      "Explore body of work and global issues through comparative analysis.",
    level: "Higher Level",
    duration: "10 weeks",
    rating: 4.7,
    students: 189,
    image: "https://placehold.co/800?text=Hello+World&font=roboto",
  },
  {
    id: 3,
    title: "Comparative Essay Skills",
    description: "Learn effective comparison techniques for Paper 2 success.",
    level: "Standard Level",
    duration: "8 weeks",
    rating: 4.9,
    students: 156,
    image: "https://placehold.co/800?text=Hello+World&font=roboto",
  },
];

const Home: NextPage = () => {
  // const { theme, toggleTheme } = useTheme();
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-indigo-600 to-blue-500 text-white py-20">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Excel in IB English Language & Literature
              </h1>
              <p className="text-xl mb-8 text-indigo-100">
                Comprehensive learning resources, interactive lessons, and
                expert guidance to help you achieve excellence in your IB
                journey.
              </p>
              <div className="flex space-x-4">
                <Link href="/register">
                  <span className="inline-block px-8 py-4 bg-white text-indigo-600 rounded-lg font-semibold hover:bg-indigo-50 transition duration-300">
                    Get Started Free
                  </span>
                </Link>
                <Link href="/courses">
                  <span className="inline-block px-8 py-4 border-2 border-white text-white rounded-lg font-semibold hover:bg-white hover:text-indigo-600 transition duration-300">
                    Browse Courses
                  </span>
                </Link>
              </div>
            </div>
            <div className="hidden md:block">
              <img
                src="https://placehold.co/600x400"
                alt="Students learning"
                className="rounded-lg shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-indigo-600 mb-2">
                5000+
              </div>
              <div className="text-gray-600">Active Students</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-indigo-600 mb-2">50+</div>
              <div className="text-gray-600">Expert Teachers</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-indigo-600 mb-2">
                100+
              </div>
              <div className="text-gray-600">Course Modules</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-indigo-600 mb-2">95%</div>
              <div className="text-gray-600">Success Rate</div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12">
            Why Choose Our Platform?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center mb-4">
                <Book className="w-6 h-6 text-indigo-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3">
                Comprehensive Curriculum
              </h3>
              <p className="text-gray-600">
                Aligned with IB requirements, our courses cover all aspects of
                Language & Literature syllabus.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center mb-4">
                <Users className="w-6 h-6 text-indigo-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3">
                Interactive Learning
              </h3>
              <p className="text-gray-600">
                Engage with peers and instructors through discussions,
                workshops, and live sessions.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center mb-4">
                <Award className="w-6 h-6 text-indigo-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Expert Feedback</h3>
              <p className="text-gray-600">
                Receive personalized feedback from experienced IB educators on
                your assignments.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Course Browser Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-3xl font-bold">Browse Courses</h2>
            <div className="relative">
              <input
                type="text"
                placeholder="Search courses..."
                className="pl-10 pr-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <Search className="absolute left-3 top-2.5 w-5 h-5 text-gray-400" />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featuredCourses.map((course) => (
              <div
                key={course.id}
                className="bg-white rounded-lg shadow-lg overflow-hidden border border-gray-200"
              >
                <img
                  src={course.image}
                  alt={course.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm font-medium text-indigo-600">
                      {course.level}
                    </span>
                    <div className="flex items-center">
                      <Star className="w-4 h-4 text-yellow-400 fill-current" />
                      <span className="ml-1 text-sm text-gray-600">
                        {course.rating}
                      </span>
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{course.title}</h3>
                  <p className="text-gray-600 mb-4">{course.description}</p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center text-sm text-gray-500">
                      <Clock className="w-4 h-4 mr-1" />
                      {course.duration}
                    </div>
                    <div className="flex items-center text-sm text-gray-500">
                      <Users className="w-4 h-4 mr-1" />
                      {course.students} students
                    </div>
                  </div>
                  <Link href={`/courses/${course.id}`}>
                    <span className="mt-4 inline-block w-full text-center px-6 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition duration-300">
                      View Course
                    </span>
                  </Link>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link href="/courses">
              <span className="inline-flex items-center text-indigo-600 font-semibold hover:text-indigo-700">
                View All Courses
                <ChevronRight className="w-5 h-5 ml-1" />
              </span>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-indigo-600">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">
            Ready to Start Your IB Journey?
          </h2>
          <p className="text-xl text-indigo-100 mb-8 max-w-2xl mx-auto">
            Join thousands of students who have achieved excellence in IB
            English Language & Literature through our platform.
          </p>
          <Link href="/register">
            <span className="inline-block px-8 py-4 bg-white text-indigo-600 rounded-lg font-semibold hover:bg-indigo-50 transition duration-300">
              Start Learning Today
            </span>
          </Link>
        </div>
      </section>
    </>
  );
};

export default Home;
