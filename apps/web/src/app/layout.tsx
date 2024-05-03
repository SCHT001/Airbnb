import Header from "@/components/navbar/Header";
import { Toaster } from "@/components/ui/sonner";
import ProgressBarProvider from "@/providers/ProgressBarProvider";
import QueryProvider from "@/providers/QueryClientProvider";
import { QueryClient } from "@tanstack/react-query";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });
const queryClient = new QueryClient();

export const metadata: Metadata = {
  title: "Airbnb",
  description: "Airbnb clone",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <QueryProvider>
        <body className={`${inter.className}`}>
          <Header></Header>
          <ProgressBarProvider></ProgressBarProvider>
          {children}
          <Toaster position="top-center"></Toaster>
        </body>
      </QueryProvider>
    </html>
  );
}
