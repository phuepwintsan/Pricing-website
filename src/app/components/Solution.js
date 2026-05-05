import Link from "next/link";
export default function Solutions() {
  return (
    <section id="solution" className="w-full bg-white py-24">
      <div className="max-w-6xl mx-auto px-8">

        {/* Title */}
        <div className="text-center mb-20">
          <h2 className="text-xl font-semibold tracking-wide text-gray-900">
            SOLUTIONS
          </h2>
          <div className="mt-2 flex justify-center">
            <div className="w-5 h-[1px] bg-purple-600 rounded-full"></div>
          </div>
        </div>

        {/* Top Layout */}
        <div className="grid md:grid-cols-2 gap-16 items-center">

          {/* LEFT */}
          <div className="max-w-md">

            {/* Badge */}
            <span className="inline-block mb-5 text-xs px-4 py-1 rounded-full bg-purple-100 text-purple-600 shadow-sm">
              OUR POS SOLUTION
            </span>

            {/* Heading */}
            <h3 className="text-2xl font-semibold text-gray-900 mb-5">
              Point of Sale Solution
            </h3>

            {/* Description */}
            <p className="text-gray-600 leading-relaxed mb-8">
              Designed for modern businesses, our POS system helps you manage sales,
              control inventory, and make better decisions with ease.
            </p>

            {/* Features */}
            <div className="space-y-6 mb-10">

              {/* Item */}
              <div className="flex items-start gap-4">
                <div className="w-9 h-9 flex items-center justify-center rounded-full bg-purple-100">
                  <img src="shield-1.svg" className="w-4 h-4" />
                </div>
                <div>
                  <p className="font-medium text-gray-900">Reliable</p>
                  <p className="text-sm text-gray-600">
                    Engineered for stability and consistent performance
                  </p>
                </div>
              </div>

              {/* Item */}
              <div className="flex items-start gap-4">
                <div className="w-9 h-9 flex items-center justify-center rounded-full bg-purple-100">
                  <img src="user.svg" className="w-4 h-4" />
                </div>
                <div>
                  <p className="font-medium text-gray-900">User-Friendly</p>
                  <p className="text-sm text-gray-600">
                    Intuitive design for everyday use
                  </p>
                </div>
              </div>

              {/* Item */}
              <div className="flex items-start gap-4">
                <div className="w-9 h-9 flex items-center justify-center rounded-full bg-purple-100">
                  <img src="briefcase.svg" className="w-4 h-4" />
                </div>
                <div>
                  <p className="font-medium text-gray-900">Business-Oriented</p>
                  <p className="text-sm text-gray-600">
                    Designed to support growth and efficiency
                  </p>
                </div>
              </div>

            </div>

            <Link
              href="/#pricing"
              className="group inline-flex items-center gap-2
  px-8 py-3 rounded-xl
  text-sm font-semibold text-white
  bg-gradient-to-r from-purple-800 to-purple-900
  shadow-[0_8px_20px_rgba(124,58,237,0.25)]
  transition-all duration-300 ease-out
  hover:-translate-y-1 hover:scale-[1.02]
  hover:shadow-[0_15px_35px_rgba(124,58,237,0.35)]
  active:scale-[0.98]"
            >
              Explore Pricing

              <span className="transition-transform duration-300 group-hover:translate-x-1">
                →
              </span>
            </Link>
          </div>

          {/* RIGHT IMAGE */}
          <div className="flex justify-end">
            <img
              src="/main_pt.png"
              alt="POS UI"
              className="w-[600px] md:w-[720px] object-contain"
            />
          </div>

        </div>

        {/* Bottom Cards */}
        <div className="grid md:grid-cols-3 gap-6 mt-20">

          {/* Card */}
          <div className="group bg-white p-6 rounded-2xl border border-gray-200 
    shadow-[0_4px_14px_rgba(0,0,0,0.04)] 
    flex items-start gap-5 h-full
    transition duration-300 ease-out
    hover:-translate-y-2 hover:scale-[1.02]
    hover:shadow-[0_20px_40px_rgba(0,0,0,0.10)]
    hover:ring-1 hover:ring-purple-200">

            <div className="w-12 h-12 flex items-center justify-center 
      rounded-full bg-purple-900 shrink-0
      transition duration-300
      group-hover:bg-purple-700 group-hover:shadow-md">

              <img src="shopping.svg" className="w-5 h-5 opacity-90 group-hover:opacity-100" />
            </div>

            <div className="flex flex-col justify-start">
              <h3 className="text-[16px] font-medium text-gray-900 mb-1 min-h-[24px]">
                Easy Sales Management
              </h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                Handle transactions quickly and smoothly.
              </p>
            </div>
          </div>

          {/* Card */}
          <div className="group bg-white p-6 rounded-2xl border border-gray-200 
    shadow-[0_4px_14px_rgba(0,0,0,0.04)] 
    flex items-start gap-5 h-full
    transition duration-300 ease-out
    hover:-translate-y-2 hover:scale-[1.02]
    hover:shadow-[0_20px_40px_rgba(0,0,0,0.10)]
    hover:ring-1 hover:ring-purple-200">

            <div className="w-12 h-12 flex items-center justify-center 
      rounded-full bg-purple-900 shrink-0
      transition duration-300
      group-hover:bg-purple-700 group-hover:shadow-md">

              <img src="box.svg" className="w-5 h-5 opacity-90 group-hover:opacity-100" />
            </div>

            <div className="flex flex-col justify-start">
              <h3 className="text-[16px] font-medium text-gray-900 mb-1 min-h-[24px]">
                Real-Time Inventory
              </h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                Always know your stock at any time.
              </p>
            </div>
          </div>

          {/* Card */}
          <div className="group bg-white p-6 rounded-2xl border border-gray-200 
    shadow-[0_4px_14px_rgba(0,0,0,0.04)] 
    flex items-start gap-5 h-full
    transition duration-300 ease-out
    hover:-translate-y-2 hover:scale-[1.02]
    hover:shadow-[0_20px_40px_rgba(0,0,0,0.10)]
    hover:ring-1 hover:ring-purple-200">

            <div className="w-12 h-12 flex items-center justify-center 
      rounded-full bg-purple-900 shrink-0
      transition duration-300
      group-hover:bg-purple-700 group-hover:shadow-md">

              <img src="chart-bar.svg" className="w-5 h-5 opacity-90 group-hover:opacity-100" />
            </div>

            <div className="flex flex-col justify-start">
              <h3 className="text-[16px] font-medium text-gray-900 mb-1 min-h-[24px]">
                Clear Reports
              </h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                Understand your business performance.
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}