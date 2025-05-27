export default function Services() {
  const services = [
    {
      icon: "fas fa-palette",
      title: "Web Design",
      description: "Modern, responsive designs that captivate your audience and drive conversions.",
      features: ["UI/UX Design", "Responsive Layout", "Brand Identity"],
      gradient: "bg-gradient-primary"
    },
    {
      icon: "fas fa-code",
      title: "Web Development",
      description: "Fast, secure, and scalable websites built with the latest technologies.",
      features: ["Custom Development", "CMS Integration", "Performance Optimization"],
      gradient: "bg-gradient-accent"
    },
    {
      icon: "fas fa-mobile-alt",
      title: "Mobile Apps",
      description: "Native and cross-platform mobile applications for iOS and Android.",
      features: ["Native Development", "Cross-Platform", "App Store Launch"],
      gradient: "bg-gradient-primary"
    },
    {
      icon: "fas fa-chart-line",
      title: "Digital Strategy",
      description: "Comprehensive digital strategies to grow your online presence and reach.",
      features: ["SEO Optimization", "Content Strategy", "Analytics & Insights"],
      gradient: "bg-gradient-accent"
    }
  ];

  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Our Services</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We offer comprehensive digital solutions to help your business thrive in the modern world
          </p>
        </div>
        
        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div key={index} className="service-card bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl">
              <div className={`w-16 h-16 ${service.gradient} rounded-2xl flex items-center justify-center mb-6`}>
                <i className={`${service.icon} text-white text-2xl`}></i>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">{service.title}</h3>
              <p className="text-gray-600 mb-6">
                {service.description}
              </p>
              <ul className="space-y-2 text-gray-600">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center">
                    <i className="fas fa-check text-accent mr-2"></i>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
