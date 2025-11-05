import { getQuoteOfTheDay } from "@/lib/quotes";

export default function Home() {
  const quote = getQuoteOfTheDay();

  return (
    <main>
      {/* Hero Quote Banner */}
      <section className="min-h-[70vh] bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 flex items-center justify-center px-4 py-16">
        <div className="max-w-4xl w-full text-center space-y-8">
          <span className="inline-block px-6 py-2 bg-white/80 backdrop-blur-sm text-indigo-700 rounded-full text-sm font-semibold shadow-md">
            Quote of the Day
          </span>
          
          <blockquote className="text-3xl md:text-5xl font-serif text-gray-900 italic leading-relaxed">
            &quot;{quote.text}&quot;
          </blockquote>
          
          <p className="text-lg md:text-xl text-gray-700 max-w-2xl mx-auto">
            {quote.description}
          </p>
          
          <div className="pt-6">
            <p className="text-2xl font-semibold text-gray-900">— {quote.author}</p>
            <span className="inline-block mt-3 px-4 py-2 bg-white/80 backdrop-blur-sm text-gray-700 rounded-full text-sm uppercase tracking-wide shadow-sm">
              {quote.category}
            </span>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="bg-white py-16 px-4">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8 text-center">
            The Story Behind
          </h2>
          <div className="space-y-6">
            {quote.story.split('\n\n').map((paragraph, index) => (
              <p key={index} className="text-lg text-gray-700 leading-relaxed">
                {paragraph}
              </p>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}