import { Quote } from "@/types";
import { supabase } from "@/lib/supabase";

export async function getAllQuotes(): Promise<Quote[]> {
  try {
    const { data, error } = await supabase
      .from("quotes")
      .select("*")
      .order("id", { ascending: true });

    if (error) throw error;
    return data || [];
  } catch (error) {
    console.error("Error fetching quotes:", error);
    return [];
  }
}

export async function getQuoteOfTheDay(): Promise<Quote | null> {
  const quotes = await getAllQuotes();
  
  if (quotes.length === 0) return null;
  
  const dayOfYear = Math.floor(
    (Date.now() - new Date(new Date().getFullYear(), 0, 0).getTime()) / 86400000
  );
  const index = dayOfYear % quotes.length;
  return quotes[index];
}

export async function getRandomQuote(): Promise<Quote | null> {
  const quotes = await getAllQuotes();
  
  if (quotes.length === 0) return null;
  
  const randomIndex = Math.floor(Math.random() * quotes.length);
  return quotes[randomIndex];
}

export async function getQuoteById(id: number): Promise<Quote | null> {
  try {
    const { data, error } = await supabase
      .from("quotes")
      .select("*")
      .eq("id", id)
      .single();

    if (error) throw error;
    return data;
  } catch (error) {
    console.error("Error fetching quote:", error);
    return null;
  }
}