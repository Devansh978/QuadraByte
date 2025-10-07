

const projects = [
  {
    title: 'E-Commerce Platform',
    category: 'Full-Stack Development',
    description: 'Built a scalable multi-vendor marketplace with payment integration, inventory management, and real-time order tracking.',
    image: 'https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=800',
    gradient: 'from-purple-500 to-pink-500',
  },
  {
    title: 'SaaS Dashboard',
    category: 'Web Application',
    description: 'Developed an analytics platform with interactive charts, user management, and API integrations for business intelligence.',
    image: 'https://images.pexels.com/photos/265087/pexels-photo-265087.jpeg?auto=compress&cs=tinysrgb&w=800',
    gradient: 'from-blue-500 to-cyan-500',
  },
  {
    title: 'Restaurant Website',
    category: 'Custom Website',
    description: 'Created a modern restaurant website with online reservations, menu management, and integrated delivery system.',
    image: 'https://images.pexels.com/photos/262978/pexels-photo-262978.jpeg?auto=compress&cs=tinysrgb&w=800',
    gradient: 'from-orange-500 to-red-500',
  },
  {
    title: 'Real Estate Portal',
    category: 'Web Platform',
    description: 'Designed a comprehensive property listing platform with advanced search filters, virtual tours, and lead management.',
    image: 'https://images.pexels.com/photos/323705/pexels-photo-323705.jpeg?auto=compress&cs=tinysrgb&w=800',
    gradient: 'from-green-500 to-teal-500',
  },
  {
    title: 'Fitness App',
    category: 'Progressive Web App',
    description: 'Built a PWA for workout tracking with offline support, progress analytics, and personalized training plans.',
    image: 'https://images.pexels.com/photos/841130/pexels-photo-841130.jpeg?auto=compress&cs=tinysrgb&w=800',
    gradient: 'from-yellow-500 to-orange-500',
  },
  {
    title: 'Financial Dashboard',
    category: 'Enterprise Solution',
    description: 'Engineered a secure financial management system with transaction monitoring, reporting, and compliance tools.',
    image: 'https://images.pexels.com/photos/187041/pexels-photo-187041.jpeg?auto=compress&cs=tinysrgb&w=800',
    gradient: 'from-indigo-500 to-purple-500',
  },
];

export default function Portfolio() {
  return (
    <section id="portfolio" className="py-12 sm:py-16 md:py-20 lg:py-24 bg-neutral">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-14 md:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-navy mb-3 sm:mb-4 px-4">
            Our Work
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-2xl mx-auto px-4">
            Explore our portfolio of successful projects and satisfied clients
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7 md:gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group relative rounded-xl sm:rounded-2xl overflow-hidden shadow-lg card-hover"
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-64 sm:h-72 md:h-80 object-cover"
              />
              <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-0 group-hover:opacity-95 transition-opacity duration-300 flex items-center justify-center p-4 sm:p-5 md:p-6`}>
                <div className="text-center text-white">
                  <h3 className="text-xl sm:text-2xl font-bold mb-1.5 sm:mb-2">{project.title}</h3>
                  <p className="text-white/90 text-xs sm:text-sm mb-2 sm:mb-3">{project.category}</p>
                  <p className="text-white/95 text-xs sm:text-sm leading-relaxed px-2">{project.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}