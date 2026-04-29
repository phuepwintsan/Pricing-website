"use client";

import { useState } from "react";
import Link from "next/link";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full 
      bg-white backdrop-blur-md border-b border-gray-200">

      <div className="max-w-10xl mx-auto px-5 md:px-12 h-[70px] flex items-center justify-between">

        {/* Logo */}
        <div className="flex items-center gap-3">
          <img src="/logo.jpg" className="w-10 h-10 object-contain" />
          <span className="text-[17px] font-semibold text-gray-900">
            Yatyarzar
          </span>
        </div>

        {/* Desktop Menu */}
        <nav className="hidden md:flex items-center gap-10 text-sm font-medium">
          <Link href="/" className="hover:text-purple-700 text-gray-600">HOME</Link>
          <Link href="#about" className="hover:text-purple-700 text-gray-600">ABOUT</Link>
          <Link href="#solution" className="hover:text-purple-700 text-gray-600">SOLUTIONS</Link>
          <Link href="#pricing" className="hover:text-purple-700 text-gray-600">PRICING</Link>
        </nav>

        {/* Desktop Button */}
        <div className="hidden md:block">
          <Link href="#contact">
            <button className="px-6 py-2.5 rounded-xl text-sm font-semibold text-white
              bg-gradient-to-r from-purple-700 to-purple-900 shadow-md
              hover:-translate-y-0.5 hover:shadow-lg transition">
              Contact
            </button>
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button
          onClick={() => setOpen(true)}
          className="md:hidden w-10 h-10 flex items-center justify-center border rounded-lg"
        >
          ☰
        </button>
      </div>

      {/* 🔥 MOBILE OVERLAY MENU */}
      <div className={`fixed inset-0 z-50 transition duration-300 
        ${open ? "opacity-100 visible" : "opacity-0 invisible"}`}>

        {/* Background */}
        <div
          className="absolute inset-0 bg-black/40 backdrop-blur-sm"
          onClick={() => setOpen(false)}
        ></div>

        {/* Drawer */}
        <div className={`absolute top-0 left-0 w-full bg-white 
          rounded-b-2xl shadow-2xl
          transition-transform duration-300
          ${open ? "translate-y-0" : "-translate-y-full"}`}>

          {/* Header */}
          <div className="flex items-center justify-between px-6 py-4 border-b">

            <div className="flex items-center gap-3">
              <img src="/logo.jpg" className="w-8 h-8" />
              <span className="font-semibold text-gray-900">
                Yatyarzar
              </span>
            </div>

            <button
              onClick={() => setOpen(false)}
              className="w-9 h-9 flex items-center justify-center rounded-lg border border-gray-200"
            >
              ✕
            </button>
          </div>

          {/* Menu */}
          <div className="px-6 py-6 space-y-5 text-[15px] font-medium text-gray-800">

            <Link href="/" onClick={() => setOpen(false)} className="block hover:text-purple-700">
              HOME
            </Link>

            <Link href="/about" onClick={() => setOpen(false)} className="block hover:text-purple-700">
              ABOUT
            </Link>

            <Link href="/solutions" onClick={() => setOpen(false)} className="block hover:text-purple-700">
              SOLUTIONS
            </Link>

            <Link href="/pricing" onClick={() => setOpen(false)} className="block hover:text-purple-700">
              PRICING
            </Link>
          </div>

          {/* CTA */}
          <div className="px-6 pb-6">
            <Link href="/contact" onClick={() => setOpen(false)}>
              <button className="w-full py-3 rounded-xl 
                bg-gradient-to-r from-purple-700 to-purple-900 
                text-white font-semibold shadow-md">
                Contact
              </button>
            </Link>
          </div>

        </div>
      </div>
    </header>
  );
}