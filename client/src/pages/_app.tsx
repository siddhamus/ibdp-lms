// pages/_app.tsx
import "../styles/globals.css";
import type { AppProps } from "next/app";
import type { NextPage } from "next";
import { ThemeProvider } from "../context/ThemeContext";
import MainLayout from "../layouts/MainLayout";
import React from "react";

export type NextPageWithLayout = NextPage & {
  getLayout?: (page: React.ReactElement) => React.ReactNode;
};

interface AppPropsWithLayout extends AppProps {
  Component: NextPageWithLayout;
}

function MyApp({ Component, pageProps }: AppPropsWithLayout) {
  // Use the page's getLayout function if provided; otherwise, wrap with MainLayout
  const getLayout =
    Component.getLayout ||
    ((page: React.ReactElement) => <MainLayout>{page}</MainLayout>);

  return (
    <ThemeProvider>{getLayout(<Component {...pageProps} />)}</ThemeProvider>
  );
}

export default MyApp;
