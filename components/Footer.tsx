import Link from "next/link";

export default function Footer() {
  return (
    <footer className="fixed bottom-0 z-50 w-full bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          
          <div className="text-center md:text-left">
            <h3 className="text-white font-bold text-lg mb-2">Daily Quotes</h3>
            <p className="text-sm">Inspiration for every day</p>
          </div>

          <div className="flex gap-6">
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
          </div>
        </div>

        <div className="mt-6 pt-6 border-t border-gray-800 text-center text-sm">
          <p>© {new Date().getFullYear()} Daily Quotes. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}