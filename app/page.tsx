import { getQuoteOfTheDay, getAllQuotes } from "@/lib/quotes";
import QuoteDisplay from "@/components/QuoteDisplay";

export default function Home() {
  const quoteOfTheDay = getQuoteOfTheDay();
  const allQuotes = getAllQuotes();

  return <QuoteDisplay initialQuote={quoteOfTheDay} allQuotes={allQuotes} />;
}