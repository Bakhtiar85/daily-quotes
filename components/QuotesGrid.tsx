"use client";

import { useState } from "react";
import { Quote } from "@/types";

interface QuotesGridProps {
  quotes: Quote[];
}

export default function QuotesGrid({ quotes }: QuotesGridProps) {
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  
  const categories = Array.from(new Set(quotes.map(q => q.category)));
  
  const filteredQuotes = selectedCategory === "all" 
    ? quotes 
    : quotes.filter(q => q.category === selectedCategory);

  return (
    <>
      {/* Categories Filter */}
      <div className="flex flex-wrap justify-center gap-3 mb-8">
        <button
          onClick={() => setSelectedCategory("all")}
          className={`px-4 py-2 rounded-full text-sm font-medium shadow-sm transition-colors ${
            selectedCategory === "all"
              ? "bg-indigo-600 text-white"
              : "bg-white text-gray-700 border border-gray-200 hover:bg-gray-50"
          }`}
        >
          All ({quotes.length})
        </button>
        {categories.map(category => {
          const count = quotes.filter(q => q.category === category).length;
          return (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-4 py-2 rounded-full text-sm font-medium shadow-sm capitalize transition-colors ${
                selectedCategory === category
                  ? "bg-indigo-600 text-white"
                  : "bg-white text-gray-700 border border-gray-200 hover:bg-gray-50"
              }`}
            >
              {category} ({count})
            </button>
          );
        })}
      </div>

      {/* Quotes Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 px-2 py-2 shadow-2xl max-h-60 overflow-y-auto">
        {filteredQuotes.map(quote => (
          <div key={quote.id} className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition-shadow">
            <blockquote className="text-lg font-serif text-gray-800 italic mb-4">
              &quot;{quote.text}&quot;
            </blockquote>
            <p className="text-sm text-gray-600 mb-3">{quote.description}</p>
            <div className="flex items-center justify-between">
              <p className="text-sm font-semibold text-gray-900">— {quote.author}</p>
              <span className="px-3 py-1 bg-gray-100 text-gray-600 rounded-full text-xs uppercase">
                {quote.category}
              </span>
            </div>
          </div>
        ))}
      </div>

      {filteredQuotes.length === 0 && (
        <div className="text-center py-12">
          <p className="text-gray-500 text-lg">No quotes found in this category.</p>
        </div>
      )}
    </>
  );
}