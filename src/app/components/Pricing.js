"use client";

import { useState } from "react";

export default function Pricing() {

  const [currency, setCurrency] = useState("USD");
  const rate = 4200;

  const formatPrice = (price) => {
    if (currency === "MMK") {
      return `${(price * rate).toLocaleString()} MMK`;
    }
    return `${price.toLocaleString()} USD`;
  };
  return (
    <section id="pricing" className="w-full bg-gray-50 py-24">
      <div className="max-w-7xl mx-auto px-6">

        {/* Header */}
        <div className="text-center mb-20">

          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 mb-4
            text-xs font-medium text-gray-600
            bg-white border border-gray-200
            rounded-full shadow-sm">
            <img src="price-tag.svg" className="w-4 h-4 opacity-70" />
            Our Pricing
          </div>

          {/* Title */}
          <h2 className="text-3xl md:text-4xl font-semibold text-gray-900">
            Plans That Grow with Your Business
          </h2>

          {/* Subtitle */}
          <p className="mt-4 text-gray-500 max-w-2xl mx-auto text-sm md:text-base">
            Simple plans with transparent pricing, built to help your business scale with confidence.
          </p>
          {/* 🔥 Currency Toggle (added cleanly) */}
          <div className="mt-6 flex justify-center">
            <div className="relative flex bg-white/70 backdrop-blur-md border border-gray-200 rounded-full p-1 shadow-md">

              {/* Sliding Background */}
              <div
                className={`absolute top-1 bottom-1 w-1/2 rounded-full bg-gradient-to-r from-purple-600 to-purple-500 shadow transition-all duration-300 ${currency === "MMK" ? "translate-x-full" : "translate-x-0"
                  }`}
              />

              {/* THB */}
              <button
                onClick={() => setCurrency("USD")}
                className={`relative z-10 px-5 py-1.5 text-sm font-medium rounded-full transition ${currency === "USD"
                    ? "text-white"
                    : "text-gray-600 hover:text-gray-900"
                  }`}
              >
                USD
              </button>

              {/* MMK */}
              <button
                onClick={() => setCurrency("MMK")}
                className={`relative z-10 px-5 py-1.5 text-sm font-medium rounded-full transition ${currency === "MMK"
                    ? "text-white"
                    : "text-gray-600 hover:text-gray-900"
                  }`}
              >
                MMK
              </button>

            </div>
          </div>

        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-8 items-start">

          {/* LITE */}
          <div className="bg-white p-7 rounded-2xl border border-gray-200 
    shadow-[0_6px_20px_rgba(0,0,0,0.05)]
    transition duration-300 ease-out
    hover:-translate-y-2 hover:shadow-[0_20px_50px_rgba(0,0,0,0.12)]
    flex flex-col">

            <h3 className="text-lg font-semibold text-gray-900">Lite Plan</h3>
            <p className="text-xs text-purple-600 mb-4">for Small Businesses</p>

            <p className="text-3xl font-bold text-gray-900">
              {formatPrice(25)}
              <span className="text-sm text-gray-500 font-normal ml-1">/month</span>
            </p>

            <p className="text-sm text-gray-500 mt-2 mb-5">
              No setup (Self-service)
            </p>

            <button className="w-full py-2.5 rounded-lg bg-purple-600 text-white text-sm font-medium 
      shadow hover:bg-purple-700 transition mb-6">
              Get Started
            </button>

            {/* Divider */}
            <div className="relative flex items-center justify-center my-6">

              {/* Left line */}
              <div className="flex-1 h-[1px] bg-gray-300"></div>

              {/* Dot */}
              <div className="w-1.5 h-1.5 bg-gray-400 rounded-full mx-2"></div>

              {/* Text badge */}
              <span className="px-3 py-1 text-[11px] font-medium 
    text-gray-800 
    bg-white 
    border border-purple-500/40 
    rounded-full 
    shadow-[0_2px_8px_rgba(124,58,237,0.15)]">
                WHAT YOU WILL GET
              </span>

              {/* Dot */}
              <div className="w-1.5 h-1.5 bg-gray-400 rounded-full mx-2"></div>

              {/* Right line */}
              <div className="flex-1 h-[1px] bg-gray-300"></div>

            </div>
            <ul className="space-y-3 text-sm flex-1">
              {[
                "Sales / checkout",
                "Basic products",
                "Receipt printing",
                "Basic reports",
                "1 device only"
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-3 text-gray-700">
                  <img src="check-mark.svg" className="w-4 h-4" />
                  {item}
                </li>
              ))}
            </ul>

            <div className="mt-6">
              <p className="text-xs text-gray-400 uppercase mb-2">
                Limitations
              </p>
              <ul className="space-y-2 text-sm text-gray-400">
                {["No customization", "No support", "No inventory"].map((item, i) => (
                  <li key={i} className="flex items-center gap-3">
                    <img src="cross.svg" className="w-3 h-3 opacity-70" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* BUSINESS (FEATURED) */}
          <div className="bg-[#0b0736] text-white p-8 rounded-2xl 
    shadow-[0_20px_50px_rgba(0,0,0,0.35)]
    transition duration-300 ease-out
    hover:-translate-y-3 hover:scale-[1.03]
    hover:shadow-[0_30px_80px_rgba(124,58,237,0.35)]
    hover:ring-2 hover:ring-purple-500/30
    relative z-10">

            <span className="absolute top-4 right-4 text-xs bg-purple-600 px-3 py-1 rounded-full">
              ⭐ Popular
            </span>

            <h3 className="text-lg font-semibold">Business Package</h3>
            <p className="text-xs text-purple-300 mb-4">for Growing Businesses</p>

            <p className="text-sm text-purple-200">Setup – {formatPrice(250)}</p>

            <p className="text-3xl font-bold mt-1">
              {formatPrice(50)}
              <span className="text-sm ml-1 text-gray-300 font-normal">/month</span>
            </p>

            <p className="text-sm text-gray-400 mt-1 mb-6">
              6 months contract
            </p>

            <button className="w-full py-2.5 rounded-lg bg-white text-purple-700 text-sm font-medium mb-6">
              Choose Plan
            </button>

            {/* Divider */}
            <div className="relative flex items-center justify-center my-6">

              {/* Left line */}
              <div className="flex-1 h-[1px] bg-gray-300"></div>

              {/* Dot */}
              <div className="w-1.5 h-1.5 bg-gray-400 rounded-full mx-2"></div>

              {/* Text badge */}
              <span className="px-3 py-1 text-[11px] font-medium 
    text-gray-800 
    bg-white 
    border border-purple-500/40 
    rounded-full 
    shadow-[0_2px_8px_rgba(124,58,237,0.15)]">
                WHAT YOU WILL GET
              </span>

              {/* Dot */}
              <div className="w-1.5 h-1.5 bg-gray-400 rounded-full mx-2"></div>

              {/* Right line */}
              <div className="flex-1 h-[1px] bg-gray-300"></div>

            </div>
            <ul className="space-y-3 text-sm">
              {[
                "Setup + Training",
                "Printer connection",
                "Basic support",
                "Sales / checkout",
                "Product management",
                "Inventory Management",
                "Receipt printing",
                "Cash management",
                "Reports",
                "2–3 users"
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-3">
                  <img src="check-mark.svg" className="w-4 h-4 invert" />
                  {item}
                </li>
              ))}
            </ul>

            <div className="mt-6">
              <p className="text-xs text-purple-300 mb-2">Additional Options</p>
              <ul className="space-y-2 text-sm text-purple-200/80">
                {[
                  "Customization (extra charges)",
                  "Hardware (extra charges)"
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3">
                    <img src="info.svg" className="w-4 h-4 invert opacity-70" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* ENTERPRISE */}
          <div className="bg-gradient-to-b from-purple-700 to-purple-900 text-white 
    p-7 rounded-2xl shadow-lg flex flex-col
    transition duration-300 ease-out
    hover:-translate-y-2 hover:shadow-[0_20px_60px_rgba(0,0,0,0.25)]">

            <h3 className="text-lg font-semibold">Enterprise Plan</h3>
            <p className="text-xs text-purple-200 mb-4">for Large Businesses</p>

            <p className="text-sm text-purple-200">Setup – {formatPrice(350)}</p>

            <p className="text-3xl font-bold mt-1">
              {formatPrice(100)}
              <span className="text-sm ml-1 font-normal">/month</span>
            </p>

            <p className="text-sm text-purple-200/80 mt-1 mb-6">
              12 months contract
            </p>

            <button className="w-full py-2.5 rounded-lg bg-white text-purple-700 text-sm font-medium mb-6">
              Contact Sales
            </button>

            {/* Divider */}
            <div className="relative flex items-center justify-center my-6">

              {/* Left line */}
              <div className="flex-1 h-[1px] bg-gray-300"></div>

              {/* Dot */}
              <div className="w-1.5 h-1.5 bg-gray-400 rounded-full mx-2"></div>

              {/* Text badge */}
              <span className="px-3 py-1 text-[11px] font-medium 
    text-gray-800 
    bg-white 
    border border-purple-500/40 
    rounded-full 
    shadow-[0_2px_8px_rgba(124,58,237,0.15)]">
                WHAT YOU WILL GET
              </span>

              {/* Dot */}
              <div className="w-1.5 h-1.5 bg-gray-400 rounded-full mx-2"></div>

              {/* Right line */}
              <div className="flex-1 h-[1px] bg-gray-300"></div>

            </div>

            <ul className="space-y-3 text-sm flex-1">
              {[
                "All Business features",
                "Priority support",
                "Multi-branch",
                "Central dashboard",
                "Unlimited users",
                "Advanced reports",
                "Customization"
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-3">
                  <img src="check-mark.svg" className="w-4 h-4 invert" />
                  {item}
                </li>
              ))}
            </ul>

            <div className="mt-6">
              <p className="text-xs text-purple-200 mb-2">Additional Options</p>
              <ul className="space-y-2 text-sm text-purple-200/80">
                {[
                  "Customization (extra charges)",
                  "Hardware (extra charges)"
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3">
                    <img src="info.svg" className="w-4 h-4 invert opacity-70" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
