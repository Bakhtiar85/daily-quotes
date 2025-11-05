import { Quote } from "@/types";
import quotesData from "@/data/quotes.json";

export function getAllQuotes(): Quote[] {
  return quotesData as Quote[];
}

export function getQuoteOfTheDay(): Quote {
  const quotes = getAllQuotes();
  const dayOfYear = Math.floor(
    (Date.now() - new Date(new Date().getFullYear(), 0, 0).getTime()) / 86400000
  );
  const index = dayOfYear % quotes.length;
  return quotes[index];
}