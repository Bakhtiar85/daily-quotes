import type { Metadata } from "next";
import "./globals.css";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Daily Quotes - Inspiration Every Day",
  description: "Get inspired with a new quote every day",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="h-screen flex flex-col">
        <div className="flex-1 overflow-y-auto">
          {children}
        </div>
        <Footer />
      </body>
    </html>
  );
}