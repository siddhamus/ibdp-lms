import React from "react";
import Link from "next/link";
import { useTheme } from "../context/ThemeContext";

interface FooterProps {
  title: string;
  navigation: { name: string; href: string }[];
}

const Footer: React.FC<FooterProps> = ({ title, navigation }) => {
  const { theme } = useTheme();

  return (
    <footer
      className={`border-t ${
        theme === "light"
          ? "bg-white border-gray-200"
          : "bg-gray-900 border-gray-700"
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Branding & Description */}
          <div className="col-span-1 md:col-span-2">
            <h2
              className={`text-lg font-semibold ${
                theme === "light" ? "text-gray-900" : "text-gray-100"
              } mb-4`}
            >
              {title}
            </h2>
            <p
              className={`max-w-md ${
                theme === "light" ? "text-gray-600" : "text-gray-400"
              }`}
            >
              Empowering IB students with comprehensive learning resources and
              tools for excellence in English Language & Literature.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3
              className={`text-sm font-semibold tracking-wider uppercase mb-4 ${
                theme === "light" ? "text-gray-900" : "text-gray-200"
              }`}
            >
              Quick Links
            </h3>
            <ul className="space-y-4">
              {navigation.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className={`text-base ${
                      theme === "light"
                        ? "text-gray-500 hover:text-gray-900"
                        : "text-gray-400 hover:text-gray-200"
                    }`}
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Section */}
          <div>
            <h3
              className={`text-sm font-semibold tracking-wider uppercase mb-4 ${
                theme === "light" ? "text-gray-900" : "text-gray-200"
              }`}
            >
              Contact Us
            </h3>
            <ul className="space-y-4">
              <li
                className={`text-base ${
                  theme === "light" ? "text-gray-500" : "text-gray-400"
                }`}
              >
                Email: support@ibmantra.com
              </li>
              <li
                className={`text-base ${
                  theme === "light" ? "text-gray-500" : "text-gray-400"
                }`}
              >
                Phone: +1 (555) 123-4567
              </li>
            </ul>
          </div>
        </div>

        {/* Footer Bottom */}
        <div
          className={`mt-8 pt-8 border-t ${
            theme === "light" ? "border-gray-200" : "border-gray-700"
          }`}
        >
          <p
            className={`text-base text-center ${
              theme === "light" ? "text-gray-400" : "text-gray-500"
            }`}
          >
            &copy; {new Date().getFullYear()} {title}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
