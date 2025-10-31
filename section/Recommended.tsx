"use client";
import TourCard from "@/components/TourCard";
import data from "@/data/tours.json";

export default function RecommendedTours() {
  return (
    <section className="py-20 bg-linear-to-br from-white to-[#FFF5EE]">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="flex items-center justify-between mb-10">
          <div>
            <h2 className="text-4xl font-bold text-[#0A143E]">
              Recommended For You
            </h2>
            <p className="text-gray-500 mt-1 text-sm">
     The best booking platform you can trust
            </p>
          </div>
          <button className="flex items-center gap-2 bg-[#0A143E] text-white px-6 py-2 rounded-full font-medium hover:bg-[#172A6C] transition">
            View More <span className="text-lg">→</span>
          </button>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {data.map((tour) => (
            <TourCard key={tour.id} tour={{ ...tour, rating: tour.rating }} />
          ))}
        </div>
      </div>
    </section>
  );
}
