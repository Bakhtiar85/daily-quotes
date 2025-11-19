import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 flex-shrink-0">
      <div className="max-w-7xl mx-auto px-4 py-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">

          <div className="text-center md:text-left">
            <Link href={"/"} className="text-white font-bold text-lg">Daily Quotes</Link>
            <p className="text-sm">Inspiration for every day</p>
          </div>

          <div className="flex flex-wrap justify-center gap-4 md:gap-6 text-sm">
            <Link href="/quotes" className="hover:text-white transition">
              All Quotes
            </Link>
            <a
              href="https://linkedin.com/in/yourprofile"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition"
            >
              LinkedIn
            </a>
            <a
              href="https://github.com/yourprofile"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition"
            >
              GitHub
            </a>
            <a
              href="https://twitter.com/yourprofile"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition"
            >
              Twitter
            </a>
            <Link href="/contact" className="hover:text-white transition">
              Contact
            </Link>
            <Link href="/privacy" className="hover:text-white transition">
              Privacy Policy
            </Link>
            <Link href="/terms" className="hover:text-white transition">
              Terms
            </Link>
          </div>
        </div>

        <div className="mt-4 pt-4 border-t border-gray-800 text-center text-xs">
          <p>© {new Date().getFullYear()} Daily Quotes. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}