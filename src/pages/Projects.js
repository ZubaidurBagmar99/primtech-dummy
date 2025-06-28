import React, { useState } from 'react';
import { ArrowRight, MapPin, Calendar, CheckCircle, Clock } from 'lucide-react';
import projectsData from '../data/projects.json';

const Projects = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedStatus, setSelectedStatus] = useState('All');

  const categories = ['All', 'Commercial', 'Industrial', 'Residential'];
  const statuses = ['All', 'Completed', 'Ongoing'];

  const filteredProjects = projectsData.filter(project => {
    const categoryMatch = selectedCategory === 'All' || project.category === selectedCategory;
    const statusMatch = selectedStatus === 'All' || project.status === selectedStatus;
    return categoryMatch && statusMatch;
  });

  const stats = [
    { label: 'Total Projects', value: projectsData.length },
    { label: 'Completed', value: projectsData.filter(p => p.status === 'Completed').length },
    { label: 'Ongoing', value: projectsData.filter(p => p.status === 'Ongoing').length },
    { label: 'Client Satisfaction', value: '100%' },
  ];

  return (
    <div className="pt-16 lg:pt-20">
      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 bg-gradient-to-br from-primary-500 to-accent-500">
        <div className="container-custom text-center text-white">
          <div data-aos="fade-up">
            <h1 className="text-4xl lg:text-6xl font-heading font-bold mb-6">
              Our <span className="text-white">Projects</span>
            </h1>
            <p className="text-xl lg:text-2xl max-w-3xl mx-auto text-white/90">
              Showcasing our successful electromechanical projects across Bangladesh
            </p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center" data-aos="fade-up" data-aos-delay={index * 100}>
                <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-heading font-bold text-primary-600">{stat.value}</span>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{stat.label}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Filters Section */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-12" data-aos="fade-up">
            <h2 className="text-3xl lg:text-4xl font-heading font-bold text-gray-900 mb-4">
              Our <span className="text-gradient">Portfolio</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Explore our diverse range of projects across different sectors and locations
            </p>
          </div>

          {/* Filter Buttons */}
          <div className="flex flex-wrap justify-center gap-4 mb-8" data-aos="fade-up">
            <div className="flex flex-wrap justify-center gap-2">
              <span className="text-gray-700 font-medium mr-2">Category:</span>
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                    selectedCategory === category
                      ? 'bg-primary-500 text-white shadow-lg'
                      : 'bg-white text-gray-700 hover:bg-primary-50 border border-gray-200'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>

          <div className="flex flex-wrap justify-center gap-4 mb-12" data-aos="fade-up">
            <div className="flex flex-wrap justify-center gap-2">
              <span className="text-gray-700 font-medium mr-2">Status:</span>
              {statuses.map((status) => (
                <button
                  key={status}
                  onClick={() => setSelectedStatus(status)}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                    selectedStatus === status
                      ? 'bg-accent-500 text-white shadow-lg'
                      : 'bg-white text-gray-700 hover:bg-accent-50 border border-gray-200'
                  }`}
                >
                  {status}
                </button>
              ))}
            </div>
          </div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project, index) => (
              <div key={project.id} className="card overflow-hidden" data-aos="fade-up" data-aos-delay={index * 100}>
                <div className="h-48 bg-gradient-to-br from-primary-400 to-accent-400 flex items-center justify-center relative">
                  <span className="text-white font-semibold text-lg text-center px-4">{project.title}</span>
                  <div className="absolute top-4 right-4">
                    <span className={`text-xs font-medium px-3 py-1 rounded-full ${
                      project.status === 'Completed' 
                        ? 'text-green-600 bg-green-50' 
                        : 'text-orange-600 bg-orange-50'
                    }`}>
                      {project.status}
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-sm font-medium text-primary-600 bg-primary-50 px-3 py-1 rounded-full">
                      {project.category}
                    </span>
                    <span className="text-sm text-gray-500">{project.completionDate}</span>
                  </div>
                  <h3 className="text-xl font-heading font-semibold text-gray-900 mb-3">
                    {project.title}
                  </h3>
                  <div className="flex items-center text-gray-600 mb-3">
                    <MapPin className="w-4 h-4 mr-2" />
                    <span className="text-sm">{project.location}</span>
                  </div>
                  <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                    {project.description}
                  </p>
                  <div className="mb-4">
                    <h4 className="text-sm font-semibold text-gray-900 mb-2">Services Provided:</h4>
                    <div className="flex flex-wrap gap-2">
                      {project.services.slice(0, 2).map((service, idx) => (
                        <span key={idx} className="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded">
                          {service}
                        </span>
                      ))}
                      {project.services.length > 2 && (
                        <span className="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded">
                          +{project.services.length - 2} more
                        </span>
                      )}
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      {project.status === 'Completed' ? (
                        <CheckCircle className="w-4 h-4 text-green-500" />
                      ) : (
                        <Clock className="w-4 h-4 text-orange-500" />
                      )}
                      <span className="text-sm text-gray-600">{project.status}</span>
                    </div>
                    <button className="text-primary-600 hover:text-primary-700 font-medium text-sm inline-flex items-center">
                      View Details
                      <ArrowRight className="w-4 h-4 ml-1" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {filteredProjects.length === 0 && (
            <div className="text-center py-12" data-aos="fade-up">
              <div className="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl text-gray-400">🔍</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">No projects found</h3>
              <p className="text-gray-600">Try adjusting your filters to see more projects.</p>
            </div>
          )}
        </div>
      </section>

      {/* Project Categories Overview */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center mb-12" data-aos="fade-up">
            <h2 className="text-3xl lg:text-4xl font-heading font-bold text-gray-900 mb-4">
              Project <span className="text-gradient">Categories</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              We specialize in delivering electromechanical solutions across various sectors
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                category: 'Commercial',
                description: 'Office buildings, shopping malls, hotels, and retail spaces',
                count: projectsData.filter(p => p.category === 'Commercial').length,
                color: 'primary'
              },
              {
                category: 'Industrial',
                description: 'Manufacturing plants, factories, warehouses, and industrial facilities',
                count: projectsData.filter(p => p.category === 'Industrial').length,
                color: 'accent'
              },
              {
                category: 'Residential',
                description: 'Apartment complexes, housing projects, and residential developments',
                count: projectsData.filter(p => p.category === 'Residential').length,
                color: 'primary'
              }
            ].map((cat, index) => (
              <div key={cat.category} className="card p-6 text-center" data-aos="fade-up" data-aos-delay={index * 100}>
                <div className={`w-16 h-16 bg-${cat.color}-100 rounded-full flex items-center justify-center mx-auto mb-4`}>
                  <span className={`text-2xl font-heading font-bold text-${cat.color}-600`}>{cat.count}</span>
                </div>
                <h3 className="text-xl font-heading font-semibold text-gray-900 mb-3">
                  {cat.category}
                </h3>
                <p className="text-gray-600">
                  {cat.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding gradient-bg">
        <div className="container-custom text-center">
          <div data-aos="fade-up">
            <h2 className="text-3xl lg:text-4xl font-heading font-bold text-white mb-6">
              Ready to Start Your Project?
            </h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Let us help you bring your electromechanical vision to life with our expertise and experience
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:+8801999099003"
                className="bg-white text-primary-600 hover:bg-gray-50 font-semibold py-3 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl inline-flex items-center"
              >
                Call for Consultation
                <ArrowRight className="w-5 h-5 ml-2" />
              </a>
              <a
                href="https://wa.me/+8801999099003?text=Hello! I would like to discuss a project with Primtech."
                target="_blank"
                rel="noopener noreferrer"
                className="border-2 border-white text-white hover:bg-white hover:text-primary-600 font-semibold py-3 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 inline-flex items-center"
              >
                WhatsApp Us
                <ArrowRight className="w-5 h-5 ml-2" />
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Projects; 