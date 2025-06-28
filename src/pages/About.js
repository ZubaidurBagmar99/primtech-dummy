import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Award, Users, Clock, Target, Eye, Heart } from 'lucide-react';

const About = () => {
  const leadership = [
    {
      name: 'Ahmed Rahman',
      position: 'Chief Executive Officer',
      experience: '15+ Years',
      expertise: 'Strategic Planning & Business Development',
      image: '/images/team/ceo.jpg'
    },
    {
      name: 'Fatima Khan',
      position: 'Technical Director',
      experience: '12+ Years',
      expertise: 'MEP Engineering & Project Management',
      image: '/images/team/technical-director.jpg'
    },
    {
      name: 'Mohammed Ali',
      position: 'Operations Manager',
      experience: '10+ Years',
      expertise: 'Operations & Quality Control',
      image: '/images/team/operations-manager.jpg'
    },
    {
      name: 'Sarah Ahmed',
      position: 'Head of Engineering',
      experience: '8+ Years',
      expertise: 'HVAC & Electrical Systems',
      image: '/images/team/head-engineering.jpg'
    }
  ];

  const milestones = [
    {
      year: '2014',
      title: 'Company Founded',
      description: 'Primtech Limited established with a vision to provide quality electromechanical solutions'
    },
    {
      year: '2016',
      title: 'First Major Project',
      description: 'Successfully completed our first large-scale commercial MEP project'
    },
    {
      year: '2018',
      title: 'ISO Certification',
      description: 'Achieved ISO 9001:2015 certification for quality management systems'
    },
    {
      year: '2020',
      title: 'Expansion',
      description: 'Expanded services to include solar systems and advanced security solutions'
    },
    {
      year: '2022',
      title: '150+ Projects',
      description: 'Milestone of completing over 150 successful projects across Bangladesh'
    },
    {
      year: '2024',
      title: 'Industry Leader',
      description: 'Recognized as one of the leading electromechanical companies in Bangladesh'
    }
  ];

  const values = [
    {
      icon: Target,
      title: 'Excellence',
      description: 'We strive for excellence in every project, ensuring the highest quality standards'
    },
    {
      icon: Heart,
      title: 'Integrity',
      description: 'Honest and transparent relationships with clients, partners, and stakeholders'
    },
    {
      icon: Users,
      title: 'Innovation',
      description: 'Embracing new technologies and innovative solutions for better results'
    },
    {
      icon: Award,
      title: 'Reliability',
      description: 'Consistent delivery of reliable and durable electromechanical solutions'
    }
  ];

  return (
    <div className="pt-16 lg:pt-20">
      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 bg-gradient-to-br from-primary-500 to-accent-500">
        <div className="container-custom text-center text-white">
          <div data-aos="fade-up">
            <h1 className="text-4xl lg:text-6xl font-heading font-bold mb-6">
              About <span className="text-white">Primtech</span>
            </h1>
            <p className="text-xl lg:text-2xl max-w-3xl mx-auto text-white/90">
              Leading the way in electromechanical engineering excellence since 2014
            </p>
          </div>
        </div>
      </section>

      {/* Company Story */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div data-aos="fade-right">
              <h2 className="text-3xl lg:text-4xl font-heading font-bold text-gray-900 mb-6">
                Our <span className="text-gradient">Story</span>
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                Founded in 2014, Primtech Limited has grown from a small engineering firm to one of 
                Bangladesh's leading electromechanical companies. Our journey has been marked by 
                continuous innovation, unwavering commitment to quality, and deep understanding of 
                our clients' needs.
              </p>
              <p className="text-lg text-gray-600 mb-6">
                We specialize in comprehensive MEP (Mechanical, Electrical, Plumbing) solutions, 
                HVAC systems, fire safety, CCTV security, solar power, and generator installations. 
                Our expertise spans across commercial, industrial, and residential sectors.
              </p>
              <p className="text-lg text-gray-600 mb-8">
                With over 150 successful projects and 500+ satisfied clients, we have established 
                ourselves as a trusted partner for turnkey electromechanical solutions. Our team of 
                certified engineers and technicians ensures that every project meets international 
                standards and exceeds client expectations.
              </p>
              <Link to="/contact" className="btn-primary inline-flex items-center">
                Get in Touch
                <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
            </div>
            <div data-aos="fade-left">
              <div className="bg-gradient-to-br from-primary-100 to-accent-100 rounded-2xl p-8">
                <div className="grid grid-cols-2 gap-6">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-primary-500 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Users className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-2xl font-heading font-bold text-gray-900 mb-2">500+</h3>
                    <p className="text-gray-600">Happy Clients</p>
                  </div>
                  <div className="text-center">
                    <div className="w-16 h-16 bg-accent-500 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Award className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-2xl font-heading font-bold text-gray-900 mb-2">150+</h3>
                    <p className="text-gray-600">Projects Completed</p>
                  </div>
                  <div className="text-center">
                    <div className="w-16 h-16 bg-primary-500 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Clock className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-2xl font-heading font-bold text-gray-900 mb-2">10+</h3>
                    <p className="text-gray-600">Years Experience</p>
                  </div>
                  <div className="text-center">
                    <div className="w-16 h-16 bg-accent-500 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Target className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-2xl font-heading font-bold text-gray-900 mb-2">100%</h3>
                    <p className="text-gray-600">Client Satisfaction</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-12" data-aos="fade-up">
            <h2 className="text-3xl lg:text-4xl font-heading font-bold text-gray-900 mb-4">
              Our <span className="text-gradient">Vision & Mission</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Driving innovation and excellence in electromechanical engineering
            </p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="card p-8" data-aos="fade-up" data-aos-delay="100">
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mb-6">
                <Eye className="w-8 h-8 text-primary-600" />
              </div>
              <h3 className="text-2xl font-heading font-bold text-gray-900 mb-4">Our Vision</h3>
              <p className="text-gray-600 text-lg">
                To be the leading electromechanical engineering company in Bangladesh, recognized for 
                innovation, quality, and sustainable solutions that contribute to the nation's 
                infrastructure development and technological advancement.
              </p>
            </div>
            <div className="card p-8" data-aos="fade-up" data-aos-delay="200">
              <div className="w-16 h-16 bg-accent-100 rounded-full flex items-center justify-center mb-6">
                <Target className="w-8 h-8 text-accent-600" />
              </div>
              <h3 className="text-2xl font-heading font-bold text-gray-900 mb-4">Our Mission</h3>
              <p className="text-gray-600 text-lg">
                To provide innovative, reliable, and sustainable electromechanical solutions that 
                exceed client expectations, while maintaining the highest standards of quality, 
                safety, and environmental responsibility.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center mb-12" data-aos="fade-up">
            <h2 className="text-3xl lg:text-4xl font-heading font-bold text-gray-900 mb-4">
              Our <span className="text-gradient">Core Values</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              The principles that guide everything we do
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="text-center" data-aos="fade-up" data-aos-delay={index * 100}>
                <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <value.icon className="w-8 h-8 text-primary-600" />
                </div>
                <h3 className="text-xl font-heading font-semibold text-gray-900 mb-3">
                  {value.title}
                </h3>
                <p className="text-gray-600">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership Team */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-12" data-aos="fade-up">
            <h2 className="text-3xl lg:text-4xl font-heading font-bold text-gray-900 mb-4">
              Our <span className="text-gradient">Leadership Team</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Meet the experienced professionals who drive our success
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {leadership.map((member, index) => (
              <div key={index} className="card text-center" data-aos="fade-up" data-aos-delay={index * 100}>
                <div className="h-48 bg-gradient-to-br from-primary-400 to-accent-400 rounded-t-xl flex items-center justify-center">
                  <span className="text-white font-semibold text-lg">{member.name}</span>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-heading font-semibold text-gray-900 mb-2">
                    {member.name}
                  </h3>
                  <p className="text-primary-600 font-medium mb-2">{member.position}</p>
                  <p className="text-sm text-gray-500 mb-3">{member.experience} Experience</p>
                  <p className="text-sm text-gray-600">{member.expertise}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center mb-12" data-aos="fade-up">
            <h2 className="text-3xl lg:text-4xl font-heading font-bold text-gray-900 mb-4">
              Our <span className="text-gradient">Journey</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Key milestones in our growth and development
            </p>
          </div>
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-1/2 transform -translate-x-px h-full w-0.5 bg-primary-200"></div>
            
            <div className="space-y-12">
              {milestones.map((milestone, index) => (
                <div key={index} className={`relative flex items-center ${
                  index % 2 === 0 ? 'justify-start' : 'justify-end'
                }`} data-aos={index % 2 === 0 ? 'fade-right' : 'fade-left'}>
                  <div className={`w-5/12 ${index % 2 === 0 ? 'pr-8 text-right' : 'pl-8 text-left'}`}>
                    <div className="card p-6">
                      <div className="text-2xl font-heading font-bold text-primary-600 mb-2">
                        {milestone.year}
                      </div>
                      <h3 className="text-xl font-heading font-semibold text-gray-900 mb-2">
                        {milestone.title}
                      </h3>
                      <p className="text-gray-600">
                        {milestone.description}
                      </p>
                    </div>
                  </div>
                  
                  {/* Timeline Dot */}
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-primary-500 rounded-full border-4 border-white shadow-lg"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding gradient-bg">
        <div className="container-custom text-center">
          <div data-aos="fade-up">
            <h2 className="text-3xl lg:text-4xl font-heading font-bold text-white mb-6">
              Ready to Work With Us?
            </h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Join hundreds of satisfied clients who have trusted Primtech for their electromechanical needs
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact" className="bg-white text-primary-600 hover:bg-gray-50 font-semibold py-3 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl inline-flex items-center">
                Start Your Project
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
              <Link to="/projects" className="border-2 border-white text-white hover:bg-white hover:text-primary-600 font-semibold py-3 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 inline-flex items-center">
                View Our Work
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About; 