import type { NextPage } from "next";
import MainLayout from "../layouts/MainLayout";
import Button from "../components/Button";
import { useTheme } from "../context/ThemeContext";
import Link from "next/link";

const Home: NextPage = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <MainLayout title="Home">
      <section className="text-center py-16">
        <h2 className="text-3xl font-bold mb-4">Welcome to ibmantra</h2>
        <p className="mb-8 text-lg">
          Your comprehensive LMS for IBDP English Language & Literature – a hub
          for interactive lessons, curated resources, and peer discussions.
        </p>
        <div className="flex justify-center space-x-4">
          <Button onClick={toggleTheme}>Toggle Theme</Button>
          <Link href="/signup">
            {/* Here we use a span styled as a button for the call-to-action */}
            <span className="inline-block px-6 py-3 bg-blue-500 text-white rounded hover:bg-blue-600 cursor-pointer">
              Get Started
            </span>
          </Link>
        </div>
      </section>
      {/* Additional sections can go here */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h3 className="text-2xl font-bold text-center mb-6">
            Why Choose ibmantra?
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-6 border rounded-lg shadow-sm text-center">
              <h4 className="text-xl font-semibold mb-2">
                Interactive Lessons
              </h4>
              <p className="text-gray-600">
                Engage with multimedia-rich content that brings literature to
                life.
              </p>
            </div>
            <div className="p-6 border rounded-lg shadow-sm text-center">
              <h4 className="text-xl font-semibold mb-2">
                Comprehensive Resources
              </h4>
              <p className="text-gray-600">
                Access curated materials and practice exams to excel in IB
                English.
              </p>
            </div>
            <div className="p-6 border rounded-lg shadow-sm text-center">
              <h4 className="text-xl font-semibold mb-2">
                Collaborative Community
              </h4>
              <p className="text-gray-600">
                Join a network of peers and educators dedicated to your success.
              </p>
            </div>
          </div>
        </div>
      </section>
    </MainLayout>
  );
};

export default Home;
