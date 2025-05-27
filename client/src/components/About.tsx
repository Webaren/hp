export default function About() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offsetTop = element.offsetTop - 80;
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth'
      });
    }
  };

  const stats = [
    { number: "500+", label: "Projects Completed" },
    { number: "98%", label: "Client Satisfaction" },
    { number: "50+", label: "Team Members" },
    { number: "8+", label: "Years Experience" }
  ];

  return (
    <section id="about" className="py-20 bg-gradient-to-br from-gray-50 via-white to-purple-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* About Content */}
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              We're More Than Just a 
              <span className="text-gradient"> Web Agency</span>
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              For over 8 years, we've been crafting digital experiences that not only look stunning 
              but also drive real business results. Our team of passionate designers and developers 
              work collaboratively to bring your vision to life.
            </p>
            
            {/* Stats */}
            <div className="grid grid-cols-2 gap-8 mb-8">
              {stats.map((stat, index) => (
                <div key={index}>
                  <div className={`text-3xl font-bold mb-2 ${
                    index === 0 ? 'text-primary' :
                    index === 1 ? 'text-secondary' :
                    index === 2 ? 'text-accent' : 'text-primary'
                  }`}>
                    {stat.number}
                  </div>
                  <div className="text-gray-600">{stat.label}</div>
                </div>
              ))}
            </div>
            
            {/* CTA */}
            <div className="flex flex-col sm:flex-row gap-4">
              <button 
                onClick={() => scrollToSection('contact')}
                className="bg-gradient-primary text-white px-8 py-4 rounded-full font-semibold hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 text-center"
              >
                Work With Us
              </button>
              <button className="border-2 border-primary text-primary px-8 py-4 rounded-full font-semibold hover:bg-primary hover:text-white transition-all duration-300 text-center">
                Our Process
              </button>
            </div>
          </div>
          
          {/* About Image */}
          <div className="relative">
            <img 
              src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600" 
              alt="Web agency team brainstorming" 
              className="rounded-2xl shadow-2xl w-full"
            />
            

            
            <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-xl shadow-xl" style={{animation: 'float 3s ease-in-out infinite', animationDelay: '1.5s'}}>
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-accent rounded-full flex items-center justify-center">
                  <i className="fas fa-users text-white text-xl"></i>
                </div>
                <div>
                  <p className="font-semibold text-gray-900">Expert Team</p>
                  <p className="text-gray-600 text-sm">50+ Specialists</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
