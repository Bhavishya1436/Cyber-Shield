export default function Contact() {
  return (
    <div className="min-h-screen bg-white text-black px-8 md:px-16 py-12">
      {/* Top Navbar */}
      <header className="flex justify-between items-center mb-16">
        {/* Logo */}
        <h1 className="text-xl font-bold">HydroFlask</h1>

        {/* Nav Links */}
        <nav className="flex space-x-8 text-sm font-medium">
          <a href="#shop" className="hover:underline">SHOP</a>
          <a href="#customize" className="hover:underline">CUSTOMIZE</a>
          <a href="#explore" className="hover:underline">EXPLORE</a>
        </nav>

        {/* Icons */}
        <div className="flex space-x-5 text-xl">
          <button aria-label="search">🔍</button>
          <button aria-label="account">👤</button>
          <button aria-label="cart">🛒</button>
        </div>
      </header>

      {/* Contact Section */}
      <main className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
        {/* Left Content */}
        <div>
          <h2 className="text-3xl font-bold mb-8">Contact Us</h2>

          {/* Chat */}
          <div className="bg-gray-100 p-6 rounded-md mb-8">
            <h3 className="font-semibold mb-2">Chat</h3>
            <p className="text-gray-600">
              Coming Soon you will be able to chat with us.
            </p>
          </div>

          {/* Call Us */}
          <div className="mb-8">
            <h3 className="font-semibold">Call Us</h3>
            <p className="text-blue-600 underline">888-584-9376</p>
            <p className="text-gray-600 text-sm">(8am–8pm ET, M–F)</p>
          </div>

          {/* Write Us */}
          <div>
            <h3 className="font-semibold mb-2">Write Us</h3>
            <p className="text-gray-600 mb-4">
              Jot us a note and we’ll get back to you as quick as possible.
            </p>
            <button className="bg-black text-white px-6 py-2 rounded-md">
              Write to Us
            </button>
          </div>
        </div>

        {/* Right Image */}
        <div className="flex justify-center">
          <img
            src="/images/hydroflask.png"
            alt="Hydro Flask Bottle"
            className="rounded-md object-cover"
          />
        </div>
      </main>
    </div>
  );
}
