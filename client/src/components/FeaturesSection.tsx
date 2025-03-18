import React from "react";
import { motion } from "framer-motion";
import { Book, Users, Award } from "lucide-react";

const gridVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.2 } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const FeaturesSection: React.FC = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-3xl font-bold text-center mb-12"
        >
          Why Choose Our Platform?
        </motion.h2>
        <motion.div
          variants={gridVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          <motion.div
            variants={cardVariants}
            whileHover={{ scale: 1.05 }}
            className="bg-white p-6 rounded-lg shadow-lg"
          >
            <div className="w-12 h-12 bg-cyan-100 rounded-lg flex items-center justify-center mb-4">
              <Book className="w-6 h-6 text-cyan-600" />
            </div>
            <h3 className="text-xl font-semibold mb-3">
              Comprehensive Curriculum
            </h3>
            <p className="text-gray-600">
              Aligned with IB requirements, our courses cover all aspects of the
              Language & Literature syllabus.
            </p>
          </motion.div>
          <motion.div
            variants={cardVariants}
            whileHover={{ scale: 1.05 }}
            className="bg-white p-6 rounded-lg shadow-lg"
          >
            <div className="w-12 h-12 bg-cyan-100 rounded-lg flex items-center justify-center mb-4">
              <Users className="w-6 h-6 text-cyan-600" />
            </div>
            <h3 className="text-xl font-semibold mb-3">Interactive Learning</h3>
            <p className="text-gray-600">
              Engage with peers and instructors through live sessions,
              workshops, and discussions.
            </p>
          </motion.div>
          <motion.div
            variants={cardVariants}
            whileHover={{ scale: 1.05 }}
            className="bg-white p-6 rounded-lg shadow-lg"
          >
            <div className="w-12 h-12 bg-cyan-100 rounded-lg flex items-center justify-center mb-4">
              <Award className="w-6 h-6 text-cyan-600" />
            </div>
            <h3 className="text-xl font-semibold mb-3">Expert Feedback</h3>
            <p className="text-gray-600">
              Receive personalized feedback from experienced IB educators on
              your assignments.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default FeaturesSection;
