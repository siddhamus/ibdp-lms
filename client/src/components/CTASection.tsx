import React from "react";
import Link from "next/link";
import { CTAButton } from "./Button";

const CTASection: React.FC = () => {
  return (
    <section className="py-16 bg-gradient-to-r from-cyan-600 to-cyan-400">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold text-white mb-6">
          Ready to Start Your IB Journey?
        </h2>
        <p className="text-xl text-cyan-100 mb-8 max-w-2xl mx-auto">
          Join thousands of students who have achieved excellence in IB English
          Language & Literature through our platform.
        </p>
        <Link href="/register">
          <CTAButton className="bg-white border border-cyan-600 text-cyan-600 px-4 py-2 rounded-md text-sm font-medium hover:bg-cyan-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-cyan-500">
            Start Learning Today
          </CTAButton>
        </Link>
      </div>
    </section>
  );
};

export default CTASection;
