import { Globe, ShoppingCart, Smartphone, Workflow, FileText, Wrench } from 'lucide-react';

const services = [
  {
    icon: Globe,
    title: 'Custom Websites',
    description: 'Tailored web solutions designed to match your brand and business goals perfectly.',
  },
  {
    icon: ShoppingCart,
    title: 'E-commerce & Payments',
    description: 'Secure online stores with seamless payment integration and inventory management.',
  },
  {
    icon: Smartphone,
    title: 'Web Apps & PWAs',
    description: 'Progressive web applications that work offline and feel like native mobile apps.',
  },
  {
    icon: Workflow,
    title: 'API & CRM Integration',
    description: 'Connect your tools and automate workflows with custom API integrations.',
  },
  {
    icon: FileText,
    title: 'CMS & Headless Setup',
    description: 'Flexible content management systems that empower your team to update easily.',
  },
  {
    icon: Wrench,
    title: 'Maintenance & Retainers',
    description: 'Ongoing support, updates, and optimization to keep your site running smoothly.',
  },
];

export default function Services() {
  return (
    <section id="services" className="py-12 sm:py-16 md:py-20 lg:py-24 bg-neutral">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-14 md:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-navy mb-3 sm:mb-4 px-4">
            What We Do Best
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-2xl mx-auto px-4">
            Full-service web development solutions to take your business to the next level
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7 md:gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={index}
                className="bg-white rounded-xl sm:rounded-2xl p-6 sm:p-7 md:p-8 card-hover shadow-lg group"
              >
                <div className="bg-gradient-to-br from-teal to-blue-500 w-14 h-14 sm:w-16 sm:h-16 rounded-xl flex items-center justify-center mb-5 sm:mb-6 group-hover:scale-110 transition-transform">
                  <Icon className="w-7 h-7 sm:w-8 sm:h-8 text-white" />
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-navy mb-2 sm:mb-3">
                  {service.title}
                </h3>
                <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                  {service.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}