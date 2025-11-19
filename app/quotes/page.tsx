import type { Metadata } from "next";
import { getAllQuotes } from "@/lib/quotes";
import QuotesGrid from "@/components/QuotesGrid";
import Link from "next/link";

export const metadata: Metadata = {
  title: "All Quotes - Daily Quotes",
  description: "Browse our complete collection of inspirational quotes from great thinkers, leaders, and philosophers.",
};

export default async function AllQuotesPage() {
  const quotes = await getAllQuotes();

  if (quotes.length === 0) {
    return (
      <main className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">No Quotes Available</h1>
          <p className="text-gray-600 mb-6">Please add quotes from the admin panel.</p>
          <Link
            href="/"
            className="inline-block px-8 py-3 bg-indigo-600 hover:bg-indigo-700 text-white font-semibold rounded-full shadow-lg transition-colors"
          >
            Back to Home
          </Link>
        </div>
      </main>
    );
  }

  return (
    <main className="bg-gray-50 py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">All Quotes</h1>
          <p className="text-lg text-gray-600">Browse our complete collection of inspirational quotes</p>
        </div>

        <QuotesGrid quotes={quotes} />

        <div className="text-center mt-12">
          <Link
            href="/"
            className="inline-block px-8 py-3 bg-indigo-600 hover:bg-indigo-700 text-white font-semibold rounded-full shadow-lg transition-colors"
          >
            Back to Home
          </Link>
        </div>
      </div>
    </main>
  );
}