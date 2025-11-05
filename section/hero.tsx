/* eslint-disable @next/next/no-img-element */
"use client";
import { useState } from "react";
import { Search, MapPin } from "lucide-react";

const icons: Record<string, string> = {
  Tours: "/icons/tours.svg",
  Hotels: "/icons/hotels.svg",
  "Private Jet": "/icons/Private Jet.svg",
  Flight: "/icons/flight.svg",
  Bus: "/icons/bus.svg",
  Train: "/icons/train.svg",
  "Taxi Stand": "/icons/Taxi Stand.svg",
};

export default function HeroSection() {
  const [active, setActive] = useState("Tours");

  const categories = [
    "Tours",
    "Hotels",
    "Flight",
    "Bus",
    "Train",
    "Taxi Stand",
  ];

  return (
    <section className="relative min-h-screen bg-gradient from-[#FFF8F3] to-white overflow-hidden">
      <div
        className="
          max-w-7xl mx-auto px-6 
          py-12 
          lg:pt-32  /* <-- extra top padding for laptops/PCs */
          grid grid-cols-1 lg:grid-cols-2 
          items-center gap-12
        "
      >
        {/* LEFT SECTION */}
        <div className="flex flex-col items-start text-center lg:text-left">
          <h1 className="text-4xl sm:text-5xl font-bold leading-tight text-[#111827]">
            Same hotel, <span className="text-[#F97316]">Cheapest</span> price.
            <br /> Guaranteed!
          </h1>

          <div className="bg-white rounded-3xl shadow-2xl p-6 sm:p-8 mt-10 w-full max-w-xl mx-auto ">
            {/* Category Buttons */}
            <div className="grid grid-cols-3 sm:grid-cols-6 gap-4 justify-between mb-6">
              {categories.map((label) => (
                <div
                  key={label}
                  onClick={() => setActive(label)}
                  className={`flex flex-col items-center justify-center cursor-pointer transition-all ${
                    active === label
                      ? "text-[#F97316]"
                      : "text-gray-500 hover:text-[#F97316]"
                  }`}
                >
                  <img
                    src={icons[label]}
                    alt={label}
                    className="w-6 h-6 object-contain"
                  />
                  <span className="text-xs mt-1">{label}</span>
                  {active === label && (
                    <div className="w-6 h-0.5 bg-[#F97316] mt-1 rounded-full" />
                  )}
                </div>
              ))}
            </div>

            {/* Search Box */}
            <div className="flex flex-col sm:flex-row items-stretch gap-3 border border-gray-200 rounded-full bg-gray-50 px-4 py-3">
              <div className="flex items-center flex-1">
                <Search className="text-gray-400 shrink-0" size={20} />
                <input
                  type="text"
                  placeholder="Search for Uttarakhand"
                  className="flex-1 px-3 text-gray-700 bg-transparent outline-none text-sm sm:text-base"
                />
              </div>
              <button className="bg-[#F97316] hover:bg-[#ea640e] text-white px-6 py-2.5 rounded-full font-medium transition w-full sm:w-auto">
                Search
              </button>
            </div>
          </div>
        </div>

        {/* RIGHT SECTION (Hidden on Mobile) */}
        <div className="relative hidden lg:flex justify-center items-center w-full h-auto">
          <img
            src="/Hero Banner.svg"
            alt="Hero Banner"
            className="w-full max-w-lg lg:max-w-full h-auto object-contain"
          />

          {/* Map Pin Overlay */}
          <div
            className="absolute flex justify-center items-center rounded-full shadow-lg text-white"
            style={{
              width: "48px",
              height: "48px",
              bottom: "10%",
              left: "55%",
              background: "#2FA6D9",
              transform: "translateX(-50%)",
            }}
          >
            <MapPin size={20} color="white" />
          </div>
        </div>
      </div>
    </section>
  );
}
