import { supabase } from "@/lib/supabase";

export const quotesController = {
  // Get all quotes
  async getAllQuotes() {
    const { data, error } = await supabase
      .from("quotes")
      .select("*")
      .order("id", { ascending: true });

    if (error) throw error;
    return data;
  },

  // Get single quote by ID
  async getQuoteById(id: number) {
    const { data, error } = await supabase
      .from("quotes")
      .select("*")
      .eq("id", id)
      .single();

    if (error) throw error;
    return data;
  },

  // Create new quote
  async createQuote(quoteData: {
    text: string;
    author: string;
    category: string;
    description: string;
    story: string;
  }) {
    const { data, error } = await supabase
      .from("quotes")
      .insert([quoteData])
      .select()
      .single();

    if (error) throw error;
    return data;
  },

  // Update quote
  async updateQuote(id: number, quoteData: Partial<{
    text: string;
    author: string;
    category: string;
    description: string;
    story: string;
  }>) {
    const { data, error } = await supabase
      .from("quotes")
      .update({ ...quoteData, updated_at: new Date().toISOString() })
      .eq("id", id)
      .select()
      .single();

    if (error) throw error;
    return data;
  },

  // Delete quote
  async deleteQuote(id: number) {
    const { error } = await supabase
      .from("quotes")
      .delete()
      .eq("id", id);

    if (error) throw error;
    return { success: true };
  },
};