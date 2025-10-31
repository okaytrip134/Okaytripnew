/* eslint-disable @next/next/no-img-element */
import { Star, Heart, Clock, Users, Phone } from "lucide-react";

interface Tour {
  id: number;
  title: string;
  tag: string;
  image: string;
  rating: string;
  reviews: number;
  duration: string;
  guests: string;
  price: string;
}

export default function TourCard({ tour }: { tour: Tour }) {
  return (
    <div className="bg-white rounded-[28px] shadow-sm hover:shadow-md transition-all border border-gray-100 overflow-hidden">
      {/* Image Section */}
      <div className="relative">
        <img
          src={tour.image}
          alt={tour.title}
          className="w-full h-[280px] object-cover"
        />

        {/* Tag */}
        <div className="absolute top-4 left-4 bg-white text-[#F97316] text-sm font-semibold px-3 py-1 rounded-full shadow-sm">
          {tour.tag}
        </div>

        {/* Heart */}
        <button className="absolute top-4 right-4 bg-white rounded-full p-2 shadow-sm hover:scale-105 transition">
          <Heart className="w-4 h-4 text-gray-700" />
        </button>

        {/* Rating Badge (RIGHT SIDE like your image) */}
        <div className="absolute bottom-5 z-50 right-6 bg-white rounded-full px-4 py-1.5 shadow flex items-center gap-1 text-sm">
          <Star className="w-4 h-4 text-yellow-400" />
          <span className="font-semibold">{tour.rating}</span>
          <span className="text-gray-500">({tour.reviews} reviews)</span>
        </div> 
      </div>

      {/* Content Container (white rounded-top box) */}
      <div className="relative bg-white rounded-t-[28px] -mt-8 pt-6 pb-6 px-5 text-[#0A143E]">
        {/* Title */}
        <h3 className="text-base font-semibold leading-snug mb-3 line-clamp-2 min-h-12">
          {tour.title}
        </h3>

        {/* Duration & Guests */}
        <div className="flex items-center text-gray-500 text-sm mb-4 gap-5">
          <div className="flex items-center gap-1.5">
            <Clock className="w-4 h-4 text-[#F97316]" />
            <span>{tour.duration}</span>
          </div>
          <div className="flex items-center gap-1.5">
            <Users className="w-4 h-4 text-[#F97316]" />
            <span>{tour.guests}</span>
          </div>
        </div>

        {/* Bottom Price + Buttons */}
        <div className="flex items-center justify-between pt-2">
          <p className="text-[#0A143E] font-bold text-lg">
            INR {tour.price}
            <span className="text-gray-500 text-sm font-normal"> / Person</span>
          </p>

          <div className="flex items-center gap-3">
            <button className="bg-[#F97316] hover:bg-[#ea640e] text-white px-6 py-2.5 rounded-full text-sm font-medium">
              Book Now
            </button>
            <button className="bg-[#0A143E] text-white p-4 rounded-full hover:bg-[#172A6C] transition">
              <Phone size={18} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
