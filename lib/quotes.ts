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

export function getRandomQuote(): Quote {
  const quotes = getAllQuotes();
  const randomIndex = Math.floor(Math.random() * quotes.length);
  return quotes[randomIndex];
}

export function getQuoteById(id: number): Quote | undefined {
  const quotes = getAllQuotes();
  return quotes.find(quote => quote.id === id);
}