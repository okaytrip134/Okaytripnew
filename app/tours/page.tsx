/* eslint-disable @next/next/no-img-element */
"use client";

import { useState } from "react";
import { Calendar, Users, Star, Hotel, Utensils, Car, Eye } from "lucide-react";
import TripDetailsSection from "@/section/TripDetails";
import RecommendedTours from "@/section/Recommended";
import TestimonialSection from "@/section/Testimonials";

export default function TripPage() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        date: "",
        guests: "2 Adults, 1 Child",
        message: "",
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e: { preventDefault: () => void; }) => {
        e.preventDefault();
        console.log("Form submitted:", formData);
    };

    return (
        <main className=" bg-linear-to-b from-[#fffdfb] to-[#fff8f4]">
            <div className=" text-gray-900 px-4 mt-8 py-10 max-w-7xl mx-auto min-h-screen">
                {/* ---------- TITLE & DETAILS ---------- */}
                <section className="mb-8">
                    <h1 className="text-3xl sm:text-4xl font-bold text-gray-900">
                        Explore Rishikesh in 2 Nights | Rafting, Stay & Sightseeing
                    </h1>
                    <div className="flex flex-wrap gap-6 mt-4 text-base text-gray-600 items-center">
                        <div className="flex items-center gap-2">
                            <Calendar size={20} className="text-orange-500" />
                            <span>2 days 3 nights</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <Users size={20} className="text-orange-500" />
                            <span>4-6 guest</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <Star size={20} className="text-yellow-400 fill-yellow-400" />
                            <span className="font-semibold text-gray-900">4.96</span>
                            <span className="text-gray-500">(672 reviews)</span>
                        </div>
                    </div>
                </section>

                {/* ---------- MAIN WRAPPER ---------- */}
                <section className="flex flex-col lg:flex-row gap-10">
                    {/* ---------- LEFT SECTION ---------- */}
                    <div className="flex-1 space-y-8 overflow-y-auto">
                        {/* ---------- IMAGE GRID ---------- */}
                        <div className="grid grid-cols-2 gap-3">
                            {/* Top-left */}
                            <div className="relative w-full h-[280px] sm:h-80">
                                <img
                                    src="https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?auto=format&fit=crop&w=800&q=80"
                                    alt="Rishikesh river landscape"
                                    className="rounded-2xl object-cover w-full h-full"
                                />
                            </div>

                            {/* Top-right with button */}
                            <div className="relative w-full h-[280px] sm:h-80">
                                <img
                                    src="https://images.unsplash.com/photo-1544967082-d9d25d867d66?auto=format&fit=crop&w=800&q=80"
                                    alt="Yoga by river"
                                    className="rounded-2xl object-cover w-full h-full"
                                />
                                <button className="absolute bottom-4 right-4 bg-gray-700/90 hover:bg-gray-800 text-white text-sm font-medium px-4 py-2 rounded-lg flex items-center gap-2 transition">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                    </svg>
                                    View More Photos
                                </button>
                            </div>

                            {/* Bottom-left */}
                            <div className="relative w-full h-[280px] sm:h-80">
                                <img
                                    src="https://images.unsplash.com/photo-1626621341293-c44a76d61514?auto=format&fit=crop&w=800&q=80"
                                    alt="Beach at Rishikesh"
                                    className="rounded-2xl object-cover w-full h-full"
                                />
                            </div>

                            {/* Bottom-right */}
                            <div className="relative w-full h-[280px] sm:h-80">
                                <img
                                    src="https://images.unsplash.com/photo-1609137144813-7d9921338f24?auto=format&fit=crop&w=800&q=80"
                                    alt="Temple at dusk"
                                    className="rounded-2xl object-cover w-full h-full"
                                />
                            </div>
                        </div>

                        {/* Placeholder for future sections */}
                        <TripDetailsSection />
                    </div>

                    {/* ---------- RIGHT FIXED FORM ---------- */}
                    <aside className="w-full lg:w-[360px] xl:w-[400px] shrink-0">
                        <div className="sticky  bg-white rounded-2xl shadow-lg p-6 border border-gray-100 top-16">
                            <div className="flex justify-between items-start mb-5">
                                <h2 className="text-base font-medium text-gray-800 leading-tight pr-2">
                                    Explore Rishikesh in 2 Nights | Rafting, Stay & Sightseeing
                                </h2>
                                <span className="text-sm font-bold text-red-600 whitespace-nowrap">
                                    25% Off
                                </span>
                            </div>

                            {/* PACKAGE INCLUDES */}
                            <div className="flex justify-between items-center text-sm text-gray-600 mb-5 border-b border-gray-200 pb-4">
                                <div className="flex flex-col items-center gap-1">
                                    <Hotel size={20} className="text-orange-500" />
                                    <span>Hotel</span>
                                </div>
                                <div className="flex flex-col items-center gap-1">
                                    <Eye size={20} className="text-orange-500" />
                                    <span>Sightseeing</span>
                                </div>
                                <div className="flex flex-col items-center gap-1">
                                    <Utensils size={20} className="text-orange-500" />
                                    <span>Meals</span>
                                </div>
                                <div className="flex flex-col items-center gap-1">
                                    <Car size={20} className="text-orange-500" />
                                    <span>Transfer</span>
                                </div>
                            </div>

                            {/* PRICE */}
                            <p className="text-3xl font-bold mb-6">
                                INR <span className="text-gray-900">2,30,00</span>{" "}
                                <span className="text-sm font-normal text-gray-500">/ Person</span>
                            </p>

                            {/* FORM */}
                            <div className="space-y-4">
                                <input
                                    type="text"
                                    name="name"
                                    placeholder="Full Name*"
                                    value={formData.name}
                                    onChange={handleChange}
                                    className="w-full border border-gray-300 rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                                />
                                <input
                                    type="email"
                                    name="email"
                                    placeholder="Email ID"
                                    value={formData.email}
                                    onChange={handleChange}
                                    className="w-full border border-gray-300 rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                                />
                                <input
                                    type="text"
                                    name="phone"
                                    placeholder="+91  |  Number*"
                                    value={formData.phone}
                                    onChange={handleChange}
                                    className="w-full border border-gray-300 rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                                />
                                <div className="grid grid-cols-2 gap-3">
                                    <button
                                        type="button"
                                        className="w-full border border-gray-300 rounded-lg px-4 py-3 text-sm text-left focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent flex items-center gap-2"
                                    >
                                        <Calendar size={18} className="text-orange-500" />
                                        <span className="text-gray-700">Select Date</span>
                                    </button>
                                    <button
                                        type="button"
                                        className="w-full border border-gray-300 rounded-lg px-4 py-3 text-sm text-left focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent flex items-center gap-2"
                                    >
                                        <Users size={18} className="text-orange-500" />
                                        <span className="text-gray-700">2 Adults, 1 Child</span>
                                    </button>
                                </div>
                                <textarea
                                    name="message"
                                    placeholder="Message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    className="w-full border border-gray-300 rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent h-24 resize-none"
                                />
                                <button
                                    onClick={handleSubmit}
                                    className="w-full bg-orange-500 text-white py-3 rounded-lg hover:bg-orange-600 transition font-semibold text-base"
                                >
                                    Book Now
                                </button>
                            </div>
                        </div>
                    </aside>
                </section>
            </div>
            <RecommendedTours/>
            <TestimonialSection/>
        </main>
    );
}   