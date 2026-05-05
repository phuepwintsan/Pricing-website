import Link from "next/link";
export default function Hero() {
  return (
    <section className="relative w-full overflow-hidden bg-white md:bg-[#f7f6fb]">

      {/* BACKGROUND (ONLY DESKTOP) */}
      <div
        className="absolute inset-0 bg-no-repeat hidden md:block"
        style={{
          backgroundImage: "url('/HeroBanner.png')",
          backgroundSize: "2000px auto",
        }}
      ></div>

      {/* FADE (ONLY DESKTOP) */}
      <div className="absolute inset-0 hidden md:block bg-gradient-to-r from-white/90 via-white/70 to-white/90"></div>

      {/* CONTENT (UNCHANGED) */}
      <div className="relative max-w-6xl mx-auto px-12 pt-20 pb-28 text-center">

        {/* Badge */}
        <div className="inline-block mb-6">
          <span className="text-sm px-5 py-1.5 rounded-full border border-purple-200 text-purple-900 bg-white/80 backdrop-blur-md shadow-[0_4px_12px_rgba(0,0,0,0.08),0_0_12px_rgba(124,58,237,0.15)]">
            All-in-One Business System
          </span>
        </div>

        {/* Title */}
        <h1 className="text-4xl md:text-5xl font-semibold text-purple-900 leading-tight mb-6">
          Grow Your Business with Simple, <br />
          Reliable Software
        </h1>

        {/* Subtitle */}
        <p className="text-gray-600 text-base md:text-lg max-w-2xl mx-auto mb-10">
          Software solutions focused on reliability, performance, and long-term business growth.
        </p>

        <Link
          href="#contact"
          className="group inline-flex items-center gap-2.5
  px-8 py-3.5 rounded-xl
  text-sm font-semibold text-white
  bg-gradient-to-r from-purple-800 to-purple-900
  shadow-[0_10px_25px_rgba(124,58,237,0.28)]
  transition-all duration-300 ease-[cubic-bezier(0.22,1,0.36,1)]
  hover:-translate-y-1 hover:scale-[1.02]
  hover:shadow-[0_18px_40px_rgba(124,58,237,0.35)]
  active:scale-[0.98]
  relative overflow-hidden"
        >

          {/* Shine */}
          <span className="absolute inset-0 bg-white/10 opacity-0 
  group-hover:opacity-100 transition duration-300"></span>

          {/* Text */}
          <span className="relative z-10">
            Contact Us
          </span>
        </Link>

        {/* Image */}
        <div className="mt-20 flex justify-center">
          <img
            src="/main_pt.png"
            alt="POS System"
            className="w-full max-w-3xl object-contain"
          />
        </div>

      </div>
    </section>
  );
}