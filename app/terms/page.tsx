import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms & Conditions - Daily Quotes",
  description: "Read our terms and conditions to understand the rules and guidelines for using Daily Quotes website.",
};

export default function TermsPage() {
  return (
    <main className="bg-gray-50 py-16 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Terms & Conditions</h1>
          <p className="text-sm text-gray-500 mb-8">Last updated: November 5, 2025</p>

          <div className="space-y-8 text-gray-700">
            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-3">Acceptance of Terms</h2>
              <p className="leading-relaxed">
                By accessing and using Daily Quotes, you accept and agree to be bound by the terms and provisions of this agreement. If you do not agree to these terms, please do not use our website.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-3">Use of Content</h2>
              <p className="leading-relaxed mb-3">
                All quotes, stories, and content on this website are provided for informational and inspirational purposes. You may:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Read and enjoy the quotes for personal use</li>
                <li>Share quotes via social media (when feature is available)</li>
                <li>Reference quotes with proper attribution</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-3">Prohibited Uses</h2>
              <p className="leading-relaxed mb-3">
                You agree not to:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Use the website for any unlawful purpose</li>
                <li>Attempt to gain unauthorized access to the website</li>
                <li>Reproduce, duplicate, or copy content for commercial purposes without permission</li>
                <li>Transmit any viruses, malware, or harmful code</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-3">Intellectual Property</h2>
              <p className="leading-relaxed">
                The quotes featured on this website belong to their respective authors. The website design, compilation, and original stories are owned by Daily Quotes and protected by copyright law.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-3">Disclaimer</h2>
              <p className="leading-relaxed">
                The content on Daily Quotes is provided &quot;as is&quot; without warranties of any kind. We do not guarantee the accuracy, completeness, or usefulness of any information on the website.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-3">Limitation of Liability</h2>
              <p className="leading-relaxed">
                Daily Quotes shall not be liable for any indirect, incidental, or consequential damages arising from your use of the website.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-3">Changes to Terms</h2>
              <p className="leading-relaxed">
                We reserve the right to modify these terms at any time. Changes will be effective immediately upon posting to the website.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-3">Contact Information</h2>
              <p className="leading-relaxed">
                For questions about these Terms & Conditions, please contact us at contact@dailyquotes.com
              </p>
            </section>
          </div>
        </div>
      </div>
    </main>
  );
}