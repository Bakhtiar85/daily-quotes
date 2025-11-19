import type { Metadata } from "next";
import "./globals.css";
import LayoutWrapper from "@/components/LayoutWrapper";

export const metadata: Metadata = {
  title: "Daily Quotes - Inspirational Quotes Every Day",
  description: "Discover a new inspirational quote every day with thoughtful stories behind them. Get motivated with wisdom from great thinkers, leaders, and philosophers.",
  keywords: ["daily quotes", "inspirational quotes", "motivational quotes", "quote of the day", "inspiration", "wisdom"],
  authors: [{ name: "Daily Quotes" }],
  creator: "Daily Quotes",
  publisher: "Daily Quotes",
  openGraph: {
    title: "Daily Quotes - Inspirational Quotes Every Day",
    description: "Discover a new inspirational quote every day with thoughtful stories behind them.",
    url: "https://dailyquotes.com",
    siteName: "Daily Quotes",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Daily Quotes - Inspirational Quotes Every Day",
    description: "Discover a new inspirational quote every day with thoughtful stories behind them.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <LayoutWrapper>{children}</LayoutWrapper>
      </body>
    </html>
  );
}