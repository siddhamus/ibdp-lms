import React from "react";
import Head from "next/head";
import Header from "../components/Header";
import Footer from "../components/Footer";

interface MainLayoutProps {
  children: React.ReactNode;
  title?: string;
}

const MainLayout: React.FC<MainLayoutProps> = ({
  children,
  title = "ibmantra",
}) => {
  const navigation = [
    { name: "Home", href: "/" },
    { name: "Courses", href: "/courses" },
    { name: "Resources", href: "/resources" },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
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
      <Header title={title} navigation={navigation} />
      <main className="flex-grow w-full">{children}</main>
      <Footer title={title} navigation={navigation} />
    </div>
  );
};

export default MainLayout;
