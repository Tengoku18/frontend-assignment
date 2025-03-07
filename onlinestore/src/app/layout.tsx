"use client";

import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Provider } from "react-redux";
import { store } from "@/redux/storage/store";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const queryClient = new QueryClient();
  return (
    <html lang="en">
      <QueryClientProvider client={queryClient}>
        <Provider store={store}>
          <body className={inter.className}>
            <ToastContainer />
            <div className="mx-auto max-w-6xl bg-[#FFFAFA]">
              <Navbar />
              {children}
              <Footer />
            </div>
          </body>
        </Provider>
      </QueryClientProvider>
    </html>
  );
}
