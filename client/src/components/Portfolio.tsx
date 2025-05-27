import { useState } from "react";

export default function Portfolio() {
  const [activeFilter, setActiveFilter] = useState("All Projects");

  const filters = ["All Projects", "Websites", "Mobile Apps", "Branding"];

  const portfolioItems = [
    {
      title: "E-Commerce Platform",
      description: "Modern shopping experience with seamless checkout",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400",
      category: "Websites",
      gradient: "bg-gradient-primary"
    },
    {
      title: "Fitness Mobile App",
      description: "Intuitive fitness tracking with social features",
      image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400",
      category: "Mobile Apps",
      gradient: "bg-gradient-accent"
    },
    {
      title: "Corporate Website",
      description: "Professional presence with lead generation focus",
      image: "https://images.unsplash.com/photo-1551650975-87deedd944c3?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400",
      category: "Websites",
      gradient: "bg-gradient-primary"
    },
    {
      title: "Creative Portfolio",
      description: "Artistic showcase with interactive galleries",
      image: "https://images.unsplash.com/photo-1547658719-da2b51169166?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400",
      category: "Branding",
      gradient: "bg-gradient-accent"
    },
    {
      title: "FinTech Dashboard",
      description: "Secure financial management platform",
      image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400",
      category: "Websites",
      gradient: "bg-gradient-primary"
    },
    {
      title: "Restaurant Website",
      description: "Online ordering with reservation system",
      image: "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400",
      category: "Websites",
      gradient: "bg-gradient-accent"
    }
  ];

  const filteredItems = activeFilter === "All Projects" 
    ? portfolioItems 
    : portfolioItems.filter(item => item.category === activeFilter);

  return (
    <section id="portfolio" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Our Portfolio</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover our latest projects and see how we've helped businesses transform their digital presence
          </p>
        </div>
        
        {/* Portfolio Categories */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {filters.map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`px-6 py-3 rounded-full font-medium transition-all duration-200 ${
                activeFilter === filter
                  ? "bg-gradient-primary text-white shadow-lg"
                  : "bg-gray-100 text-gray-700 hover:bg-gray-200"
              }`}
            >
              {filter}
            </button>
          ))}
        </div>
        
        {/* Portfolio Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredItems.map((item, index) => (
            <div key={index} className="portfolio-item relative rounded-2xl overflow-hidden bg-white shadow-lg group">
              <img 
                src={item.image} 
                alt={item.title}
                className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className={`portfolio-overlay absolute inset-0 ${item.gradient}/90 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center`}>
                <div className="text-center text-white p-6">
                  <h3 className="text-2xl font-bold mb-2">{item.title}</h3>
                  <p className="mb-4">{item.description}</p>
                  <button className="bg-white text-primary px-6 py-2 rounded-full font-medium hover:bg-gray-100 transition-colors">
                    View Project
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
        

      </div>
    </section>
  );
}
