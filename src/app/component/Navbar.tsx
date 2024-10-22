"use client"
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";

const Navbar = () => {
  const [nav, setNav] = useState(false); // Initially hidden

  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <div className="h-20 shadow-xl">
      <div className="text-white flex justify-between items-center h-24 max-w-[1240px] mx-auto">
        {/* Logo Section */}
        <div className="flex items-center">
          <h1 className="text-3xl font-bold text-black">Awesome</h1>
          <Image
            src="/awesome.png"
            alt="awesome"
            width={50}
            height={50}
            className="ml-2"
          />
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex text-black relative">
  <li className="p-4 group relative">
    <Link href="/" className="relative z-10 hover:text-blue-500">Home</Link> {/* Added hover effect */}
    <span className="absolute left-0 right-0 h-[2px] bg-black scale-x-0 group-hover:scale-x-100 transition-transform duration-300 mt-5"></span>
  </li>
  <li className="p-4 group relative">
    <Link href="/video" className="relative z-10 hover:text-blue-500">Video</Link>
    <span className="absolute left-0 right-0 h-[2px] bg-black scale-x-0 group-hover:scale-x-100 transition-transform duration-300 mt-5"></span>
  </li>
  <li className="p-4 group relative">
    <span className="relative z-10 hover:text-blue-500">Resources</span>
    <span className="absolute left-0 right-0 h-[2px] bg-black scale-x-0 group-hover:scale-x-100 transition-transform duration-300 mt-5"></span>
  </li>
  <li className="p-4 group relative">
    <span className="relative z-10 hover:text-blue-500">About</span>
    <span className="absolute left-0 right-0 h-[2px] bg-black scale-x-0 group-hover:scale-x-100 transition-transform duration-300 mt-5"></span>
  </li>
  <li className="p-4 group relative">
    <Link href="/signup" className="relative z-10 hover:text-blue-500">Signup</Link>
    <span className="absolute left-0 right-0 h-[2px] bg-black scale-x-0 group-hover:scale-x-100 transition-transform duration-300 mt-5"></span>
  </li>
</ul>

        {/* Mobile Menu Toggle */}
        <div onClick={handleNav} className="block md:hidden cursor-pointer">
          {nav ? (
            <AiOutlineClose size={24} className="text-black" />
          ) : (
            <AiOutlineMenu size={24} className="text-black" />
          )}
        </div>

        {/* Mobile Sidebar Menu */}
        <div
          className={`fixed left-0 top-0 w-[60%] h-full bg-black text-white p-4 ease-in-out duration-500 z-50 ${
            nav ? "translate-x-0" : "-translate-x-full"
          }`}
        >
          <h1 className="text-2xl font-bold mb-6">Menu</h1>
          <ul className="uppercase">
            <li className="p-4">
              <Link href="/" onClick={handleNav}>Home</Link>
            </li>
            <li className="p-4">
              <Link href="/video" onClick={handleNav}>Video</Link>
            </li>
            <li className="p-4" onClick={handleNav}>Resources</li>
            <li className="p-4" onClick={handleNav}>About</li>
            <li className="p-4">
              <Link href="/signup" onClick={handleNav}>Signup</Link>
            </li>
          </ul>
        </div>
      </div>
      <hr />
    </div>
  );
};

export default Navbar;
