import React from 'react';

const About = () => {
  const teamMembers = [
    {
      name: 'Venugopal',
      position: 'Founder & CEO',
      description: '12+ years experience in glass manufacturing and installation',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=500&auto=format&fit=crop'
    },
    {
      name: 'Priya Sharma',
      position: 'Design Consultant',
      description: 'Specialist in modern glass design and architectural solutions',
      image: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=500&auto=format&fit=crop'
    },
    {
      name: 'Rajesh Kumar',
      position: 'Project Manager',
      description: 'Expert in large-scale commercial glass installations',
      image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=500&auto=format&fit=crop'
    },
    {
      name: 'Anjali Patel',
      position: 'Quality Control Head',
      description: 'Ensures highest standards in glass manufacturing',
      image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=500&auto=format&fit=crop'
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
    <div className="pt-20 relative overflow-hidden">
      {/* Blue Glass Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 via-sky-900/30 to-cyan-900/20 -z-10">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1519681393784-d120267933ba?w=1920&auto=format&fit=crop')] bg-cover bg-center opacity-10"></div>
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, rgba(59, 130, 246, 0.1) 1px, transparent 0)`,
          backgroundSize: '40px 40px'
        }}></div>
        <div className="absolute inset-0 bg-gradient-to-t from-blue-600/10 via-transparent to-cyan-500/10 mix-blend-overlay"></div>
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl"></div>
      </div>

      {/* Hero Banner with Glass Effect */}
      <section className="relative py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/90 via-sky-900/80 to-cyan-900/90 backdrop-blur-xl">
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1519681393784-d120267933ba?w=1920&auto=format&fit=crop')] bg-cover bg-center opacity-10"></div>
        </div>
        
        <div className="container mx-auto px-4 text-center relative">
          <div className="inline-block backdrop-blur-sm bg-gradient-to-r from-blue-600/20 to-cyan-600/20 border border-blue-400/30 text-white px-6 py-3 rounded-full text-sm font-semibold mb-8 shadow-lg shadow-blue-500/20">
            <span className="flex items-center justify-center gap-2">
              <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse"></div>
              Sri Venu Glass
            </span>
          </div>
          
          <h1 className="text-6xl md:text-7xl font-bold mb-8 bg-gradient-to-r from-white via-blue-100 to-cyan-100 bg-clip-text text-transparent">
            About Sri Venu Glass
          </h1>
          
          <p className="text-xl md:text-2xl max-w-3xl mx-auto opacity-90 text-gray-200 backdrop-blur-sm bg-white/5 rounded-2xl p-6 border border-white/10">
            Leading glass manufacturing and installation company with 12+ years of excellence in creating transparent masterpieces
          </p>
        </div>
      </section>

      {/* Company Overview with Glass Cards */}
      <section className="py-32 relative">
        <div className="container mx-auto px-4">
          <div className="backdrop-blur-xl bg-gradient-to-b from-white/80 via-white/60 to-white/40 rounded-3xl border border-white/20 shadow-2xl shadow-blue-900/10 p-8 md:p-12">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div>
                <div className="inline-flex items-center gap-2 backdrop-blur-sm bg-gradient-to-r from-blue-600/20 to-cyan-600/20 border border-blue-400/30 text-blue-800 px-5 py-2.5 rounded-full text-sm font-semibold mb-6">
                  <div className="w-2 h-2 bg-blue-600 rounded-full animate-pulse"></div>
                  Our Legacy
                </div>
                
                <h2 className="text-5xl font-bold text-gray-900 mb-8 bg-gradient-to-r from-blue-900 via-sky-900 to-cyan-900 bg-clip-text text-transparent">
                  Pioneering Glass Solutions Since 2012
                </h2>
                
                <div className="space-y-6">
                  <p className="text-gray-700 text-lg backdrop-blur-sm bg-white/40 rounded-xl p-5 border border-white/40 leading-relaxed">
                    Sri Venu Glass began as a small glass manufacturing unit in Bangalore with a vision 
                    to transform spaces with premium glass solutions. Today, we stand as one of the leading 
                    glass companies in the region, known for our quality craftsmanship and innovative designs.
                  </p>
                  
                  <p className="text-gray-700 text-lg backdrop-blur-sm bg-white/40 rounded-xl p-5 border border-white/40 leading-relaxed">
                    With over 12 years of experience, we have successfully completed more than 500 projects 
                    ranging from residential shower partitions to large commercial glass facades. Our commitment 
                    to quality and customer satisfaction has been the cornerstone of our growth.
                  </p>
                </div>
                
                {/* Stats with Glass Effect */}
                <div className="grid grid-cols-3 gap-6 mt-10">
                  {[
                    { value: '12+', label: 'Years Experience', color: 'from-blue-600/20 to-cyan-600/20' },
                    { value: '500+', label: 'Projects Completed', color: 'from-blue-600/20 to-sky-600/20' },
                    { value: '50+', label: 'Expert Team', color: 'from-cyan-600/20 to-blue-600/20' }
                  ].map((stat, index) => (
                    <div key={index} className="backdrop-blur-sm bg-gradient-to-br from-white/40 to-white/20 rounded-2xl p-6 border border-white/40 shadow-lg text-center">
                      <div className={`text-4xl font-bold bg-gradient-to-r ${stat.color} bg-clip-text text-transparent mb-2`}>
                        {stat.value}
                      </div>
                      <div className="text-gray-700 font-medium">{stat.label}</div>
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="relative">
                <div className="backdrop-blur-sm bg-gradient-to-br from-white/20 to-white/5 rounded-3xl p-2 border border-white/30 shadow-2xl shadow-blue-900/20">
                  <img 
                    src="https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=1200&auto=format&fit=crop" 
                    alt="Glass Manufacturing" 
                    className="rounded-2xl shadow-xl w-full h-auto"
                  />
                </div>
                
                {/* Floating Glass Rating Card */}
                <div className="absolute -bottom-8 -right-8 backdrop-blur-xl bg-gradient-to-br from-white/80 via-white/60 to-white/40 rounded-2xl p-6 shadow-2xl shadow-blue-900/20 border border-white/30 transform rotate-3">
                  <div className="flex items-center gap-3">
                    <div className="text-5xl font-bold bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
                      ★ 4.9
                    </div>
                    <div>
                      <div className="text-gray-900 font-bold">Customer Rating</div>
                      <div className="text-gray-600 text-sm">Based on 247 reviews</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision with Glass Effects */}
      <section className="py-32 relative">
        <div className="container mx-auto px-4">
          <div className="text-center mb-20">
            <div className="inline-flex items-center gap-2 backdrop-blur-sm bg-gradient-to-r from-blue-600/20 to-cyan-600/20 border border-blue-400/30 text-blue-800 px-5 py-2.5 rounded-full text-sm font-semibold mb-6">
              <div className="w-2 h-2 bg-blue-600 rounded-full animate-pulse"></div>
              Our Philosophy
            </div>
            <h2 className="text-5xl font-bold text-gray-900 mb-8 bg-gradient-to-r from-blue-900 via-sky-900 to-cyan-900 bg-clip-text text-transparent">
              Mission & Vision
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Mission Card */}
            <div className="backdrop-blur-xl bg-gradient-to-br from-white/70 via-white/50 to-white/30 rounded-3xl p-10 border border-white/30 shadow-2xl shadow-blue-900/10 hover:shadow-3xl hover:shadow-blue-900/20 transition-all duration-500 transform hover:-translate-y-2">
              <div className="inline-flex items-center justify-center w-20 h-20 backdrop-blur-sm bg-gradient-to-r from-blue-600/20 to-cyan-600/20 rounded-2xl mb-8 border border-blue-400/30">
                <svg className="h-10 w-10 text-blue-700" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-3xl font-bold text-gray-900 mb-6">Our Mission</h3>
              <p className="text-gray-700 text-lg leading-relaxed backdrop-blur-sm bg-white/40 rounded-xl p-5 border border-white/40">
                To provide innovative, high-quality glass solutions that enhance the aesthetic and 
                functional value of spaces while ensuring exceptional customer satisfaction through 
                professional service and reliable craftsmanship.
              </p>
            </div>
            
            {/* Vision Card */}
            <div className="backdrop-blur-xl bg-gradient-to-br from-white/70 via-white/50 to-white/30 rounded-3xl p-10 border border-white/30 shadow-2xl shadow-blue-900/10 hover:shadow-3xl hover:shadow-blue-900/20 transition-all duration-500 transform hover:-translate-y-2">
              <div className="inline-flex items-center justify-center w-20 h-20 backdrop-blur-sm bg-gradient-to-r from-cyan-600/20 to-blue-600/20 rounded-2xl mb-8 border border-cyan-400/30">
                <svg className="h-10 w-10 text-cyan-700" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                </svg>
              </div>
              <h3 className="text-3xl font-bold text-gray-900 mb-6">Our Vision</h3>
              <p className="text-gray-700 text-lg leading-relaxed backdrop-blur-sm bg-white/40 rounded-xl p-5 border border-white/40">
                To become the most trusted and innovative glass solution provider in the region, 
                recognized for excellence in design, quality, and customer service while pioneering 
                sustainable and cutting-edge glass technologies.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values with Glass Cards */}
      <section className="py-32 relative">
        <div className="container mx-auto px-4">
          <div className="text-center mb-20">
            <div className="inline-flex items-center gap-2 backdrop-blur-sm bg-gradient-to-r from-blue-600/20 to-cyan-600/20 border border-blue-400/30 text-blue-800 px-5 py-2.5 rounded-full text-sm font-semibold mb-6">
              <div className="w-2 h-2 bg-blue-600 rounded-full animate-pulse"></div>
              Our Values
            </div>
            <h2 className="text-5xl font-bold text-gray-900 mb-8 bg-gradient-to-r from-blue-900 via-sky-900 to-cyan-900 bg-clip-text text-transparent">
              What Drives Us
            </h2>
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
                ),
                color: 'from-blue-600/20 to-cyan-600/20'
              },
              {
                title: 'Customer Focus',
                description: 'Understanding and exceeding customer expectations is our priority.',
                icon: (
                  <svg className="h-10 w-10" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.67 3.141a15.91 15.91 0 01-.67 2.031" />
                  </svg>
                ),
                color: 'from-cyan-600/20 to-blue-600/20'
              },
              {
                title: 'Innovation',
                description: 'Constantly exploring new designs and technologies in glass.',
                icon: (
                  <svg className="h-10 w-10" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                ),
                color: 'from-blue-600/20 to-indigo-600/20'
              },
              {
                title: 'Integrity',
                description: 'Honest communication and transparent business practices.',
                icon: (
                  <svg className="h-10 w-10" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                ),
                color: 'from-indigo-600/20 to-blue-600/20'
              }
            ].map((value, index) => (
              <div 
                key={index} 
                className="group backdrop-blur-xl bg-gradient-to-br from-white/50 via-white/30 to-white/20 rounded-3xl p-8 border border-white/30 shadow-xl shadow-blue-900/10 hover:shadow-2xl hover:shadow-blue-900/20 transition-all duration-500 transform hover:-translate-y-2 text-center"
              >
                <div className={`inline-flex items-center justify-center w-20 h-20 backdrop-blur-sm bg-gradient-to-r ${value.color} rounded-2xl mb-6 mx-auto border border-white/30 group-hover:scale-110 transition-transform duration-500`}>
                  <div className="text-blue-700">
                    {value.icon}
                  </div>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{value.title}</h3>
                <p className="text-gray-700 leading-relaxed backdrop-blur-sm bg-white/40 rounded-xl p-4 border border-white/40">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline with Glass Effects */}
      <section className="py-32 relative">
        <div className="container mx-auto px-4">
          <div className="text-center mb-20">
            <div className="inline-flex items-center gap-2 backdrop-blur-sm bg-gradient-to-r from-blue-600/20 to-cyan-600/20 border border-blue-400/30 text-blue-800 px-5 py-2.5 rounded-full text-sm font-semibold mb-6">
              <div className="w-2 h-2 bg-blue-600 rounded-full animate-pulse"></div>
              Our Journey
            </div>
            <h2 className="text-5xl font-bold text-gray-900 mb-8 bg-gradient-to-r from-blue-900 via-sky-900 to-cyan-900 bg-clip-text text-transparent">
              Milestones
            </h2>
          </div>
          
          <div className="relative">
            {/* Glass Timeline Line */}
            <div className="absolute left-4 md:left-1/2 h-full w-1 backdrop-blur-sm bg-gradient-to-b from-blue-600/30 via-cyan-600/30 to-blue-600/30 transform md:-translate-x-1/2"></div>
            
            {milestones.map((milestone, index) => (
              <div 
                key={index} 
                className={`relative mb-16 md:w-1/2 ${index % 2 === 0 ? 'md:pr-16 md:text-right md:ml-auto' : 'md:pl-16 md:text-left'}`}
                style={{ marginLeft: index % 2 === 0 ? '0' : 'auto' }}
              >
                {/* Glass Timeline Dot */}
                <div className="absolute left-2 md:left-1/2 w-6 h-6 backdrop-blur-sm bg-gradient-to-r from-blue-600 to-cyan-600 rounded-full transform md:-translate-x-1/2 border-2 border-white shadow-lg"></div>
                
                <div className="ml-10 md:ml-0">
                  <div className="backdrop-blur-xl bg-gradient-to-br from-white/60 via-white/40 to-white/30 rounded-3xl p-8 border border-white/30 shadow-2xl shadow-blue-900/10 hover:shadow-3xl hover:shadow-blue-900/20 transition-all duration-500 transform hover:-translate-y-2">
                    <div className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent mb-4">
                      {milestone.year}
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">{milestone.title}</h3>
                    <p className="text-gray-700 backdrop-blur-sm bg-white/40 rounded-xl p-4 border border-white/40">
                      {milestone.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section with Glass Cards */}
      <section className="py-32 relative">
        <div className="container mx-auto px-4">
          <div className="text-center mb-20">
            <div className="inline-flex items-center gap-2 backdrop-blur-sm bg-gradient-to-r from-blue-600/20 to-cyan-600/20 border border-blue-400/30 text-blue-800 px-5 py-2.5 rounded-full text-sm font-semibold mb-6">
              <div className="w-2 h-2 bg-blue-600 rounded-full animate-pulse"></div>
              Our Team
            </div>
            <h2 className="text-5xl font-bold text-gray-900 mb-8 bg-gradient-to-r from-blue-900 via-sky-900 to-cyan-900 bg-clip-text text-transparent">
              Expert Leadership
            </h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto backdrop-blur-sm bg-white/40 rounded-2xl p-6 border border-white/40">
              Our team of experienced professionals brings expertise and passion to every project, ensuring excellence in every detail
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <div key={index} className="group">
                <div className="backdrop-blur-xl bg-gradient-to-br from-white/50 via-white/30 to-white/20 rounded-3xl overflow-hidden border border-white/30 shadow-2xl shadow-blue-900/10 hover:shadow-3xl hover:shadow-blue-900/20 transition-all duration-500 transform hover:-translate-y-3">
                  {/* Team Member Image */}
                  <div className="relative h-72 overflow-hidden">
                    <img 
                      src={member.image} 
                      alt={member.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    {/* Glass Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  </div>
                  
                  {/* Team Member Info */}
                  <div className="p-6">
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">{member.name}</h3>
                    <div className="text-lg font-semibold bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent mb-3">
                      {member.position}
                    </div>
                    <p className="text-gray-700 backdrop-blur-sm bg-white/40 rounded-xl p-4 border border-white/40">
                      {member.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section with Glass Effect */}
      <section className="py-32 relative">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/90 via-sky-900/80 to-cyan-900/90 backdrop-blur-xl">
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1519681393784-d120267933ba?w=1920&auto=format&fit=crop')] bg-cover bg-center opacity-10"></div>
        </div>
        
        <div className="container mx-auto px-4 text-center relative">
          <h2 className="text-5xl font-bold mb-8 bg-gradient-to-r from-white via-blue-100 to-cyan-100 bg-clip-text text-transparent">
            Ready to Work With Us?
          </h2>
          
          <p className="text-xl mb-10 max-w-2xl mx-auto text-gray-200 backdrop-blur-sm bg-white/5 rounded-2xl p-6 border border-white/10">
            Join hundreds of satisfied customers who have transformed their spaces with our premium glass solutions
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <button className="group relative overflow-hidden backdrop-blur-sm bg-gradient-to-r from-white to-gray-100 text-blue-900 px-10 py-5 rounded-xl font-bold text-lg hover:shadow-2xl hover:shadow-white/20 transition-all duration-300">
              <span className="relative z-10">Get Free Consultation</span>
              <div className="absolute inset-0 bg-gradient-to-r from-gray-100 to-white opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </button>
            
            <button className="group relative overflow-hidden backdrop-blur-sm bg-transparent border-2 border-white text-white px-10 py-5 rounded-xl font-bold text-lg hover:bg-white hover:text-blue-900 transition-all duration-300">
              <span className="relative z-10">View Our Projects</span>
              <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;