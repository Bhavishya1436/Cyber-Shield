
export default function AboutUs() {
  return (
    <div className="min-h-screen bg-[#f5e9e6] text-black px-10 py-12">
      {/* Top Navbar */}
      <header className="flex justify-between items-center mb-20">
        {/* Logo */}
        <h1 className="text-xl font-bold">RC</h1>

        {/* Nav Links */}
        <nav className="flex space-x-8 text-sm font-medium">
          <a href="#work" className="hover:underline">Work</a>
          <a href="#about" className="hover:underline">About</a>
          <a href="#contact" className="hover:underline">Contact</a>
          <a href="#" className="hover:underline">⌾</a>
        </nav>
      </header>

      {/* WHO WE ARE Section */}
      <section id="about" className="mb-24">
        <h2 className="text-5xl font-serif font-bold mb-6">WHO WE ARE</h2>
        <p className="max-w-3xl text-gray-800 leading-relaxed text-base">
          RyuCreative is a full-service social branding, PR and marketing
          boutique that supports both emerging and established ventures. Based
          in sunny Los Angeles, our agency is female-run and innately creative
          to its core. We believe in the power of leveraging digital marketing
          and PR with the perfect balance of business and creative to elevate
          and grow brands.
        </p>
      </section>

      {/* CLIENTS Section */}
      <section id="clients">
        <h2 className="text-5xl font-serif font-bold mb-4">CLIENTS</h2>
        <p className="text-3xl italic font-serif text-gray-900">
          Past & Present
        </p>
      </section>
    </div>
  );
}
