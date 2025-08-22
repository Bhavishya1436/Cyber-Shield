import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="w-full bg-white shadow-sm">
      <div className="max-w-7xl mx-auto flex items-center justify-between py-4 px-6">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          {/* Replace this with your actual logo image if needed */}
          <div className="w-6 h-6 bg-black rounded-sm"></div>
          <Link href="/" className="hover:text-black">
            Home
          </Link>{" "}
        </div>
        <div className="flex items-center space-x-4">
          {/* Search Bar */}    
            <input
                type="text"
                placeholder="Search..."
                className="border border-gray-300 rounded-md px-3 py-1 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
        </div>

        {/* Icons */}
        <div className="flex space-x-4 text-xl">            
            <button aria-label="search">🔍</button>
            <button aria-label="account">👤</button>
            <button aria-label="cart">🛒</button>
        </div>

        {/* Links */}
        <div className="flex items-center space-x-8 text-gray-700 text-sm font-medium">
          <Link href="/about" className="hover:text-black">
            About us
          </Link>
          <Link href="/contact" className="hover:text-black">
            Services
          </Link>
          <Link href="/" className="hover:text-black">
            Home
          </Link>
          <Link href="/pricing" className="hover:text-black">
            Pricing
          </Link>
          <Link href="/blog" className="hover:text-black">
            Blog
          </Link>

          {/* Button */}
          <button className="border border-gray-400 px-4 py-2 rounded-md hover:bg-gray-100 transition">
            Request a quote
          </button>
          <button>JITHYA IS THE BEST</button>
        </div>
      </div>
    </nav>
  );
}
