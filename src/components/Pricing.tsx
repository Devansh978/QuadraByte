import { Check, Star } from 'lucide-react';

const plans = [
  {
    name: 'Starter',
    price: 'Custom Quote',
    description: 'Perfect for small businesses and startups',
    features: [
      '5-10 pages website',
      'Responsive design',
      'Basic SEO setup',
      'Contact form',
      '1 month support',
      'Stock photos included',
    ],
    popular: false,
  },
  {
    name: 'Growth',
    price: 'Custom Quote',
    description: 'Ideal for growing businesses',
    features: [
      'Up to 20 pages',
      'Advanced animations',
      'CMS integration',
      'E-commerce setup',
      'API integrations',
      '3 months support',
      'SEO optimization',
      'Analytics setup',
    ],
    popular: true,
  },
  {
    name: 'Scale',
    price: 'Custom Quote',
    description: 'Enterprise-level solutions',
    features: [
      'Unlimited pages',
      'Custom web application',
      'Advanced integrations',
      'Dedicated team',
      'Priority support',
      '6 months support',
      'Performance optimization',
      'Security audits',
    ],
    popular: false,
  },
];

export default function Pricing() {
  return (
    <section id="pricing" className="py-24 bg-neutral">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-navy mb-4">
            Transparent Pricing
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Choose the package that fits your needs. All plans include quality code and modern design.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`bg-white rounded-2xl p-8 shadow-lg relative ${
                plan.popular ? 'ring-4 ring-coral card-hover scale-105' : 'card-hover'
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <div className="bg-coral text-white px-6 py-2 rounded-full text-sm font-bold flex items-center gap-2 shadow-lg">
                    <Star className="w-4 h-4 fill-current" />
                    Most Popular
                  </div>
                </div>
              )}

              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-navy mb-2">
                  {plan.name}
                </h3>
                <p className="text-gray-600 text-sm mb-4">{plan.description}</p>
                <div className="text-4xl font-bold text-navy">{plan.price}</div>
              </div>

              <ul className="space-y-4 mb-8">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-teal flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>

              <a
                href="#contact"
                className={`block text-center px-6 py-3 rounded-lg font-semibold transition-all ${
                  plan.popular
                    ? 'bg-coral text-white btn-glow'
                    : 'bg-navy text-white hover:bg-navy-light'
                }`}
              >
                Request Quote
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
