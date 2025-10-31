/* eslint-disable @next/next/no-img-element */
"use client";

export default function TrendingDestinations() {
  const destinations = [
    {
      name: "Uttarakhand",
      tours: "300+ Tours",
      img: "/dest/uttrakhand.jpeg",
    },
    {
      name: "Himachal Pradesh",
      tours: "300+ Tours",
      img: "/dest/hp.webp",
    },
    {
      name: "Rajasthan",
      tours: "400+ Tours",
      img: "/dest/rajasthan.jpeg",
    },
    {
      name: "Jammu & Kashmir",
      tours: "100+ Tours",
      img: "/dest/J&K.jpeg",
    },
    {
      name: "Maharashtra",
      tours: "600+ Tours",
      img: "/dest/maharashtra.jpg",
    },
    {
      name: "Goa",
      tours: "200+ Tours",
      img: "/dest/goa.jpg",
    },
    {
      name: "Kerala",
      tours: "700+ Tours",
      img: "/dest/kerla.jpg",
    },
    {
      name: "Singapore",
      tours: "900+ Tours",
      img: "/dest/singapore.avif",
    },
  ];

  return (
    <section className="relative py-16 bg-linear-to-br from-[#FFF5EE] to-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="flex items-center justify-between mb-10">
          <h2 className="text-3xl font-bold text-[#0A143E]">
            Trending Destinations
          </h2>
          <button className="flex items-center gap-2 bg-[#0A143E] text-white px-6 py-2 rounded-full font-medium hover:bg-[#172A6C] transition">
            View More <span className="text-lg">→</span>
          </button>
        </div>

        {/* Destinations Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {destinations.map((place, index) => (
            <div
              key={index}
              className="flex items-center gap-4 bg-white border border-gray-200 rounded-2xl p-4 shadow-sm hover:shadow-lg transition"
            >
              <img
                src={place.img}
                alt={place.name}
                className="w-[70px] h-[70px] object-cover rounded-full"
              />
              <div>
                <h3 className="text-[#0A143E] font-semibold text-base">
                  {place.name}
                </h3>
                <p className="text-gray-500 text-sm">{place.tours}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
