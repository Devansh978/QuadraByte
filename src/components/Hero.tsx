import { ArrowRight, Sparkles, Users, Calendar } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-br from-neutral via-white to-teal-50">
      <div className="absolute inset-0 bg-white/40"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-24 md:py-28 lg:py-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 md:gap-12 items-center">
          <div className="text-navy fade-in-up space-y-6 sm:space-y-7 md:space-y-8">
            <div className="flex flex-wrap gap-3 sm:gap-4">
              <div className="bg-white border border-teal/20 shadow-md px-3 sm:px-4 py-1.5 sm:py-2 rounded-full flex items-center gap-2 text-xs sm:text-sm text-navy font-medium">
                <Calendar className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-teal" />
                <span>4+ Years Experience</span>
              </div>
              <div className="bg-white border border-teal/20 shadow-md px-3 sm:px-4 py-1.5 sm:py-2 rounded-full flex items-center gap-2 text-xs sm:text-sm text-navy font-medium">
                <Users className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-teal" />
                <span>Full-Stack Team of 4</span>
              </div>
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight">
              We build fast, scalable websites
            </h1>

            <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-700 leading-relaxed">
              Modern web solutions that grow your business. From custom websites to complex web apps.
            </p>

            <div className="flex flex-col sm:flex-row flex-wrap gap-3 sm:gap-4">
              <a
                href="#contact"
                className="bg-coral text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg btn-glow font-semibold text-base sm:text-lg flex items-center justify-center gap-2 group"
              >
                Start Your Project
                <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform" />
              </a>
              <a
                href="#portfolio"
                className="border-2 border-navy text-navy px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold text-base sm:text-lg hover:bg-navy hover:text-white transition-all text-center"
              >
                View Our Work
              </a>
            </div>
          </div>

          <div className="relative mt-8 lg:mt-0 block">
            <div className="floating">
              <div className="bg-white rounded-xl sm:rounded-2xl p-5 sm:p-6 md:p-8 shadow-2xl border border-gray-200">
                <div className="space-y-3 sm:space-y-4">
                  <div className="flex items-center gap-2 sm:gap-3">
                    <Sparkles className="w-5 h-5 sm:w-6 sm:h-6 text-coral flex-shrink-0" />
                    <span className="text-navy font-semibold text-sm sm:text-base md:text-lg">Building Amazing Web Experiences</span>
                  </div>
                  <div className="bg-navy rounded-lg p-3 sm:p-4 font-mono text-xs sm:text-sm text-teal overflow-x-auto">
                    <div className="space-y-1.5 sm:space-y-2 min-w-max">
                      <div><span className="text-purple-400">const</span> <span className="text-blue-400">website</span> = <span className="text-yellow-400">QuadraByte</span>.<span className="text-blue-400">build</span>()</div>
                      <div className="pl-4"><span className="text-gray-400">/</span><span className="text-gray-400">/</span> Modern, Fast, Scalable</div>
                      <div><span className="text-purple-400">return</span> <span className="text-green-400">success</span> ✓</div>
                    </div>
                  </div>
                  <div className="grid grid-cols-3 gap-2 sm:gap-3 pt-2">
                    <div className="bg-gradient-to-br from-teal to-blue-500 rounded-lg p-2 sm:p-3 text-center">
                      <div className="text-xl sm:text-2xl font-bold text-white">50+</div>
                      <div className="text-xs text-white/90">Projects</div>
                    </div>
                    <div className="bg-gradient-to-br from-coral to-coral-light rounded-lg p-2 sm:p-3 text-center">
                      <div className="text-xl sm:text-2xl font-bold text-white">100%</div>
                      <div className="text-xs text-white/90">Satisfied</div>
                    </div>
                    <div className="bg-gradient-to-br from-navy to-navy-light rounded-lg p-2 sm:p-3 text-center">
                      <div className="text-xl sm:text-2xl font-bold text-white">24/7</div>
                      <div className="text-xs text-white/90">Support</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}