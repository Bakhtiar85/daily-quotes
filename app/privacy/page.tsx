import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy - Daily Quotes",
  description: "Read our privacy policy to understand how Daily Quotes collects, uses, and protects your information.",
};

export default function PrivacyPage() {
  return (
    <main className="bg-gray-50 py-16 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Privacy Policy</h1>
          <p className="text-sm text-gray-500 mb-8">Last updated: November 5, 2025</p>

          <div className="space-y-8 text-gray-700">
            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-3">Introduction</h2>
              <p className="leading-relaxed">
                Daily Quotes (&quot;we,&quot; &quot;our,&quot; or &quot;us&quot;) respects your privacy. This Privacy Policy explains how we collect, use, and protect your information when you visit our website.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-3">Information We Collect</h2>
              <p className="leading-relaxed mb-3">
                We collect minimal information to provide you with the best experience:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Usage data (pages visited, time spent on site)</li>
                <li>Device information (browser type, operating system)</li>
                <li>IP address for analytics purposes</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-3">How We Use Your Information</h2>
              <p className="leading-relaxed mb-3">
                We use the collected information to:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Improve our website and user experience</li>
                <li>Analyze site traffic and usage patterns</li>
                <li>Maintain website security</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-3">Cookies</h2>
              <p className="leading-relaxed">
                We may use cookies to enhance your browsing experience. You can disable cookies in your browser settings, though some features may not function properly.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-3">Third-Party Services</h2>
              <p className="leading-relaxed">
                We do not share your personal information with third parties except as required by law or to protect our rights.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-3">Your Rights</h2>
              <p className="leading-relaxed">
                You have the right to access, correct, or delete any personal information we hold about you. Contact us at contact@dailyquotes.com for any privacy-related requests.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-3">Changes to This Policy</h2>
              <p className="leading-relaxed">
                We may update this Privacy Policy from time to time. Changes will be posted on this page with an updated revision date.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-3">Contact Us</h2>
              <p className="leading-relaxed">
                If you have questions about this Privacy Policy, please contact us at contact@dailyquotes.com
              </p>
            </section>
          </div>
        </div>
      </div>
    </main>
  );
}