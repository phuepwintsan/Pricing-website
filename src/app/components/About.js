import { ShieldCheck, ThumbsUp, TrendingUp } from "lucide-react";

export default function AboutSection() {
    return (
        <section id="about" className="w-full bg-white py-20">
            <div className="max-w-7xl mx-auto px-12 text-center">

                {/* Title */}
                <div className="text-center mb-6">
                    <h2 className="text-3xl md:text-4xl font-semibold text-gray-900">
                        Simplifying Your Business Operations
                    </h2>

                    {/* Purple line */}
                    <div className="mt-2 flex justify-center">
                        <div className="w-5 h-[1px] bg-purple-500 rounded-full"></div>
                    </div>
                </div>
                {/* Subtitle */}
                <p className="text-gray-600 max-w-4xl mx-auto text-base md:text-lg leading-relaxed mb-12">
                    <span className="font-semibold text-gray-800">Yatyarzar</span> is a software company focused on building simple and reliable solutions for modern businesses.
                    Helping businesses run faster, smarter, and more efficiently.
                </p>

                {/* Cards */}
                <div className="grid md:grid-cols-3 gap-8">

                    {/* Card 1 */}
                    <div className="bg-white rounded-xl p-6 text-left shadow-[0_4px_20px_rgba(0,0,0,0.06)] hover:shadow-[0_8px_28px_rgba(0,0,0,0.08)] transition">

                        <div className="w-10 h-10 flex items-center justify-center rounded-full bg-purple-100 shadow-sm mb-4">
                            <img src="shield.svg" alt="Reliable" className="w-5 h-5" />
                        </div>

                        <h3 className="font-semibold text-gray-900 mb-2">
                            Reliable Solutions
                        </h3>
                        <p className="text-gray-600 text-sm leading-relaxed">
                            Engineered for stability and long-term reliability
                        </p>
                    </div>


                    {/* Card 2 */}
                    <div className="bg-white rounded-xl p-6 text-left shadow-[0_4px_20px_rgba(0,0,0,0.06)] hover:shadow-[0_8px_28px_rgba(0,0,0,0.08)] transition">

                        <div className="w-10 h-10 flex items-center justify-center rounded-full bg-purple-100 shadow-sm mb-4">
                            <img src="thumbsup.svg" alt="Easy" className="w-5 h-5" />
                        </div>

                        <h3 className="font-semibold text-gray-900 mb-2">
                            Easy to Use
                        </h3>
                        <p className="text-gray-600 text-sm leading-relaxed">
                            Simple and intuitive for daily business needs
                        </p>
                    </div>


                    {/* Card 3 */}
                    <div className="bg-white rounded-xl p-6 text-left shadow-[0_4px_20px_rgba(0,0,0,0.06)] hover:shadow-[0_8px_28px_rgba(0,0,0,0.08)] transition">

                        <div className="w-10 h-10 flex items-center justify-center rounded-full bg-purple-100 shadow-sm mb-4">
                            <img src="trending.svg" alt="Growth" className="w-5 h-5" />
                        </div>

                        <h3 className="font-semibold text-gray-900 mb-2">
                            Business Growth
                        </h3>
                        <p className="text-gray-600 text-sm leading-relaxed">
                            Helping your business grow with confidence
                        </p>
                    </div>

                </div>

            </div>
        </section>
    );
}