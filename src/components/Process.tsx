import { Lightbulb, Code, Rocket } from 'lucide-react';

const steps = [
  {
    icon: Lightbulb,
    title: 'Plan',
    description: 'We analyze your needs and create a strategic roadmap',
  },
  {
    icon: Code,
    title: 'Build',
    description: 'Our team develops your solution with cutting-edge tech',
  },
  {
    icon: Rocket,
    title: 'Launch',
    description: 'We deploy, test, and optimize for peak performance',
  },
];

export default function Process() {
  return (
    <section id="process" className="py-12 sm:py-16 md:py-20 lg:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-14 md:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-navy mb-3 sm:mb-4 px-4">
            Our Process
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-2xl mx-auto px-4">
            A streamlined approach to deliver your project on time and on budget
          </p>
        </div>

        <div className="relative">
          {/* Desktop connecting line */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-teal via-blue-500 to-coral transform -translate-y-1/2"></div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 sm:gap-10 md:gap-8 relative">
            {steps.map((step, index) => {
              const Icon = step.icon;
              return (
                <div key={index} className="text-center px-4 sm:px-0">
                  <div className="relative inline-block mb-5 sm:mb-6">
                    <div className="bg-gradient-to-br from-teal to-blue-500 w-20 h-20 sm:w-24 sm:h-24 rounded-full flex items-center justify-center shadow-xl hover:scale-110 transition-transform">
                      <Icon className="w-10 h-10 sm:w-12 sm:h-12 text-white" />
                    </div>
                    <div className="absolute -top-2 -right-2 bg-coral text-white w-7 h-7 sm:w-8 sm:h-8 rounded-full flex items-center justify-center font-bold text-xs sm:text-sm">
                      {index + 1}
                    </div>
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold text-navy mb-2 sm:mb-3">
                    {step.title}
                  </h3>
                  <p className="text-sm sm:text-base text-gray-600 leading-relaxed max-w-xs mx-auto">
                    {step.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}