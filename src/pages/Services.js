import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle, X, Settings, Thermometer, Flame, Camera, Sun, Zap } from 'lucide-react';
import servicesData from '../data/services.json';

const Services = () => {
  const [selectedService, setSelectedService] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const iconMap = {
    Settings: Settings,
    Thermometer: Thermometer,
    Flame: Flame,
    Camera: Camera,
    Sun: Sun,
    Zap: Zap,
  };

  const openModal = (service) => {
    setSelectedService(service);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedService(null);
  };

  return (
    <div className="pt-16 lg:pt-20">
      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 bg-gradient-to-br from-primary-500 to-accent-500">
        <div className="container-custom text-center text-white">
          <div data-aos="fade-up">
            <h1 className="text-4xl lg:text-6xl font-heading font-bold mb-6">
              Our <span className="text-white">Services</span>
            </h1>
            <p className="text-xl lg:text-2xl max-w-3xl mx-auto text-white/90">
              Comprehensive electromechanical solutions for all your engineering needs
            </p>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center mb-12" data-aos="fade-up">
            <h2 className="text-3xl lg:text-4xl font-heading font-bold text-gray-900 mb-4">
              Complete <span className="text-gradient">Electromechanical Solutions</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              From design to installation and maintenance, we provide end-to-end electromechanical 
              services that ensure optimal performance, energy efficiency, and long-term reliability.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {servicesData.map((service, index) => {
              const IconComponent = iconMap[service.icon];
              return (
                <div key={service.id} className="card p-6 h-full" data-aos="fade-up" data-aos-delay={index * 100}>
                  <div className="w-16 h-16 bg-primary-100 rounded-xl flex items-center justify-center mb-6">
                    <IconComponent className="w-8 h-8 text-primary-600" />
                  </div>
                  <h3 className="text-2xl font-heading font-semibold text-gray-900 mb-4">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {service.description}
                  </p>
                  <div className="space-y-3 mb-6">
                    {service.features.slice(0, 3).map((feature, idx) => (
                      <div key={idx} className="flex items-center space-x-3">
                        <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                        <span className="text-gray-700 text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>
                  <button
                    onClick={() => openModal(service)}
                    className="w-full btn-primary"
                  >
                    Learn More
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </button>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Why Choose Our Services */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div data-aos="fade-right">
              <h2 className="text-3xl lg:text-4xl font-heading font-bold text-gray-900 mb-6">
                Why Choose Our <span className="text-gradient">Services?</span>
              </h2>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <CheckCircle className="w-6 h-6 text-primary-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-heading font-semibold text-gray-900 mb-2">
                      Expert Engineering Team
                    </h3>
                    <p className="text-gray-600">
                      Our certified engineers bring years of experience and technical expertise to every project.
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <CheckCircle className="w-6 h-6 text-primary-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-heading font-semibold text-gray-900 mb-2">
                      Quality Assurance
                    </h3>
                    <p className="text-gray-600">
                      ISO certified processes ensure consistent quality and adherence to international standards.
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <CheckCircle className="w-6 h-6 text-primary-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-heading font-semibold text-gray-900 mb-2">
                      Comprehensive Support
                    </h3>
                    <p className="text-gray-600">
                      From initial consultation to post-installation maintenance, we provide complete support.
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <CheckCircle className="w-6 h-6 text-primary-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-heading font-semibold text-gray-900 mb-2">
                      Energy Efficiency
                    </h3>
                    <p className="text-gray-600">
                      Sustainable solutions that reduce energy consumption and operational costs.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div data-aos="fade-left">
              <div className="bg-gradient-to-br from-primary-500 to-accent-500 rounded-2xl p-8 text-white">
                <h3 className="text-2xl font-heading font-bold mb-6">Service Highlights</h3>
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
                      <span className="text-sm font-bold">✓</span>
                    </div>
                    <span>Turnkey project solutions</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
                      <span className="text-sm font-bold">✓</span>
                    </div>
                    <span>24/7 technical support</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
                      <span className="text-sm font-bold">✓</span>
                    </div>
                    <span>Warranty & maintenance</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
                      <span className="text-sm font-bold">✓</span>
                    </div>
                    <span>Custom design solutions</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
                      <span className="text-sm font-bold">✓</span>
                    </div>
                    <span>Energy-efficient systems</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
                      <span className="text-sm font-bold">✓</span>
                    </div>
                    <span>Compliance with standards</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center mb-12" data-aos="fade-up">
            <h2 className="text-3xl lg:text-4xl font-heading font-bold text-gray-900 mb-4">
              Our <span className="text-gradient">Process</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              A systematic approach to delivering exceptional electromechanical solutions
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                step: '01',
                title: 'Consultation',
                description: 'Initial meeting to understand your requirements and project scope'
              },
              {
                step: '02',
                title: 'Design & Planning',
                description: 'Detailed engineering design and project planning with your approval'
              },
              {
                step: '03',
                title: 'Installation',
                description: 'Professional installation by our certified technicians'
              },
              {
                step: '04',
                title: 'Testing & Handover',
                description: 'Comprehensive testing and final handover with documentation'
              }
            ].map((process, index) => (
              <div key={index} className="text-center" data-aos="fade-up" data-aos-delay={index * 100}>
                <div className="w-20 h-20 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-2xl font-heading font-bold text-primary-600">{process.step}</span>
                </div>
                <h3 className="text-xl font-heading font-semibold text-gray-900 mb-3">
                  {process.title}
                </h3>
                <p className="text-gray-600">
                  {process.description}
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
              Ready to Get Started?
            </h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Contact us today for a free consultation and quote on your electromechanical project
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact" className="bg-white text-primary-600 hover:bg-gray-50 font-semibold py-3 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl inline-flex items-center">
                Get Free Quote
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
              <a
                href="tel:+8801999099003"
                className="border-2 border-white text-white hover:bg-white hover:text-primary-600 font-semibold py-3 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 inline-flex items-center"
              >
                Call Now
                <ArrowRight className="w-5 h-5 ml-2" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Service Modal */}
      {isModalOpen && selectedService && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            <div className="p-6 border-b border-gray-200">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center">
                    {(() => {
                      const IconComponent = iconMap[selectedService.icon];
                      return <IconComponent className="w-6 h-6 text-primary-600" />;
                    })()}
                  </div>
                  <h2 className="text-2xl font-heading font-bold text-gray-900">
                    {selectedService.title}
                  </h2>
                </div>
                <button
                  onClick={closeModal}
                  className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center hover:bg-gray-200 transition-colors"
                >
                  <X className="w-5 h-5 text-gray-600" />
                </button>
              </div>
            </div>
            <div className="p-6">
              <p className="text-gray-600 mb-6 leading-relaxed">
                {selectedService.description}
              </p>
              <h3 className="text-xl font-heading font-semibold text-gray-900 mb-4">
                Key Features
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                {selectedService.features.map((feature, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                    <span className="text-gray-700">{feature}</span>
                  </div>
                ))}
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  to="/contact"
                  onClick={closeModal}
                  className="btn-primary text-center"
                >
                  Get Quote
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
                <button
                  onClick={closeModal}
                  className="btn-secondary text-center"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Services; 