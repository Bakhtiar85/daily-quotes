import Link from "next/link";

export default function Header() {
  return (
    <header className="bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
        <Link href="/" className="text-2xl font-bold text-indigo-600">
          Daily Quotes
        </Link>
        
        <nav className="flex gap-6">
          <Link href="/" className="text-gray-600 hover:text-indigo-600 transition">
            Home
          </Link>
          <Link href="/about" className="text-gray-600 hover:text-indigo-600 transition">
            About
          </Link>
        </nav>
      </div>
    </header>
  );
}