import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle, Star, Users, Award, Clock } from 'lucide-react';
import servicesData from '../data/services.json';
import projectsData from '../data/projects.json';

const Home = () => {
  const featuredProjects = projectsData.slice(0, 6);
  const featuredServices = servicesData.slice(0, 3);

  const stats = [
    { icon: Users, number: '500+', label: 'Happy Clients' },
    { icon: Award, number: '150+', label: 'Projects Completed' },
    { icon: Clock, number: '10+', label: 'Years Experience' },
  ];

  const testimonials = [
    {
      name: 'Ahmed Rahman',
      position: 'CEO, Dhaka Corporate Ltd.',
      content: 'Primtech delivered exceptional MEP solutions for our corporate tower. Their expertise and professionalism exceeded our expectations.',
      rating: 5,
    },
    {
      name: 'Fatima Khan',
      position: 'Project Manager, Industrial Complex',
      content: 'The team at Primtech is highly skilled and reliable. They completed our industrial project on time and within budget.',
      rating: 5,
    },
    {
      name: 'Mohammed Ali',
      position: 'Director, Residential Development',
      content: 'Outstanding service quality and attention to detail. Primtech transformed our vision into reality with their innovative solutions.',
      rating: 5,
    },
  ];

  const clients = [
    'Dhaka Corporate Ltd.',
    'Industrial Complex BD',
    'Residential Development Co.',
    'Shopping Mall Group',
    'Hospital Network',
    'Educational Trust',
  ];

  return (
    <div className="pt-16 lg:pt-20">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary-500/20 to-accent-500/20"></div>
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="relative z-10 container-custom text-center text-white">
          <div data-aos="fade-up">
            <h1 className="text-4xl lg:text-6xl xl:text-7xl font-heading font-bold mb-6">
              Electromechanical
              <span className="block text-gradient">Engineering Excellence</span>
            </h1>
            <p className="text-lg lg:text-xl mb-8 max-w-3xl mx-auto text-gray-200">
              Leading provider of comprehensive MEP, HVAC, Fire Safety, CCTV, Solar Systems, 
              and Generator Installation services across Bangladesh.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact" className="btn-primary text-lg">
                Get Free Quote
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
              <Link to="/projects" className="btn-secondary text-lg">
                View Our Projects
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center" data-aos="fade-up" data-aos-delay={index * 100}>
                <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <stat.icon className="w-8 h-8 text-primary-600" />
                </div>
                <h3 className="text-3xl lg:text-4xl font-heading font-bold text-gray-900 mb-2">
                  {stat.number}
                </h3>
                <p className="text-gray-600">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div data-aos="fade-right">
              <h2 className="text-3xl lg:text-4xl font-heading font-bold text-gray-900 mb-6">
                Your Trusted Partner in
                <span className="text-gradient"> Electromechanical Solutions</span>
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                Primtech Limited is a leading electromechanical engineering company specializing in 
                comprehensive MEP solutions, HVAC systems, fire safety, CCTV security, solar power, 
                and generator installations.
              </p>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                  <span className="text-gray-700">Turnkey project solutions</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                  <span className="text-gray-700">Expert engineering team</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                  <span className="text-gray-700">Quality assurance & maintenance</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                  <span className="text-gray-700">24/7 technical support</span>
                </div>
              </div>
              <Link to="/about" className="btn-primary mt-8 inline-flex items-center">
                Learn More About Us
                <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
            </div>
            <div data-aos="fade-left">
              <div className="bg-gradient-to-br from-primary-500 to-accent-500 rounded-2xl p-8 text-white">
                <h3 className="text-2xl font-heading font-bold mb-4">Why Choose Primtech?</h3>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-sm font-bold">1</span>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1">Expert Team</h4>
                      <p className="text-sm text-white/90">Certified engineers with years of experience</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-sm font-bold">2</span>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1">Quality Assurance</h4>
                      <p className="text-sm text-white/90">ISO certified processes and quality control</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-sm font-bold">3</span>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1">Timely Delivery</h4>
                      <p className="text-sm text-white/90">On-time project completion with efficiency</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center mb-12" data-aos="fade-up">
            <h2 className="text-3xl lg:text-4xl font-heading font-bold text-gray-900 mb-4">
              Our <span className="text-gradient">Services</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Comprehensive electromechanical solutions tailored to meet your specific requirements
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredServices.map((service, index) => (
              <div key={service.id} className="card p-6" data-aos="fade-up" data-aos-delay={index * 100}>
                <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mb-4">
                  <div className="w-6 h-6 bg-primary-500 rounded"></div>
                </div>
                <h3 className="text-xl font-heading font-semibold text-gray-900 mb-3">
                  {service.title}
                </h3>
                <p className="text-gray-600 mb-4">
                  {service.description}
                </p>
                <Link to="/services" className="text-primary-600 hover:text-primary-700 font-medium inline-flex items-center">
                  Learn More
                  <ArrowRight className="w-4 h-4 ml-1" />
                </Link>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link to="/services" className="btn-primary">
              View All Services
              <ArrowRight className="w-4 h-4 ml-2" />
            </Link>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-12" data-aos="fade-up">
            <h2 className="text-3xl lg:text-4xl font-heading font-bold text-gray-900 mb-4">
              Featured <span className="text-gradient">Projects</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Explore our portfolio of successful projects across commercial, industrial, and residential sectors
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredProjects.map((project, index) => (
              <div key={project.id} className="card overflow-hidden" data-aos="fade-up" data-aos-delay={index * 100}>
                <div className="h-48 bg-gradient-to-br from-primary-400 to-accent-400 flex items-center justify-center">
                  <span className="text-white font-semibold">{project.title}</span>
                </div>
                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-sm font-medium text-primary-600 bg-primary-50 px-3 py-1 rounded-full">
                      {project.category}
                    </span>
                    <span className={`text-sm font-medium px-3 py-1 rounded-full ${
                      project.status === 'Completed' 
                        ? 'text-green-600 bg-green-50' 
                        : 'text-orange-600 bg-orange-50'
                    }`}>
                      {project.status}
                    </span>
                  </div>
                  <h3 className="text-xl font-heading font-semibold text-gray-900 mb-2">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 mb-3">
                    {project.location}
                  </p>
                  <p className="text-gray-600 text-sm mb-4">
                    {project.description}
                  </p>
                  <Link to="/projects" className="text-primary-600 hover:text-primary-700 font-medium inline-flex items-center">
                    View Details
                    <ArrowRight className="w-4 h-4 ml-1" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link to="/projects" className="btn-primary">
              View All Projects
              <ArrowRight className="w-4 h-4 ml-2" />
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center mb-12" data-aos="fade-up">
            <h2 className="text-3xl lg:text-4xl font-heading font-bold text-gray-900 mb-4">
              What Our <span className="text-gradient">Clients Say</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Don't just take our word for it - hear from our satisfied clients
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="card p-6" data-aos="fade-up" data-aos-delay={index * 100}>
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-600 mb-6 italic">
                  "{testimonial.content}"
                </p>
                <div>
                  <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
                  <p className="text-sm text-gray-500">{testimonial.position}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Clients Section */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-12" data-aos="fade-up">
            <h2 className="text-3xl lg:text-4xl font-heading font-bold text-gray-900 mb-4">
              Trusted by <span className="text-gradient">Leading Companies</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              We've had the privilege of working with some of the most respected organizations
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center">
            {clients.map((client, index) => (
              <div key={index} className="text-center" data-aos="fade-up" data-aos-delay={index * 100}>
                <div className="h-16 bg-white rounded-lg flex items-center justify-center shadow-md hover:shadow-lg transition-shadow duration-300">
                  <span className="text-sm font-medium text-gray-700 px-4 text-center">
                    {client}
                  </span>
                </div>
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
              Get in touch with us today for a free consultation and quote on your electromechanical project
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
    </div>
  );
};

export default Home; 