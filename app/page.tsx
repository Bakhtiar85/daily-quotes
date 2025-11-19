import { getQuoteOfTheDay, getAllQuotes } from "@/lib/quotes";
import QuoteDisplay from "@/components/QuoteDisplay";

export default async function Home() {
  const quoteOfTheDay = await getQuoteOfTheDay();
  const allQuotes = await getAllQuotes();

  if (!quoteOfTheDay || allQuotes.length === 0) {
    return (
      <main className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">No Quotes Available</h1>
          <p className="text-gray-600">Please add quotes from the admin panel.</p>
        </div>
      </main>
    );
  }

  return <QuoteDisplay initialQuote={quoteOfTheDay} allQuotes={allQuotes} />;
}