/* eslint-disable @next/next/no-img-element */
"use client";
import { useState } from "react";
import {
    Palmtree,
    Hotel,
    Plane,
    Bus,
    Train,
    Car,
    Search,
    MapPin,
} from "lucide-react";

export default function HeroSection() {
    const [active, setActive] = useState("Tours");

    const categories = [
        { label: "Tours", icon: Palmtree },
        { label: "Hotels", icon: Hotel },
        { label: "Private Jet", icon: Plane },
        { label: "Flight", icon: Plane },
        { label: "Bus", icon: Bus },
        { label: "Train", icon: Train },
        { label: "Taxi Stand", icon: Car },
    ];

    return (
        <section className="relative min-h-screen bg-linear-to-br from-[#FFF8F3] to-white overflow-visible">
            <div className="max-w-7xl mx-auto px-6 pt-12 pb-4 grid grid-cols-1 lg:grid-cols-2 items-center gap-8 relative">
                {/* LEFT SECTION */}
                <div>
                    <h1 className="text-4xl font-bold leading-tight text-[#111827]">
                        Same hotel, <span className="text-[#F97316]">Cheapest</span> price.
                        <br /> Guaranteed!
                    </h1>

                    <div className="bg-white rounded-3xl shadow-2xl p-8 mt-10 max-w-[560px]">
                        {/* category buttons */}
                        <div className="flex justify-between mb-6">
                            {categories.map((item) => {
                                const Icon = item.icon;
                                return (
                                    <div
                                        key={item.label}
                                        onClick={() => setActive(item.label)}
                                        className={`flex flex-col items-center cursor-pointer ${active === item.label
                                            ? "text-[#F97316]"
                                            : "text-gray-500 hover:text-[#F97316]"
                                            }`}
                                    >
                                        <Icon size={24} />
                                        <span className="text-xs mt-1">{item.label}</span>
                                        {active === item.label && (
                                            <div className="w-8 h-0.5 bg-[#F97316] mt-1 rounded-full" />
                                        )}
                                    </div>
                                );
                            })}
                        </div>

                        {/* Search Box */}
                        <div className="flex items-center border border-gray-200 rounded-full bg-gray-50 px-5 py-4">
                            <Search className="text-gray-400" size={24} />
                            <input
                                type="text"
                                placeholder="Search for Uttrakhand"
                                className="flex-1 px-3 text-gray-700 bg-transparent outline-none"
                            />
                            <button className="bg-[#F97316] hover:bg-[#ea640e] text-white px-8 py-2.5 rounded-full font-medium transition">
                                Search
                            </button>
                        </div>
                    </div>
                </div>

                {/* RIGHT SECTION */}
                <div className="relative w-full h-[700px] flex justify-end items-center">
                    {/* IMAGE GRID */}
                    <div className="grid grid-cols-2 gap-5 relative z-10">
                        <div className="space-y-4">
                            <img
                                src="/hero/h1.png"
                                alt="place"
                                className="w-[220px] h-[220px] object-cover rounded-[20px] shadow-md"
                            />
                            <img
                                src="/hero/h2.png"
                                alt="place"
                                className="w-[220px] h-[220px] object-cover rounded-[20px] shadow-md"
                            />
                        </div>
                        <div className="space-y-4 pt-10">
                            <img
                                src="/hero/h3.png"
                                alt="place"
                                className="w-[220px] h-[220px] object-cover rounded-[20px] shadow-md"
                            />
                            <img
                                src="/hero/h4.png"
                                alt="place"
                                className="w-[220px] h-[220px] object-cover rounded-[20px] shadow-md"
                            />
                        </div>
                    </div>

                    {/* PURPLE CURVED LINE */}
                    <svg
                        className="absolute"
                        width="220"
                        height="220"
                        style={{
                            top: "13rem",
                            left: "-2%",
                            transform: "rotate(-82deg)"

                        }}
                        viewBox="0 0 220 200"
                        fill="none"
                    >
                        <path
                            d="M 0 150 Q 110 0, 220 50"
                            stroke="#872BFF"
                            strokeWidth="3"
                            fill="none"
                            strokeDasharray="6,8"
                        />
                    </svg>

                    {/* PURPLE PLANE */}
                    <div
                        className="absolute flex justify-center items-center rounded-full shadow-lg"
                        style={{
                            width: "48.47px",
                            height: "48.47px",
                            top: "174px",
                            left: "7%",
                            background: "#872BFF",
                            transform: "rotate(71deg)",
                            boxShadow:
                                "0px 19.18px 7.85px rgba(140,140,140,0.01), 0px 11.33px 6.97px rgba(140,140,140,0.05), 0px 5.23px 5.23px rgba(140,140,140,0.09), 0px 0.87px 2.61px rgba(140,140,140,0.1)",
                        }}
                    >
                        <Plane
                            size={18}
                            color="white"
                            style={{
                                transform: "rotate(-80deg)",
                            }}
                        />
                    </div>

                    {/* ORANGE CURVED LINE */}
                    <svg
                        className="absolute"
                        width="130"
                        height="230"
                        style={{
                            top: "357px",
                            left: "92%",
                            transform: "rotate(159.15deg)",
                        }}
                        viewBox="0 0 130 200"
                        fill="none"
                    >
                        <path
                            d="M 0 150 Q 110 0, 220 50"
                            stroke="#FF8862"
                            strokeWidth="3"
                            fill="none"
                            strokeDasharray="6,8"
                        />
                    </svg>

                    {/* ORANGE PLANE */}
                    <div
                        className="absolute flex justify-center items-center rounded-full shadow-lg"
                        style={{
                            width: "48.47px",
                            height: "48.47px",
                            top: "383.59px",
                            left: "104%",
                            background: "#F47A21",
                            transform: "rotate(25.31deg)",
                            boxShadow:
                                "0px 19.18px 7.85px rgba(140,140,140,0.01), 0px 11.33px 6.97px rgba(140,140,140,0.05), 0px 5.23px 5.23px rgba(140,140,140,0.09), 0px 0.87px 2.61px rgba(140,140,140,0.1)",
                        }}
                    >
                        <Plane
                            size={18}
                            color="white"
                            style={{
                                transform: "rotate(-80deg)",
                            }}
                        />
                    </div>

                    {/* BLUE LOCATION ICON */}
                    <div
                        className="absolute flex justify-center items-center rounded-full shadow-lg text-white"
                        style={{
                            width: "48.47px",
                            height: "48.47px",
                            top: "39rem",
                            left: "55%",
                            background: "#2FA6D9",
                        }}
                    >
                        <MapPin size={20} color="white" />
                    </div>
                </div>
            </div>
        </section>
    );
}
