// File: pages/awareness.jsx

export default function Awareness() {
  const news = [
    {
      title:
        "India - Monsoon rains, update (media, IMD) (ECHO Daily Flash of 20 August 2025)",
      description:
        "- Very heavy monsoon rainfall, strong winds and lightning have been affecting western India (in part...",
    },
    {
      title:
        "Asia-Pacific Monsoon Outlook: Rainfall Weekly updates (As of 20 August 2025)",
      description:
        "## **Asia-Pacific: Monsoon Outlook – Weekly Update (18-24 August 2025)** NASA’s Integrated Multi-sa...",
    },
    {
      title:
        "Seasonal precipitation predictions in the Desert Locust summer/winter breeding areas (September 2025–February 2026)",
      description:
        "Persistant above-normal rainfall is expected through late August and September across the northern S...",
    },
    {
      title:
        "India - Flash floods (media, IMD) (ECHO Daily Flash of 18 August 2025)",
      description:
        "- Very heavy rainfall affected northern India (mainly the Jammu and Kashmir state) on 14 August, cau...",
    },
  ];

  return (
    <div className="bg-black min-h-screen py-10 px-6">
      <h1 className="text-white text-3xl font-bold text-center mb-10">
        Latest News from South Asia
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
        {news.map((item, index) => (
          <div
            key={index}
            className="bg-white rounded-xl shadow-lg p-6 flex flex-col justify-between"
          >
            <div>
              <h2 className="text-xl font-bold mb-3">{item.title}</h2>
              <p className="text-gray-700 mb-4">{item.description}</p>
            </div>
            <button className="bg-[#0B1221] hover:bg-[#1a2133] text-white px-4 py-2 rounded-md w-fit">
              Read More
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
