/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @next/next/no-img-element */
"use client";
import { useState } from "react";
import { FiHeart } from "react-icons/fi";
import { HiOutlineQuestionMarkCircle } from "react-icons/hi";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="w-full bg-white shadow-sm border-b border-gray-100 fixed top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 flex items-center justify-between h-16">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <img src="/logo/logo.png" alt="OkayTrip" className="h-8 w-auto" />
        </div>

        {/* Right Side */}
        <div className="flex items-center space-x-6">
          <button className="flex items-center text-gray-700 hover:text-orange-500 transition">
            <HiOutlineQuestionMarkCircle className="mr-1" size={18} />
            Help
          </button>
          <button className="flex items-center text-gray-700 hover:text-orange-500 transition">
            <FiHeart className="mr-1" size={18} />
            Save
          </button>
{/* Auth Buttons */}
<div
  className="flex items-center gap-[8.22px]"
  style={{ opacity: 1, rotate: '0deg' }}
>
  <button
    className="w-[98.63px] h-[41.1px] border-[0.82px] border-gray-300 rounded-[24.66px]
               text-sm font-medium bg-white hover:bg-gray-50 transition-all
               flex items-center justify-center"
    style={{
      paddingTop: '11.51px',
      paddingBottom: '11.51px',
      paddingLeft: '8.22px',
      paddingRight: '8.22px',
    }}
  >
    Login
  </button>
  <button
    className="w-[98.63px] h-[41.1px] border-[0.82px] rounded-[24.66px] text-sm font-medium
               bg-orange-500 text-white hover:bg-orange-600 transition-all
               flex items-center justify-center"
    style={{
      paddingTop: '11.51px',
      paddingBottom: '11.51px',
      paddingLeft: '8.22px',
      paddingRight: '8.22px',
    }}
  >
    SignUp
  </button>
</div>

        </div>
      </div>
    </nav>
  );
}
