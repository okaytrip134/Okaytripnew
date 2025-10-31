/* eslint-disable @next/next/no-img-element */
import { ArrowRight } from "lucide-react";

interface Category {
  id: number;
  title: string;
  image: string;
  tours: number;
  activities: number;
}

export default function CategoryCard({ category }: { category: Category }) {
  return (
    <div className="bg-white border border-gray-200 rounded-[22px] p-4 transition-all hover:shadow-md hover:border-gray-300 cursor-pointer">
      {/* Image */}
      <div className="w-full h-[130px] overflow-hidden rounded-2xl mb-4">
        <img
          src={category.image}
          alt={category.title}
          className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
        />
      </div>

      {/* Content */}
      <div className="flex items-center justify-between">
        <div>
          <h3 className="text-[#0A143E] font-semibold text-base mb-1">
            {category.title}
          </h3>
          <p className="text-gray-500 text-sm">
            {category.tours} Tours, {category.activities} Activities
          </p>
        </div>
        <button className="bg-gray-100 hover:bg-gray-200 p-2.5 rounded-full transition">
          <ArrowRight className="w-4 h-4 text-gray-700" />
        </button>
      </div>
    </div>
  );
}
