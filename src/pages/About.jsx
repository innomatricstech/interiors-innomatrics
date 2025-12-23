import React from 'react';

const About = () => {
  const teamMembers = [
    {
      name: 'Venugopal',
      position: 'Founder & CEO',
      description: '12+ years experience in glass manufacturing and installation',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&auto=format&fit=crop'
    },
    {
      name: 'Priya Sharma',
      position: 'Design Consultant',
      description: 'Specialist in modern glass design and architectural solutions',
      image: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=400&auto=format&fit=crop'
    },
    {
      name: 'Rajesh Kumar',
      position: 'Project Manager',
      description: 'Expert in large-scale commercial glass installations',
      image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&auto=format&fit=crop'
    },
    {
      name: 'Anjali Patel',
      position: 'Quality Control Head',
      description: 'Ensures highest standards in glass manufacturing',
      image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400&auto=format&fit=crop'
    }
  ];

  const milestones = [
    { year: '2012', title: 'Company Founded', description: 'Started with residential glass solutions' },
    { year: '2015', title: 'Commercial Expansion', description: 'Expanded to commercial glass projects' },
    { year: '2018', title: 'Designer Glass Division', description: 'Launched custom designer glass services' },
    { year: '2021', title: '500+ Projects', description: 'Successfully completed 500+ projects' },
    { year: '2023', title: 'New Technologies', description: 'Integrated advanced glass manufacturing tech' }
  ];

  return (
    <div className="pt-20">
      {/* Hero Banner */}
      <section className="bg-gradient-to-r from-blue-900 to-blue-700 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">About Sri Venu Glass</h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto opacity-90">
            Leading glass manufacturing and installation company with 12+ years of excellence
          </p>
        </div>
      </section>

      {/* Company Overview */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-block bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-semibold mb-4">
                Our Story
              </div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Pioneering Glass Solutions Since 2012
              </h2>
              <p className="text-gray-600 text-lg mb-6">
                Sri Venu Glass began as a small glass manufacturing unit in Bangalore with a vision 
                to transform spaces with premium glass solutions. Today, we stand as one of the leading 
                glass companies in the region, known for our quality craftsmanship and innovative designs.
              </p>
              <p className="text-gray-600 text-lg mb-8">
                With over 12 years of experience, we have successfully completed more than 500 projects 
                ranging from residential shower partitions to large commercial glass facades. Our commitment 
                to quality and customer satisfaction has been the cornerstone of our growth.
              </p>
              <div className="flex flex-wrap gap-4">
                <div className="bg-blue-50 rounded-xl p-6">
                  <div className="text-3xl font-bold text-blue-700 mb-2">12+</div>
                  <div className="text-gray-700">Years Experience</div>
                </div>
                <div className="bg-blue-50 rounded-xl p-6">
                  <div className="text-3xl font-bold text-blue-700 mb-2">500+</div>
                  <div className="text-gray-700">Projects Completed</div>
                </div>
                <div className="bg-blue-50 rounded-xl p-6">
                  <div className="text-3xl font-bold text-blue-700 mb-2">50+</div>
                  <div className="text-gray-700">Expert Team Members</div>
                </div>
              </div>
            </div>
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=800&auto=format&fit=crop" 
                alt="Glass Manufacturing" 
                className="rounded-2xl shadow-2xl"
              />
              <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-2xl shadow-xl">
                <div className="text-4xl font-bold text-blue-700">★ 4.9/5</div>
                <div className="text-gray-600">Customer Rating</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <div className="inline-block bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-semibold mb-4">
              Our Philosophy
            </div>
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Mission & Vision</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 text-blue-600 rounded-xl mb-6">
                <svg className="h-8 w-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Mission</h3>
              <p className="text-gray-600 mb-4">
                To provide innovative, high-quality glass solutions that enhance the aesthetic and 
                functional value of spaces while ensuring exceptional customer satisfaction through 
                professional service and reliable craftsmanship.
              </p>
            </div>
            
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 text-blue-600 rounded-xl mb-6">
                <svg className="h-8 w-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Vision</h3>
              <p className="text-gray-600 mb-4">
                To become the most trusted and innovative glass solution provider in the region, 
                recognized for excellence in design, quality, and customer service while pioneering 
                sustainable and cutting-edge glass technologies.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <div className="inline-block bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-semibold mb-4">
              Our Values
            </div>
            <h2 className="text-4xl font-bold text-gray-900 mb-6">What Drives Us</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: 'Quality First',
                description: 'We never compromise on the quality of materials or workmanship.',
                icon: (
                  <svg className="h-10 w-10" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                )
              },
              {
                title: 'Customer Focus',
                description: 'Understanding and exceeding customer expectations is our priority.',
                icon: (
                  <svg className="h-10 w-10" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.67 3.141a15.91 15.91 0 01-.67 2.031" />
                  </svg>
                )
              },
              {
                title: 'Innovation',
                description: 'Constantly exploring new designs and technologies in glass.',
                icon: (
                  <svg className="h-10 w-10" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                )
              },
              {
                title: 'Integrity',
                description: 'Honest communication and transparent business practices.',
                icon: (
                  <svg className="h-10 w-10" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                )
              }
            ].map((value, index) => (
              <div key={index} className="bg-gray-50 rounded-2xl p-8 text-center hover:shadow-xl transition-shadow">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 text-blue-600 rounded-xl mb-6 mx-auto">
                  {value.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <div className="inline-block bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-semibold mb-4">
              Our Journey
            </div>
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Milestones</h2>
          </div>
          
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-4 md:left-1/2 h-full w-1 bg-blue-200 transform md:-translate-x-1/2"></div>
            
            {milestones.map((milestone, index) => (
              <div 
                key={index} 
                className={`relative mb-12 md:w-1/2 ${index % 2 === 0 ? 'md:pr-12 md:text-right md:ml-auto' : 'md:pl-12 md:text-left'}`}
                style={{ marginLeft: index % 2 === 0 ? '0' : 'auto' }}
              >
                <div className="absolute left-2 md:left-1/2 w-4 h-4 bg-blue-600 rounded-full transform md:-translate-x-1/2"></div>
                <div className="ml-10 md:ml-0">
                  <div className="bg-white rounded-2xl p-6 shadow-lg">
                    <div className="text-blue-600 font-bold text-2xl mb-2">{milestone.year}</div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{milestone.title}</h3>
                    <p className="text-gray-600">{milestone.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <div className="inline-block bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-semibold mb-4">
              Meet Our Team
            </div>
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Expert Leadership</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our team of experienced professionals brings expertise and passion to every project
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <div key={index} className="text-center group">
                <div className="relative overflow-hidden rounded-2xl mb-6">
                  <img 
                    src={member.image} 
                    alt={member.name}
                    className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{member.name}</h3>
                <div className="text-blue-600 font-medium mb-2">{member.position}</div>
                <p className="text-gray-600 text-sm">{member.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-900 to-blue-700 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Work With Us?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
            Join hundreds of satisfied customers who have transformed their spaces with our premium glass solutions
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-blue-900 px-8 py-4 rounded-lg font-bold text-lg hover:bg-gray-100 transition-colors duration-300">
              Get Free Consultation
            </button>
            <button className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-white hover:text-blue-900 transition-colors duration-300">
              View Our Projects
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;