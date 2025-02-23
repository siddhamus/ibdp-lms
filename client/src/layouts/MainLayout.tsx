import React from "react";
import Head from "next/head";
import Link from "next/link";

interface MainLayoutProps {
  children: React.ReactNode;
  title?: string;
}

const MainLayout: React.FC<MainLayoutProps> = ({
  children,
  title = "ibmantra",
}) => {
  return (
    <div className="min-h-screen flex flex-col">
      <Head>
        <title>{`${title} | LMS for IBDP English Lang Lit`}</title>

        <meta
          name="description"
          content="ibmantra is a modern LMS designed for IBDP English Language & Literature. Explore interactive lessons, curated resources, and a collaborative community to excel in your IB studies."
        />
        <meta
          name="keywords"
          content="IBDP, English Language, Literature, LMS, ibmantra, education, learning management system, IB English, study"
        />
        <link rel="canonical" href="https://ibmantra.com/" />
      </Head>
      <header className="bg-gray-800 text-white p-4">
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-2xl font-bold">{title}</h1>
          <nav className="space-x-4">
            {/* Use the custom Link component directly without <a> */}
            <Link href="/">Home</Link>
            <Link href="/courses">Courses</Link>
            <Link href="/about">About</Link>
            <Link href="/contact">Contact</Link>
          </nav>
        </div>
      </header>
      <main className="flex-grow container mx-auto p-4">{children}</main>
      <footer className="bg-gray-200 text-center p-4">
        <p>
          &copy; {new Date().getFullYear()} {title}. All rights reserved.
        </p>
      </footer>
    </div>
  );
};

export default MainLayout;
