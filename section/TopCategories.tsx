"use client";
import CategoryCard from "@/components/CategoryCard";
import categories from "../data/categories.json";

export default function TopCategories() {
  return (
    <section className="py-20 bg-linear-to-br from-[#FFF5EE] to-white ">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="flex items-center justify-between mb-10">
          <div>
            <h2 className="text-4xl font-bold text-[#0A143E]">
              Top Categories of Tours
            </h2>
            <p className="text-gray-500 mt-1 text-sm">
              Favorite destinations based on customer reviews
            </p>
          </div>
          <button className="flex items-center gap-2 bg-[#0A143E] text-white px-6 py-2 rounded-full font-medium hover:bg-[#172A6C] transition">
            View More <span className="text-lg">→</span>
          </button>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {categories.map((category) => (
            <CategoryCard key={category.id} category={category} />
          ))}
        </div>
      </div>
    </section>
  );
}
