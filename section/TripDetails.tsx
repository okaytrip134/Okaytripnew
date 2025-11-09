"use client";

import { useRef, useState } from "react";
import { Hotel, Utensils, Binoculars } from "lucide-react";

export default function TripDetailsSection() {
    const [activeTab, setActiveTab] = useState("overview");

    const overviewRef = useRef<HTMLDivElement>(null) as React.RefObject<HTMLDivElement>;
    const itineraryRef = useRef<HTMLDivElement>(null) as React.RefObject<HTMLDivElement>;
    const inclusionRef = useRef<HTMLDivElement>(null) as React.RefObject<HTMLDivElement>;
    const infoRef = useRef<HTMLDivElement>(null) as React.RefObject<HTMLDivElement>;

    const scrollToSection = (ref: React.RefObject<HTMLDivElement>, tab: string) => {
        setActiveTab(tab);
        ref.current?.scrollIntoView({ behavior: "smooth", block: "start" });
    };

    return (
        <section className="mt-20 space-y-10">
            {/* ---------- MENU TABS ---------- */}
            <div className="flex flex-wrap items-center gap-3 border-b pb-3 sticky top-0 bg-[#fff8f4] z-20">
                {[
                    { id: "overview", label: "Overview", ref: overviewRef },
                    { id: "itinerary", label: "Day Wise Itinerary", ref: itineraryRef },
                    { id: "inclusions", label: "Inclusion/Exclusions", ref: inclusionRef },
                    { id: "info", label: "Additional Info", ref: infoRef },
                ].map((item) => (
                    <button
                        key={item.id}
                        onClick={() => scrollToSection(item.ref, item.id)}
                        className={`px-5 py-2 text-sm font-medium rounded-full border transition ${activeTab === item.id
                            ? "bg-orange-500 text-white border-orange-500"
                            : "bg-white text-gray-700 border-gray-200 hover:bg-orange-50"
                            }`}
                    >
                        {item.label}
                    </button>
                ))}
            </div>

            {/* ---------- OVERVIEW SECTION ---------- */}
            <div ref={overviewRef} className="scroll-mt-28">
                {/* ICONS ROW (EXACT DESIGN) */}
                <div className="bg-white rounded-2xl shadow-sm flex justify-between items-center px-10 py-8">
                    <div className="flex flex-col items-center text-gray-700">
                        <Hotel className="text-gray-500 mb-2" size={36} />
                        <span className="text-base font-semibold">Stay Included</span>
                    </div>
                    <div className="flex flex-col items-center text-gray-700">
                        <Utensils className="text-gray-500 mb-2" size={36} />
                        <span className="text-base font-semibold">Meals Included</span>
                    </div>
                    <div className="flex flex-col items-center text-gray-700">
                        <Utensils className="text-gray-500 mb-2" size={36} />
                        <span className="text-base font-semibold">Meals Included</span>
                    </div>
                    <div className="flex flex-col items-center text-gray-700">
                        <Binoculars className="text-gray-500 mb-2" size={36} />
                        <span className="text-base font-semibold">Sightseeing Included</span>
                    </div>
                </div>

                {/* PACKAGE OVERVIEW */}
                <div className="bg-white rounded-xl shadow-sm p-6 mt-6">
                    <h2 className="text-lg font-semibold text-gray-800 mb-2">Package Overview</h2>
                    <p className="text-gray-600 leading-relaxed text-sm">
                        Rishikesh, in Uttarakhand, is the “Yoga Capital of the World.” Set along the Ganges River,
                        it’s famous for The Beatles’ 1968 visit, serene ashrams, Lakshman Jhula, and the evening
                        Ganga Aarti at Triveni Ghat, blending spirituality with natural beauty.
                    </p>
                </div>
            </div>

            {/* ---------- ITINERARY SECTION ---------- */}
            <div ref={itineraryRef} className="scroll-mt-28">
                <div className="bg-transparent">
                    <h2 className="text-xl font-bold text-[#0c1440] mb-6">Day Wise Itinerary</h2>

                    {/* Day 1 */}
                    <div className="mb-5">
                        <div className="bg-[#f58634] text-white text-sm font-semibold px-4 py-2 rounded-t-lg inline-block">
                            Day 1: Arrival in Rishikesh
                        </div>
                        <div className="bg-white border border-gray-200 rounded-lg overflow-hidden shadow-sm">

                            <div className="p-4 text-gray-700 text-sm leading-relaxed">
                                Arrive in Rishikesh and check in to your hotel. Freshen up and relax after your journey. In
                                the evening, visit Triveni Ghat to witness the sacred Ganga Aarti, followed by a peaceful
                                walk along the river. Overnight stay at the hotel.
                            </div>
                        </div>
                    </div>

                    {/* Day 2 */}
                    <div className="mb-5">
                        <div className="bg-[#f58634] text-white text-sm font-semibold px-4 py-2 rounded-t-lg inline-block">
                            Day 2: Rishikesh Sightseeing
                        </div>
                        <div className="bg-white border border-gray-200 rounded-lg overflow-hidden shadow-sm">

                            <div className="p-4 text-gray-700 text-sm leading-relaxed">
                                Arrive in Rishikesh and check in to your hotel. Freshen up and relax after your journey. In
                                the evening, visit Triveni Ghat to witness the sacred Ganga Aarti, followed by a peaceful
                                walk along the river. Overnight stay at the hotel.
                            </div>
                        </div>
                    </div>

                    {/* Day 3 */}
                    <div>
                        <div className="bg-[#f58634] text-white text-sm font-semibold px-4 py-2 rounded-t-lg inline-block">
                            Day 3: Adventure & Departure
                        </div>
                        <div className="bg-white border border-gray-200 rounded-lg overflow-hidden shadow-sm">

                            <div className="p-4 text-gray-700 text-sm leading-relaxed">
                                Arrive in Rishikesh and check in to your hotel. Freshen up and relax after your journey. In
                                the evening, visit Triveni Ghat to witness the sacred Ganga Aarti, followed by a peaceful
                                walk along the river. Overnight stay at the hotel.
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* ---------- INCLUSIONS & EXCLUSIONS SECTION ---------- */}
            <div ref={inclusionRef} className="scroll-mt-28">
                <div className="bg-white rounded-xl shadow-sm p-6">
                    <h2 className="text-xl font-bold text-[#0c1440] mb-6">Day Wise Itinerary</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {/* INCLUSIONS */}
                        <div>
                            <div className="bg-green-500 text-white text-sm font-semibold px-4 py-2 rounded-t-lg inline-block">
                                Inclusions
                            </div>
                            <div className="border border-green-400 rounded-lg">

                                <ul className="list-disc pl-6 pr-4 py-4 text-sm text-gray-800 space-y-2">
                                    <li>Accommodation on twin sharing basis</li>
                                    <li>Only breakfast in Rishikesh Hotel</li>
                                    <li>Breakfast & Dinner in Corbett</li>
                                    <li>A/C cab for entire trip as per itinerary</li>
                                    <li>Toll taxes, parking, driver charges etc</li>
                                    <li>All applicable hotel taxes</li>
                                </ul>
                            </div>
                        </div>

                        {/* EXCLUSIONS */}
                        <div>

                            <div className="bg-red-500 text-white text-sm font-semibold px-4 py-2 rounded-t-lg inline-block">
                                Exclusions
                            </div>
                            <div className="border border-red-400 rounded-lg">

                                <ul className="list-disc pl-6 pr-4 py-4 text-sm text-gray-800 space-y-2">
                                    <li>GST 5%</li>
                                    <li>Any flight / Train ticket</li>
                                    <li>Entry fees to monuments and palaces</li>
                                    <li>Anything not mentioned in the inclusions</li>
                                    <li>Safari is on direct payment basis</li>
                                    <li>Rafting is on direct payment basis</li>
                                    <li>
                                        Porter age at hotels and airports, tips, insurance, laundry,
                                        liquors, wine, etc.
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* ---------- ADDITIONAL INFO / TERMS & CONDITIONS ---------- */}
            <div ref={infoRef} className="scroll-mt-28">
                <div className="bg-white rounded-xl shadow-sm p-6">
                    <h2 className="text-xl font-bold text-[#0c1440] mb-6">Term & Condition</h2>

                    {/* TRAVEL VALIDITY */}
                    <div className="mb-5">
                        <div className="bg-[#f58634] text-white text-sm font-semibold px-4 py-2 rounded-t-lg inline-block">
                            Travel Validity
                        </div>
                        <div className="bg-white border border-gray-200 rounded-b-lg p-4 text-sm text-gray-800">
                            <ul className="list-disc pl-5">
                                <li>The deal is valid for travel till 31 March 2026</li>
                            </ul>
                        </div>
                    </div>

                    {/* EASY CANCELLATION */}
                    <div className="mb-5">
                        <div className="bg-[#f58634] text-white text-sm font-semibold px-4 py-2 rounded-t-lg inline-block">
                            Easy Cancellation
                        </div>
                        <div className="bg-white border border-gray-200 rounded-b-lg p-4 text-sm text-gray-800 leading-relaxed">
                            Arrive in Rishikesh and check in to your hotel. Freshen up and relax after your journey.
                            In the evening, visit Triveni Ghat to witness the sacred Ganga Aarti, followed by a peaceful
                            walk along the river. Overnight stay at the hotel.
                        </div>
                    </div>

                    {/* GUARANTEED DATES */}
                    <div className="mb-5">
                        <div className="bg-[#f58634] text-white text-sm font-semibold px-4 py-2 rounded-t-lg inline-block">
                            Guaranteed Dates
                        </div>
                        <div className="bg-white border border-gray-200 rounded-b-lg p-4 text-sm text-gray-800 leading-relaxed space-y-2">
                            <ul className="list-disc pl-5 space-y-1">
                                <li>
                                    30 days or more prior to departure date, Initial Booking Amount and additional amount
                                    (in case visa has been applied).
                                </li>
                                <li>
                                    Your selected travel dates are guaranteed. In the unlikely event of seats sold out, we
                                    guarantee +/- 1/2 days from your preferred dates.
                                </li>
                            </ul>
                        </div>
                    </div>

                    {/* BOOKING POLICY */}
                    <div>
                        <div className="bg-[#f58634] text-white text-sm font-semibold px-4 py-2 rounded-t-lg inline-block">
                            Booking Policy
                        </div>
                        <div className="bg-white border border-gray-200 rounded-b-lg p-4 text-sm text-gray-800 leading-relaxed">
                            <ul className="list-disc pl-5 space-y-1">
                                <li>At the time of booking: 50% of total package cost</li>
                                <li>Balance 50% 14 days before travel date</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
