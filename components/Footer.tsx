/* eslint-disable @next/next/no-img-element */
"use client";
import { Mail, MapPin, Clock, Phone, Instagram, Facebook, Youtube, ArrowUp } from "lucide-react";

export default function Footer() {
  return (
    <footer className="relative bg-[#FBF6F3] pt-16 pb-10 mt-0">
      {/* White top curve */}
      <div className="absolute top-0 left-0 w-full overflow-hidden leading-0">
        <svg
          viewBox="0 0 1440 80"
          xmlns="http://www.w3.org/2000/svg"
          className="relative block w-full h-[82px]"
        >
          <path
            d="M0,32 C360,96 1080,-32 1440,32 L1440,0 L0,0 Z"
            fill="#FFFFFF"
          />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-10 relative z-10">
        {/* Left - Brand and info */}
        <div>
          <div className="flex items-center gap-2 mb-4">
            <img
              src="/logo.png"
              alt="OkayTrip Logo"
              className="w-8 h-8 object-contain"
            />
            <h2 className="text-2xl font-semibold text-[#0A143E]">
              <span className="text-[#F97316]">okay</span>trip
            </h2>
          </div>

          <ul className="space-y-3 text-gray-600 text-sm mb-6">
            <li className="flex items-start gap-2">
              <MapPin className="w-4 h-4 text-[#F97316] mt-0.5" />
              <span>Sector 62, Noida, Uttar Pradesh, 201301, India</span>
            </li>
            <li className="flex items-start gap-2">
              <Clock className="w-4 h-4 text-[#F97316] mt-0.5" />
              <span>Hours: 8:00 – 17:00, Mon – Sat</span>
            </li>
            <li className="flex items-start gap-2">
              <Mail className="w-4 h-4 text-[#F97316] mt-0.5" />
              <span>support@okaytrip.com</span>
            </li>
          </ul>

          <h3 className="font-semibold text-[#0A143E] mb-3">Follow us</h3>
          <div className="flex gap-3">
            {[
              { icon: Instagram, href: "#" },
              { icon: Facebook, href: "#" },
              { icon: Youtube, href: "#" },
            ].map((item, i) => (
              <a
                key={i}
                href={item.href}
                className="w-9 h-9 flex items-center justify-center rounded-full border border-gray-200 hover:bg-gray-100 transition"
              >
                <item.icon className="w-4 h-4 text-[#0A143E]" />
              </a>
            ))}
          </div>
        </div>

        {/* Middle - Services */}
        <div className="grid grid-cols-2 text-gray-700 text-sm gap-y-2">
          <h3 className="col-span-2 font-semibold text-[#0A143E] mb-3">
            Services
          </h3>
          <span>Tour Guide</span>
          <span>Rental</span>
          <span>Ticket Booking</span>
          <span>Services</span>
          <span>Tour Booking</span>
          <span>Hotel Booking</span>
          <span>Travel Plane</span>
        </div>

        {/* Right - Subscribe */}
        <div>
          <h3 className="font-semibold text-[#0A143E] mb-4">
            Get the Best Travel Deals – Subscribe Now!
          </h3>

          <div className="flex mb-5">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 rounded-l-full border border-gray-300 focus:outline-none text-sm"
            />
            <button className="bg-black text-white px-5 rounded-r-full text-sm font-medium">
              Subscribe
            </button>
          </div>

          <div className="flex items-center gap-3">
            <div className="bg-gray-100 p-2 rounded-full">
              <Phone className="w-5 h-5 text-[#F97316]" />
            </div>
            <div>
              <p className="font-semibold text-[#0A143E]">Need help? Call us</p>
              <p className="text-[#F97316] font-bold text-lg">
                999 9999 4444
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="max-w-7xl mx-auto mt-10 border-t border-gray-200 pt-6 flex flex-col md:flex-row justify-between items-center px-6 text-sm text-gray-500">
        <p>© 2025 OkayTrip. All rights reserved.</p>
        <div className="flex gap-5 mt-3 md:mt-0">
          <a href="#">Terms</a>
          <a href="#">Privacy policy</a>
          <a href="#">Legal notice</a>
          <a href="#">Accessibility</a>
        </div>
      </div>

      {/* Back to top */}
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        className="absolute right-10 bottom-10 bg-[#F97316] text-white w-12 h-12 rounded-full flex items-center justify-center shadow-md hover:bg-[#e56610] transition"
      >
        <ArrowUp className="w-5 h-5" />
        <span className="absolute text-[10px] bottom-1">top</span>
      </button>
    </footer>
  );
}
