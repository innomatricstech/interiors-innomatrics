import React from 'react';
import { Award, Shield, Users, Clock, CheckCircle, Headphones, Zap, ChevronRight } from 'lucide-react';

const WhyChooseUs = () => {
  const features = [
    {
      icon: <Award className="h-12 w-12" />,
      title: 'We are Professionals',
      description: 'We have well-trained professionals specialized in the glass industry. Glass should be handled with care; we are equipped and experienced.',
      gradient: 'from-blue-600 to-cyan-600'
    },
    {
      icon: <Shield className="h-12 w-12" />,
      title: 'We are Trusted',
      description: 'Profoundly committed to fulfilling customer needs. Our professionally trained experts are available for you anytime.',
      gradient: 'from-blue-600 to-sky-600'
    },
    {
      icon: <Users className="h-12 w-12" />,
      title: 'We are Expert',
      description: 'Whether it\'s a small piece of glass or an entire project, we provide quick, reliable service with expert craftsmanship.',
      gradient: 'from-sky-600 to-blue-600'
    },
    {
      icon: <Headphones className="h-12 w-12" />,
      title: 'We\'re here to help',
      description: 'Our team puts knowledge and enthusiasm into every project. We tackle even the trickiest jobs with confidence.',
      gradient: 'from-cyan-600 to-blue-600'
    },
    {
      icon: <Clock className="h-12 w-12" />,
      title: '12+ Years Experience',
      description: 'Over a decade of experience in the glass industry ensures quality workmanship and reliable solutions.',
      gradient: 'from-blue-600 to-indigo-600'
    },
    {
      icon: <CheckCircle className="h-12 w-12" />,
      title: 'Quality Guarantee',
      description: 'Every installation comes with our quality guarantee. We ensure 100% customer satisfaction.',
      gradient: 'from-indigo-600 to-blue-600'
    }
  ];

  const processSteps = [
    { step: '01', title: 'Reach Us', description: 'Initial contact and consultation' },
    { step: '02', title: 'Discussion', description: 'Detailed project requirements' },
    { step: '03', title: 'Rough Measurement', description: 'On-site assessment' },
    { step: '04', title: 'Design & Ideas', description: 'Creative visualization' },
    { step: '05', title: 'Quote', description: 'Transparent pricing' },
    { step: '06', title: 'Contract', description: 'Formal agreement' },
    { step: '07', title: 'Final Measurement', description: 'Precise measurements' },
    { step: '08', title: 'Start Work', description: 'Begin installation' },
    { step: '09', title: 'Finish Work', description: 'Quality inspection & handover' }
  ];

  return (
    <section className="relative py-32 overflow-hidden">
      {/* Luxury Glass Interior Background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-slate-900 to-black">
          {/* Glass panel reflections */}
          <div className="absolute inset-0 opacity-20" style={{
            backgroundImage: `
              linear-gradient(45deg, rgba(255,255,255,0.05) 25%, transparent 25%),
              linear-gradient(-45deg, rgba(255,255,255,0.05) 25%, transparent 25%),
              linear-gradient(45deg, transparent 75%, rgba(255,255,255,0.05) 75%),
              linear-gradient(-45deg, transparent 75%, rgba(255,255,255,0.05) 75%)
            `,
            backgroundSize: '40px 40px'
          }}></div>
        </div>
      </div>

      <div className="container mx-auto px-4 relative">
        {/* Premium Container with Glass Morphism */}
        <div className="backdrop-blur-xl bg-gradient-to-b from-white/10 to-white/5 rounded-[40px] border border-white/20 shadow-2xl p-8 md:p-16">
          
          {/* Header with Glass Effect */}
          <div className="text-center mb-20 relative">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-cyan-600/10 blur-3xl rounded-full"></div>
            
            <div className="relative">
              <div className="inline-flex items-center gap-2 backdrop-blur-sm bg-gradient-to-r from-blue-600/20 to-cyan-600/20 border border-blue-400/30 text-white px-6 py-3 rounded-full text-sm font-semibold mb-8 shadow-lg shadow-blue-500/20">
                <Zap className="h-4 w-4" />
                Why Choose Sri Ayyappan Glass
              </div>
              
              <h2 className="text-5xl md:text-6xl font-bold mb-8">
                <span className="bg-gradient-to-r from-white via-cyan-100 to-blue-100 bg-clip-text text-transparent">
                  Excellence in Every Installation
                </span>
              </h2>
              
              <div className="max-w-3xl mx-auto">
                <p className="text-xl text-gray-300 leading-relaxed backdrop-blur-sm bg-white/5 rounded-2xl p-8 border border-white/10">
                  We combine expertise, quality materials, and professional service to deliver 
                  glass solutions that exceed expectations. Experience the perfect blend of 
                  craftsmanship, innovation, and reliability.
                </p>
              </div>
            </div>
          </div>

          {/* Features Grid with Glass Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
            {features.map((feature, index) => (
              <div
                key={index}
                className="backdrop-blur-xl bg-gradient-to-br from-white/10 to-white/5 rounded-3xl p-8 border border-white/20 shadow-xl shadow-blue-900/10"
              >
                {/* Icon Container */}
                <div className={`inline-flex items-center justify-center w-20 h-20 backdrop-blur-sm bg-gradient-to-r ${feature.gradient} text-white rounded-2xl mb-6`}>
                  {feature.icon}
                </div>
                
                <h3 className="text-2xl font-bold text-white mb-4">
                  {feature.title}
                </h3>
                
                <p className="text-gray-300 backdrop-blur-sm bg-white/10 rounded-xl p-4 border border-white/20">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>

          {/* Process Timeline with Glass Effects */}
          <div className="relative rounded-3xl overflow-hidden mb-20">
            {/* Background with Glass Effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-blue-900/90 via-sky-900/80 to-cyan-900/90 backdrop-blur-xl">
              <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1519681393784-d120267933ba?w=1920&auto=format&fit=crop')] bg-cover bg-center opacity-10"></div>
              {/* Crystal texture overlay */}
              <div className="absolute inset-0 opacity-20" style={{
                backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M11 18c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm48 25c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm-43-7c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm63 31c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM34 90c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm56-76c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM12 86c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm28-65c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm23-11c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-6 60c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm29 22c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zM32 63c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm57-13c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-9-21c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM60 91c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM35 41c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM12 60c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2z' fill='%23ffffff' fill-opacity='0.1' fill-rule='evenodd'/%3E%3C/svg%3E")`,
                backgroundSize: '150px 150px'
              }}></div>
            </div>
            
            <div className="relative p-12 md:p-16">
              <div className="text-center mb-12">
                <div className="inline-flex items-center gap-2 backdrop-blur-sm bg-gradient-to-r from-blue-600/30 to-cyan-600/30 border border-blue-400/40 text-white px-6 py-3 rounded-full text-sm font-semibold mb-6 shadow-lg shadow-blue-500/30">
                  <div className="w-2 h-2 bg-blue-300 rounded-full"></div>
                  Our Work Process
                </div>
                
                <h3 className="text-4xl md:text-5xl font-bold text-white mb-6">
                  How We Work
                </h3>
                
                <p className="text-xl text-gray-200 max-w-3xl mx-auto backdrop-blur-sm bg-white/5 rounded-2xl p-6 border border-white/10 leading-relaxed">
                  From your initial contact to project completion, we're with you at every step, 
                  ensuring transparency, quality, and satisfaction throughout the journey.
                </p>
              </div>

              {/* Process Steps */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-9 gap-4">
                {processSteps.map((step, index) => (
                  <div key={index} className="relative">
                    <div className="backdrop-blur-sm bg-white/10 rounded-2xl p-6 text-center border border-white/20">
                      <div className="text-3xl font-bold bg-gradient-to-r from-blue-300 to-cyan-300 bg-clip-text text-transparent mb-3">
                        {step.step}
                      </div>
                      <div className="font-semibold text-white mb-2">{step.title}</div>
                      <div className="text-sm text-blue-100 opacity-80">{step.description}</div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Process Timeline Note */}
              <div className="mt-12 backdrop-blur-sm bg-white/5 rounded-2xl p-6 border border-white/10 max-w-2xl mx-auto text-center">
                <div className="flex flex-wrap justify-center gap-6">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 bg-blue-400 rounded-full"></div>
                    <span className="text-gray-300">Average Timeline: 7-14 Days</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                    <span className="text-gray-300">Free 3D Visualization</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 bg-cyan-400 rounded-full"></div>
                    <span className="text-gray-300">On-site Support Available</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Additional Benefits */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Customer Support */}
            <div className="backdrop-blur-xl bg-gradient-to-br from-white/10 to-white/5 rounded-3xl p-8 border border-white/20 shadow-xl shadow-blue-900/10">
              <div className="flex items-start gap-6">
                <div className="backdrop-blur-sm bg-gradient-to-r from-blue-600 to-cyan-600 p-4 rounded-2xl">
                  <Headphones className="h-8 w-8 text-white" />
                </div>
                <div>
                  <h4 className="text-2xl font-bold text-white mb-4">24/7 Customer Support</h4>
                  <p className="text-gray-300 backdrop-blur-sm bg-white/10 rounded-xl p-4 border border-white/20">
                    Our dedicated support team is available round the clock to address 
                    your queries and concerns. We believe in building lasting relationships 
                    with our clients.
                  </p>
                </div>
              </div>
            </div>

            {/* Quality Assurance */}
            <div className="backdrop-blur-xl bg-gradient-to-br from-white/10 to-white/5 rounded-3xl p-8 border border-white/20 shadow-xl shadow-blue-900/10">
              <div className="flex items-start gap-6">
                <div className="backdrop-blur-sm bg-gradient-to-r from-cyan-600 to-blue-600 p-4 rounded-2xl">
                  <Shield className="h-8 w-8 text-white" />
                </div>
                <div>
                  <h4 className="text-2xl font-bold text-white mb-4">5-Year Warranty</h4>
                  <p className="text-gray-300 backdrop-blur-sm bg-white/10 rounded-xl p-4 border border-white/20">
                    All our installations come with a comprehensive 5-year warranty. 
                    We stand behind our work and ensure complete peace of mind for our clients.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* CTA Button */}
          <div className="text-center mt-12">
            <button className="backdrop-blur-sm bg-gradient-to-r from-blue-600 to-cyan-600 text-white px-12 py-5 rounded-xl font-bold text-lg">
              <span className="flex items-center justify-center gap-3">
                Start Your Project Today
                <ChevronRight className="h-5 w-5" />
              </span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;