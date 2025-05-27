export default function Contact() {

  const contactDetails = [
    {
      icon: "fas fa-envelope",
      label: "Email",
      value: "hello@webaren.com",
      gradient: "bg-primary"
    },
    {
      icon: "fas fa-phone",
      label: "Phone",
      value: "+1 (555) 123-4567",
      gradient: "bg-secondary"
    },
    {
      icon: "fas fa-map-marker-alt",
      label: "Office",
      value: "Remote. We work anywhere and everywhere.",
      gradient: "bg-accent"
    }
  ];

  const socialLinks = [
    { icon: "fab fa-twitter", href: "#" },
    { icon: "fab fa-linkedin", href: "#" },
    { icon: "fab fa-instagram", href: "#" },
    { icon: "fab fa-dribbble", href: "#" }
  ];

  return (
    <section id="contact" className="py-20 bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16">
          {/* Contact Info */}
          <div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Ready to Start Your 
              <span className="text-gradient bg-gradient-to-r from-blue-400 to-purple-400"> Project?</span>
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Let's discuss how we can help transform your digital presence and drive your business forward.
            </p>
            
            {/* Contact Details */}
            <div className="space-y-6 mb-8">
              {contactDetails.map((detail, index) => (
                <div key={index} className="flex items-center space-x-4">
                  <div className={`w-12 h-12 ${detail.gradient} rounded-full flex items-center justify-center`}>
                    <i className={`${detail.icon} text-white`}></i>
                  </div>
                  <div>
                    <p className="text-gray-300">{detail.label}</p>
                    <p className="text-white font-semibold">{detail.value}</p>
                  </div>
                </div>
              ))}
            </div>
            
            {/* Social Links */}
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <a 
                  key={index}
                  href={social.href}
                  className="w-12 h-12 bg-gray-800 rounded-full flex items-center justify-center hover:bg-primary transition-colors duration-200"
                >
                  <i className={`${social.icon} text-white`}></i>
                </a>
              ))}
            </div>
          </div>
          
          {/* Contact Actions */}
          <div className="bg-white rounded-2xl p-8 text-gray-900">
            <h3 className="text-2xl font-bold mb-6">Let's Start Your Project</h3>
            <p className="text-gray-600 mb-8">
              Ready to transform your digital presence? Choose the best way to connect with us:
            </p>
            
            <div className="space-y-4">
              {/* Email Us */}
              <a 
                href="mailto:hello@webaren.com?subject=Project Inquiry" 
                className="w-full bg-gradient-primary text-white py-4 px-6 rounded-lg font-semibold hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 flex items-center justify-center space-x-3"
              >
                <i className="fas fa-envelope"></i>
                <span>Email Us</span>
              </a>
              
              {/* Call Now */}
              <a 
                href="tel:+15551234567" 
                className="w-full bg-gradient-to-r from-blue-600 to-blue-700 text-white py-4 px-6 rounded-lg font-semibold hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 flex items-center justify-center space-x-3"
              >
                <i className="fas fa-phone"></i>
                <span>Call Us Now</span>
              </a>
              

              
              {/* LinkedIn */}
              <a 
                href="https://linkedin.com/company/webaren" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-full bg-blue-700 hover:bg-blue-800 text-white py-4 px-6 rounded-lg font-semibold hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 flex items-center justify-center space-x-3"
              >
                <i className="fab fa-linkedin"></i>
                <span>Connect on LinkedIn</span>
              </a>
            </div>
            
            <div className="mt-8 p-4 bg-gray-50 rounded-lg">
              <p className="text-sm text-gray-600 text-center">
                <i className="fas fa-clock mr-2"></i>
                We typically respond within 2 hours during business hours
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
