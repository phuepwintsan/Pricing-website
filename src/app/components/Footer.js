export default function Footer() {
  return (
    <footer className="relative">

      {/* 🔥 Glass background */}
      <div className="backdrop-blur-xl bg-white/5 border-t border-white/10">

        {/* Glow line */}
        <div className="absolute top-0 left-0 w-full h-[1px] 
          bg-gradient-to-r from-transparent via-purple-500/40 to-transparent" />

        <div className="max-w-7xl mx-auto px-6 py-6 flex items-center justify-center">

          <p className="flex items-center gap-4 flex-wrap justify-center
            text-sm tracking-wide">

            {/* Gradient highlight */}
            <span className="bg-gradient-to-r from-purple-400 to-purple-600 
              bg-clip-text text-transparent font-medium">
              Made With Passion
            </span>

            {/* Dot */}
            <span className="w-1 h-1 bg-white/40 rounded-full"></span>

            {/* Rights */}
            <span className="text-gray-300 text-xs">
              All rights reserved
            </span>

            {/* Dot */}
            <span className="w-1 h-1 bg-white/30 rounded-full"></span>

            {/* Note */}
            <span className="text-gray-400 text-xs italic">
              Please use better ideas if you have one
            </span>

          </p>

        </div>
      </div>
    </footer>
  );
}