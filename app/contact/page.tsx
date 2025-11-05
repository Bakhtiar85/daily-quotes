import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us - Daily Quotes",
  description: "Get in touch with Daily Quotes. We'd love to hear your feedback, suggestions, or answer any questions you may have.",
};

export default function ContactPage() {
  return (
    <main className="bg-gray-50 py-16 px-4">
      <div className="max-w-3xl mx-auto">
        <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-6">Contact Us</h1>
          
          <p className="text-lg text-gray-700 mb-8">
            Have questions, suggestions, or feedback? We&apos;d love to hear from you!
          </p>

          <div className="space-y-6">
            <div>
              <h2 className="text-xl font-semibold text-gray-900 mb-2">Email</h2>
              <a href="mailto:contact@dailyquotes.com" className="text-indigo-600 hover:text-indigo-700">
                contact@dailyquotes.com
              </a>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-gray-900 mb-2">Social Media</h2>
              <div className="flex gap-4">
                <a href="https://linkedin.com/in/yourprofile" target="_blank" rel="noopener noreferrer" className="text-indigo-600 hover:text-indigo-700">
                  LinkedIn
                </a>
                <a href="https://github.com/yourprofile" target="_blank" rel="noopener noreferrer" className="text-indigo-600 hover:text-indigo-700">
                  GitHub
                </a>
                <a href="https://twitter.com/yourprofile" target="_blank" rel="noopener noreferrer" className="text-indigo-600 hover:text-indigo-700">
                  Twitter
                </a>
              </div>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-gray-900 mb-2">Response Time</h2>
              <p className="text-gray-700">
                We typically respond within 24-48 hours during business days.
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}