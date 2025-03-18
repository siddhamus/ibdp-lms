import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import Image from "next/image";

const heroTextVariants = {
  hidden: { opacity: 0, x: -50 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.8 } },
};

const heroImageVariants = {
  hidden: { opacity: 0, x: 50 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.8 } },
};

const HeroSection: React.FC = () => {
  return (
    <section
      className="bg-gradient-to-r from-cyan-600 to-cyan-400 text-white py-20 overflow-hidden"
      style={{ borderBottomLeftRadius: "100px" }}
    >
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={heroTextVariants}
          >
            <h1 className="text-3xl md:text-4xl font-bold mb-6">
              Excel in IB English Language & Literature
            </h1>
            <p className="text-xl mb-8 text-cyan-100">
              Comprehensive learning resources, interactive lessons, and expert
              guidance to help you achieve excellence in your IB journey.
            </p>
            <div className="flex space-x-4">
              <Link href="/register">
                <span className="inline-block px-8 py-4 bg-white text-cyan-600 rounded-lg font-semibold hover:bg-cyan-500 hover:text-white transition duration-300">
                  Get Started Free
                </span>
              </Link>
              <Link href="/courses">
                <span className="inline-block px-8 py-4 border-2 border-white text-white rounded-lg font-semibold hover:bg-white hover:text-cyan-600 transition duration-300">
                  Browse Courses
                </span>
              </Link>
            </div>
          </motion.div>
          <motion.div
            className="hidden md:block"
            initial="hidden"
            animate="visible"
            variants={heroImageVariants}
          >
            <Image
              src="/herosection.svg"
              alt="Students learning"
              width={600}
              height={400}
              className="rounded-2xl shadow-xl"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
