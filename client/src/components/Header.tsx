import React, { useState, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { Menu, X } from "lucide-react";

interface NavigationItem {
  name: string;
  href: string;
}

interface HeaderProps {
  title: string;
  navigation: NavigationItem[];
}

const Header: React.FC<HeaderProps> = ({ title, navigation }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const router = useRouter();

  // Check authentication status by calling the profile endpoint.
  useEffect(() => {
    const checkAuth = async () => {
      try {
        const res = await fetch(
          `${
            process.env.NEXT_PUBLIC_API_URL || "http://localhost:5000"
          }/api/users/profile`,
          {
            credentials: "include",
            headers: { "Content-Type": "application/json" },
          }
        );
        if (res.ok) {
          setIsAuthenticated(true);
        } else {
          setIsAuthenticated(false);
        }
      } catch {
        setIsAuthenticated(false);
      }
    };
    checkAuth();
  }, []);

  const isActive = (path: string) => router.pathname === path;

  const handleLogout = async () => {
    try {
      const res = await fetch(
        `${
          process.env.NEXT_PUBLIC_API_URL || "http://localhost:5000"
        }/api/auth/logout`,
        {
          method: "POST",
          credentials: "include",
        }
      );
      if (res.ok) {
        setIsAuthenticated(false);
        router.push("/login");
      } else {
        console.error("Logout failed");
      }
    } catch (error) {
      console.error("Logout error:", error);
    }
  };

  return (
    <header className="bg-white border-b border-gray-200 sticky top-0 z-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <Link href="/" className="flex items-center space-x-2">
              <span className="text-2xl font-extrabold text-cyan-600">
                {title}
              </span>
              {/* <span className="hidden md:block text-sm text-gray-500">
                IBMantra
              </span> */}
            </Link>
          </div>
          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8 items-center">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={`inline-flex items-center px-1 pt-1 text-sm font-medium border-b-2 ${
                  isActive(item.href)
                    ? "border-cyan-500 text-gray-900"
                    : "border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700"
                }`}
              >
                {item.name}
              </Link>
            ))}
            <div className="flex space-x-4">
              {isAuthenticated ? (
                <button
                  onClick={handleLogout}
                  className="bg-red-600 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
                >
                  Logout
                </button>
              ) : (
                <>
                  <Link href="/login">
                    <button className="bg-cyan-600 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-cyan-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-cyan-500">
                      Sign In
                    </button>
                  </Link>
                  <Link href="/register">
                    <button className="bg-white border border-cyan-600 text-cyan-600 px-4 py-2 rounded-md text-sm font-medium hover:bg-cyan-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-cyan-500">
                      Register
                    </button>
                  </Link>
                </>
              )}
            </div>
          </nav>
          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-cyan-500"
            >
              {isMobileMenuOpen ? (
                <X className="block h-6 w-6" />
              ) : (
                <Menu className="block h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMobileMenuOpen && (
        <div className="md:hidden">
          <div className="pt-2 pb-3 space-y-1">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={`block pl-3 pr-4 py-2 border-l-4 text-base font-medium ${
                  isActive(item.href)
                    ? "bg-cyan-50 border-cyan-500 text-cyan-700"
                    : "border-transparent text-gray-500 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700"
                }`}
              >
                {item.name}
              </Link>
            ))}
            <div className="mt-4 mx-4 space-y-2">
              {isAuthenticated ? (
                <button
                  onClick={handleLogout}
                  className="w-full bg-red-600 text-white px-4 py-2 rounded-md text-base font-medium hover:bg-red-700"
                >
                  Logout
                </button>
              ) : (
                <>
                  <Link href="/login">
                    <button className="w-full bg-cyan-600 text-white px-4 py-2 rounded-md text-base font-medium hover:bg-cyan-700">
                      Sign In
                    </button>
                  </Link>
                  <Link href="/register">
                    <button className="w-full bg-white border border-cyan-600 text-cyan-600 px-4 py-2 rounded-md text-base font-medium hover:bg-cyan-50">
                      Register
                    </button>
                  </Link>
                </>
              )}
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
