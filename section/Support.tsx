/* eslint-disable @next/next/no-img-element */
import { ArrowRight } from "lucide-react";

export default function FeaturesSection() {
    return (
        <div className="bg-linear-to-br from-white to-[#FFF5EE] py-12 px-6">
            <div className="max-w-7xl mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    {/* LEFT CONTAINER - 50% */}
                    <div className="grid grid-cols-2 gap-6">
                        {/* 24/7 Support Card - Blue (Takes full left column) */}
                        <div className="col-span-1 relative bg-linear-to-br from-blue-300 to-blue-400 rounded-[40px] p-8">
                            {/* Background Pattern - You can add wavy pattern image here */}
                            <div className="absolute inset-0 rounded-[40px] overflow-hidden opacity-20">
                                {/* Add your wavy pattern background image here */}
                                <img src="/1.png" alt="" className="w-full h-full object-cover" />
                            </div>

                            <div className="relative z-10 mb-6">
                                <h2 className="text-3xl font-bold text-black mb-3">24/7 Support</h2>
                                <p className="text-black text-base leading-relaxed">
                                    We are here to help, before,
                                    <br />
                                    during, and even after your trip.
                                </p>
                            </div>

                            {/* Support Image 1 */}
{/* Support Image 1 */}
<div className="relative z-10 bg-white rounded-3xl overflow-hidden shadow-lg mb-5">
  <img
    src="https://images.unsplash.com/photo-1603791440384-56cd371ee9a7?w=600"
    alt="Customer Support"
    className="w-full h-44 object-cover"
  />
</div>

{/* Support Image 2 */}
<div className="relative z-10 bg-white rounded-3xl overflow-hidden shadow-lg">
  <img
    src="https://images.unsplash.com/photo-1595152772835-219674b2a8a6?w=600"
    alt="Support Agent"
    className="w-full h-56 object-cover"
  />
</div>

                        </div>

                        {/* RIGHT SUB-COLUMN with 2 cards */}
                        <div className="col-span-1 space-y-6">
                            {/* Best Price Card - Green */}
                            <div className="relative bg-linear-to-br from-green-200 to-green-300 rounded-[40px] p-8 min-h-80">
                                {/* Background Pattern - Add wavy pattern here */}
                                <div className="absolute inset-0 rounded-[40px] overflow-hidden opacity-75">
                                    <img src="/3.png" alt="" className="w-full h-full object-contain" />
                                </div>

                                <div className="relative z-10">
                                    <h2 className="text-3xl font-bold text-black mb-3">Best Price</h2>
                                    <p className="text-black text-base leading-relaxed mb-6">
                                        Price match within 48 hours of order
                                        <br />
                                        confirmation
                                    </p>
                                    <button className="bg-orange-500 hover:bg-orange-600 text-white px-7 py-3.5 rounded-full font-semibold text-base flex items-center gap-2 transition-all shadow-lg">
                                        View More <ArrowRight size={18} />
                                    </button>
                                </div>
                            </div>

                            {/* Save Your Time Card - Cyan */}
                            <div className="relative bg-linear-to-br from-cyan-200 to-cyan-300 rounded-[40px] p-8 min-h-80">
                                <div className="absolute inset-0 rounded-[40px] overflow-hidden opacity-45">
                                    <img src="2.png" alt="" className="w-full h-full object-contain" />
                                </div>
                                {/* Palm Tree and Island - Bottom Right */}

                                <div className="relative z-10">
                                    <h3 className="text-xl font-bold text-black mb-3">Save your time!</h3>
                                    <h2 className="text-2xl font-bold text-black mb-6 leading-snug">
                                        Explore, Book, Soar: Your
                                        <br />
                                        Journey Awaits!
                                    </h2>
                                    <button className="bg-orange-500 hover:bg-orange-600 text-white px-7 py-3.5 rounded-full font-semibold text-base flex items-center gap-2 transition-all shadow-lg">
                                        View More <ArrowRight size={18} />
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* RIGHT CONTAINER - 50% */}
                    <div className="relative flex items-center justify-center">
                        <div className="relative w-full h-full flex items-center justify-center">
                            {/* Main Travelers Image */}
                            <div className="relative">
                                <img
                                    src="/5.png"
                                    alt="Happy Travelers"
                                    className="w-full max-w-lg h-auto object-contain relative z-45"
                                />

                                {/* Yellow Price Badge */}
                                <div className="absolute top-96 -left-20 z-20 bg-yellow-400 rounded-full w-44 h-44 flex flex-col items-center justify-center shadow-2xl transform -rotate-12">
                                    <p className="text-xs font-bold text-black uppercase">Save 39%</p>
                                    <p className="text-5xl font-bold text-black mt-1">$899</p>
                                    <p className="text-xs font-bold text-black uppercase mt-1">Book Now</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}