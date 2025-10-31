/* eslint-disable @next/next/no-img-element */
"use client";
import { useState } from "react";
import { ArrowLeft, ArrowRight, Star } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const testimonials = [
  {
    id: 1,
    title: "The best booking system",
    text: "I’ve been using the hotel booking system for several years now, and it’s become my go-to platform for planning my trips. The interface is user-friendly, and I appreciate the detailed information and real-time availability of hotels.",
    name: "Sara Mohamed",
    location: "Jakatar",
    image: "https://images.unsplash.com/photo-1607746882042-944635dfe10e?w=200",
  },
  {
    id: 2,
    title: "Loved the experience",
    text: "The team made everything so smooth. Booking, payments, and communication were flawless. Highly recommended for frequent travelers.",
    name: "Kevin Adams",
    location: "Dubai",
    image: "https://images.unsplash.com/photo-1603415526960-f7e0328b9b4a?w=200",
  },
  {
    id: 3,
    title: "Great for family trips",
    text: "It’s so easy to book and organize a family vacation. Loved how organized and transparent the process is. Five stars!",
    name: "Emily Carter",
    location: "Singapore",
    image: "https://images.unsplash.com/photo-1600180758890-6e8b1f4e79d4?w=200",
  },
];

export default function TestimonialSection() {
  const [current, setCurrent] = useState(0);

  const next = () =>
    setCurrent((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  const prev = () =>
    setCurrent((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));

  return (
    <section className="relative bg-linear-to-br from-white to-[#FFF6EE] py-20 overflow-hidden">
      <div className="max-w-6xl mx-auto px-5 flex flex-col items-center">
        {/* Header */}
        <div className="flex items-center gap-3 mb-6">
          <div className="flex -space-x-3">
            <img
              src="https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?w=100"
              className="w-6 h-6 rounded-full border-2 border-white"
              alt="user1"
            />
            <img
              src="https://images.unsplash.com/photo-1603415526960-f7e0328b9b4a?w=100"
              className="w-6 h-6 rounded-full border-2 border-white"
              alt="user2"
            />
            <img
              src="https://images.unsplash.com/photo-1600180758890-6e8b1f4e79d4?w=100"
              className="w-6 h-6 rounded-full border-2 border-white"
              alt="user3"
            />
          </div>
          <span className="bg-[#F97316] text-white text-sm font-medium px-4 py-1 rounded-full">
            Testimonials
          </span>
        </div>

        <h2 className="text-4xl md:text-5xl font-bold text-[#0A143E] mb-16 text-center">
          Don’t take our word for it
        </h2>

        {/* Layout */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-10 w-full">
          {/* Floating Images Section */}
          <div className="relative flex-1 flex justify-center items-center">
            <div className="relative w-[400px] h-[400px] flex justify-center items-center">
              <img
                src="https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?w=400"
                alt="Traveler"
                className="absolute w-52 h-52 rounded-full object-cover border-4 border-white shadow-lg left-0 top-5"
              />
              <img
                src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=400"
                alt="Couple"
                className="absolute w-48 h-48 rounded-full object-cover border-4 border-white shadow-lg right-0 bottom-8"
              />
              <img
                src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400"
                alt="Friends"
                className="absolute w-28 h-28 rounded-full object-cover border-4 border-white shadow-md top-[61%] -translate-y-1/2 left-[-23px] -translate-x-[40%]"
              />
              <img
                src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=400"
                alt="Traveler2"
                className="absolute w-20 h-20 rounded-full object-cover border-4 border-white shadow-sm bottom-0 left-10"
              />
            </div>
          </div>

          {/* Testimonial Card */}
          <div className="relative flex-1 max-w-lg">
            <button
              onClick={prev}
              className="absolute -left-10 top-1/2 -translate-y-1/2 bg-black text-white w-10 h-10 rounded-full flex items-center justify-center hover:bg-gray-800 transition"
            >
              <ArrowLeft className="w-5 h-5" />
            </button>

            <div className="relative h-[260px]">
              <AnimatePresence mode="wait">
                <motion.div
                  key={testimonials[current].id}
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -50 }}
                  transition={{ duration: 0.4, ease: "easeInOut" }}
                  className="absolute inset-0 bg-white rounded-3xl shadow-md p-8 text-left"
                >
                  <h3 className="text-lg font-semibold text-[#0A143E] mb-3">
                    {testimonials[current].title}
                  </h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {testimonials[current].text}
                  </p>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <img
                        src={testimonials[current].image}
                        alt={testimonials[current].name}
                        className="w-10 h-10 rounded-full object-cover"
                      />
                      <div>
                        <p className="font-semibold text-[#0A143E]">
                          {testimonials[current].name}
                        </p>
                        <p className="text-gray-500 text-sm">
                          {testimonials[current].location}
                        </p>
                      </div>
                    </div>
                    <div className="flex gap-1 text-yellow-400">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} size={16} fill="#FBBF24" stroke="none" />
                      ))}
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

            <button
              onClick={next}
              className="absolute -right-10 top-1/2 -translate-y-1/2 bg-black text-white w-10 h-10 rounded-full flex items-center justify-center hover:bg-gray-800 transition"
            >
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
