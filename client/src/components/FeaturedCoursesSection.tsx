import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { ChevronRight } from "lucide-react";

interface Course {
  id: number;
  title: string;
  description: string;
  level: string;
  duration: string;
  rating: number;
  students: number;
  image: string;
}

// In a real scenario, you’d fetch this data from an API.
const featuredCourses: Course[] = [
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

const gridVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.2 } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const FeaturedCoursesSection: React.FC = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-3xl font-bold text-center mb-12"
        >
          Featured Courses
        </motion.h2>
        <motion.div
          variants={gridVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 gap-4 sm:mt-16 lg:grid-cols-6 lg:grid-rows-2"
        >
          {/* Big Course Card */}
          {featuredCourses[0] && (
            <motion.div
              variants={cardVariants}
              whileHover={{ scale: 1.03 }}
              className="relative lg:col-span-4 lg:row-span-2"
            >
              <div className="absolute inset-px rounded-lg bg-white" />
              <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(theme(borderRadius.lg)+1px)]">
                <Image
                  alt={featuredCourses[0].title}
                  src={featuredCourses[0].image}
                  width={800}
                  height={320}
                  className="h-80 w-full object-cover object-left"
                />
                <div className="p-10 pt-4">
                  <h3 className="text-sm font-semibold text-cyan-600">
                    {featuredCourses[0].title}
                  </h3>
                  <p className="mt-2 text-lg font-medium tracking-tight text-gray-950">
                    {featuredCourses[0].description}
                  </p>
                </div>
              </div>
              <div className="pointer-events-none absolute inset-px rounded-lg shadow ring-1 ring-black/5" />
            </motion.div>
          )}

          {/* Small Course Card (Index 1) */}
          {featuredCourses[1] && (
            <motion.div
              variants={cardVariants}
              whileHover={{ scale: 1.03 }}
              className="relative lg:col-span-2 lg:row-span-1"
            >
              <div className="absolute inset-px rounded-lg bg-white" />
              <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(theme(borderRadius.lg)+1px)]">
                <Image
                  alt={featuredCourses[1].title}
                  src={featuredCourses[1].image}
                  width={800}
                  height={320}
                  className="h-80 w-full object-cover object-left lg:object-right"
                />
                <div className="p-10 pt-4">
                  <h3 className="text-sm font-semibold text-cyan-600">
                    {featuredCourses[1].title}
                  </h3>
                  <p className="mt-2 text-lg font-medium tracking-tight text-gray-950">
                    {featuredCourses[1].description}
                  </p>
                </div>
              </div>
              <div className="pointer-events-none absolute inset-px rounded-lg shadow ring-1 ring-black/5" />
            </motion.div>
          )}

          {/* Small Course Card (Index 2) */}
          {featuredCourses[2] && (
            <motion.div
              variants={cardVariants}
              whileHover={{ scale: 1.03 }}
              className="relative lg:col-span-2 lg:row-span-1"
            >
              <div className="absolute inset-px rounded-lg bg-white" />
              <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(theme(borderRadius.lg)+1px)]">
                <Image
                  alt={featuredCourses[2].title}
                  src={featuredCourses[2].image}
                  width={800}
                  height={320}
                  className="h-80 w-full object-cover"
                />
                <div className="p-10 pt-4">
                  <h3 className="text-sm font-semibold text-cyan-600">
                    {featuredCourses[2].title}
                  </h3>
                  <p className="mt-2 text-lg font-medium tracking-tight text-gray-950">
                    {featuredCourses[2].description}
                  </p>
                </div>
              </div>
              <div className="pointer-events-none absolute inset-px rounded-lg shadow ring-1 ring-black/5" />
            </motion.div>
          )}
        </motion.div>
        <div className="text-center mt-12">
          <Link href="/courses">
            <span className="inline-flex items-center text-cyan-600 font-semibold hover:text-cyan-700">
              View All Courses
              <ChevronRight className="w-5 h-5 ml-1" />
            </span>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FeaturedCoursesSection;
