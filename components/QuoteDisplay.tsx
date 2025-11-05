"use client";

import { useState, useRef } from "react";
import { Quote } from "@/types";

interface QuoteDisplayProps {
  initialQuote: Quote;
  allQuotes: Quote[];
}

export default function QuoteDisplay({ initialQuote, allQuotes }: QuoteDisplayProps) {
  const [currentQuote, setCurrentQuote] = useState(initialQuote);
  const storyRef = useRef<HTMLElement>(null);

  const getRandomQuote = () => {
    const randomIndex = Math.floor(Math.random() * allQuotes.length);
    setCurrentQuote(allQuotes[randomIndex]);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const scrollToStory = () => {
    storyRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <main>
      {/* Hero Quote Banner - Enhanced */}
      <section className="relative min-h-[80vh] bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-500 flex items-center justify-center px-4 pt-8 pb-20 overflow-hidden">
        {/* Decorative Elements */}
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="absolute top-0 left-0 w-96 h-96 bg-white/10 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-3xl translate-x-1/2 translate-y-1/2"></div>

        <div className="relative z-10 max-w-5xl w-full text-center space-y-4">
          <div className="space-y-2">
            <span className="inline-block px-6 py-2 bg-white/20 backdrop-blur-md text-white rounded-full text-sm font-semibold shadow-xl border border-white/30">
              ✨ Quote of the Day
            </span>

            <div className="space-y-0 px-4">
              <div className="inline-block">
                <svg className="w-12 h-12 text-white/40 mx-auto" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M6 17h3l2-4V7H5v6h3zm8 0h3l2-4V7h-6v6h3z" />
                </svg>
              </div>

              <blockquote className="text-xl md:text-3xl lg:text-5xl font-bold text-white italic leading-tight font-serif drop-shadow-2xl">
                {currentQuote.text}
              </blockquote>
            </div>

            <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto font-light px-4">
              {currentQuote.description}
            </p>
          </div>

          <div className="pt-2 space-y-4">
            <p className="text-2xl md:text-3xl font-semibold text-white drop-shadow-lg">
              — {currentQuote.author}
            </p>
            <span className="relative inline-block px-5 py-0.5 bg-white/20 backdrop-blur-md text-white rounded-full text-sm uppercase tracking-wider font-semibold shadow-xl border border-white/30">
              {currentQuote.category}
            </span>
          </div>

          {/* Action Buttons - Enhanced */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-2">
            <button
              onClick={getRandomQuote}
              className="group px-10 py-4 bg-white text-indigo-600 font-bold rounded-full shadow-2xl hover:shadow-white/50 transition-all duration-300 hover:scale-105 border-4 border-white/50 cursor-pointer"
            >
              <span className="flex items-center gap-2">
                🎲 Get Random Quote
              </span>
            </button>
            <button
              onClick={scrollToStory}
              className="px-10 py-4 bg-white/10 backdrop-blur-md hover:bg-white/20 text-white font-bold rounded-full shadow-2xl transition-all duration-300 hover:scale-105 border-2 border-white/50 cursor-pointer"
            >
              <span className="flex items-center gap-2">
                📖 Read Story
              </span>
            </button>
          </div>
        </div>
      </section>

      {/* Story Section - Enhanced */}
      <section ref={storyRef} className="relative bg-gradient-to-b from-gray-50 to-white py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <span className="inline-block px-6 py-2 bg-indigo-100 text-indigo-700 rounded-full text-sm font-semibold mb-4">
              The Story Behind
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Discover the Context
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-indigo-600 to-purple-600 mx-auto rounded-full"></div>
          </div>

          <div className="bg-white rounded-3xl shadow-2xl p-8 md:p-12 border border-gray-100">
            <div className="prose prose-lg max-w-none space-y-6">
              {currentQuote.story.split('\n\n').map((paragraph, index) => (
                <p key={index} className="text-lg text-gray-700 leading-relaxed first-letter:text-5xl first-letter:font-bold first-letter:text-indigo-600 first-letter:mr-2 first-letter:float-left">
                  {paragraph}
                </p>
              ))}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}